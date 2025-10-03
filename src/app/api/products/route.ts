import { NextRequest, NextResponse } from 'next/server';
import productsData from '@/data/products.json';
import { Product, ProductWithPrice, FilterOptions } from '@/lib/types';

export const dynamic = 'force-dynamic';

async function getGoldPrice(): Promise<number> {
  try {
    const response = await fetch('https://api.coinbase.com/v2/prices/PAXG-USD/spot', {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      console.log('Coinbase API failed, using fallback');
      return 68.50;
    }

    const data = await response.json();
    const pricePerOunce = parseFloat(data.data.amount);
    const pricePerGram = pricePerOunce / 31.1035;
    
    console.log('Gold price fetched:', pricePerGram);
    return parseFloat(pricePerGram.toFixed(2));
  } catch (error) {
    console.error('Failed to fetch gold price:', error);
    return 68.50;
  }
}

function calculatePrice(product: Product, goldPrice: number): number {
  return (product.popularityScore + 1) * product.weight * goldPrice;
}

function filterProducts(
  products: ProductWithPrice[],
  filters: FilterOptions
): ProductWithPrice[] {
  let filtered = [...products];

  if (filters.minPrice !== undefined) {
    filtered = filtered.filter(p => p.price >= filters.minPrice!);
  }

  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter(p => p.price <= filters.maxPrice!);
  }

  if (filters.minPopularity !== undefined) {
    filtered = filtered.filter(p => p.popularityScore >= filters.minPopularity!);
  }

  if (filters.maxPopularity !== undefined) {
    filtered = filtered.filter(p => p.popularityScore <= filters.maxPopularity!);
  }

  if (filters.sortBy) {
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (filters.sortBy) {
        case 'price':
          comparison = a.price - b.price;
          break;
        case 'popularity':
          comparison = a.popularityScore - b.popularityScore;
          break;
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
      }

      return filters.sortOrder === 'desc' ? -comparison : comparison;
    });
  }

  return filtered;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    const filters: FilterOptions = {
      minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
      maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
      minPopularity: searchParams.get('minPopularity') ? Number(searchParams.get('minPopularity')) : undefined,
      maxPopularity: searchParams.get('maxPopularity') ? Number(searchParams.get('maxPopularity')) : undefined,
      sortBy: (searchParams.get('sortBy') as FilterOptions['sortBy']) || undefined,
      sortOrder: (searchParams.get('sortOrder') as FilterOptions['sortOrder']) || 'asc',
    };

    console.log('Fetching gold price...');
    const goldPrice = await getGoldPrice();

    const productsWithPrices: ProductWithPrice[] = (productsData as Product[]).map((product, index) => ({
      ...product,
      id: `product-${index + 1}`,
      price: calculatePrice(product, goldPrice),
    }));

    const filteredProducts = filterProducts(productsWithPrices, filters);

    console.log(`Returning ${filteredProducts.length} products`);

    return NextResponse.json({
      products: filteredProducts,
      goldPrice,
      total: filteredProducts.length,
      filters
    });

  } catch (error) {
    console.error('Products API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}