'use client';

import { useState, useEffect } from 'react';
import { ProductWithPrice, FilterOptions } from '@/lib/types';
import ProductCarousel from '@/components/ProductCarousel';
import FilterPanel from '@/components/FilterPanel';

export default function Home() {
  const [products, setProducts] = useState<ProductWithPrice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [goldPrice, setGoldPrice] = useState<number | null>(null);

  const fetchProducts = async (filters: FilterOptions = {}) => {
    setIsLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      
      if (filters.minPrice) params.append('minPrice', filters.minPrice.toString());
      if (filters.maxPrice) params.append('maxPrice', filters.maxPrice.toString());
      if (filters.minPopularity) params.append('minPopularity', filters.minPopularity.toString());
      if (filters.maxPopularity) params.append('maxPopularity', filters.maxPopularity.toString());
      if (filters.sortBy) params.append('sortBy', filters.sortBy);
      if (filters.sortOrder) params.append('sortOrder', filters.sortOrder);

      const response = await fetch(`/api/products?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();
      setProducts(data.products);
      setGoldPrice(data.goldPrice);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts({ sortBy: 'popularity', sortOrder: 'desc' });
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-[1400px]">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="font-avenir text-[45px] font-normal text-gray-900 tracking-tight">
            Product List
          </h1>
        </header>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-32">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
            <p className="mt-6 text-gray-600 font-medium text-lg">Loading products...</p>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center max-w-md mx-auto">
            <p className="text-red-600 font-medium text-lg">{error}</p>
            <button
              onClick={() => fetchProducts()}
              className="mt-6 px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Products Carousel */}
        {!isLoading && !error && products.length > 0 && (
          <>
            <div className="mb-8">
              <ProductCarousel products={products} />
            </div>

            {/* Gold Price */}
            {goldPrice && (
              <div className="text-center mb-8">
                <p className="text-sm text-gray-600">
                  Current Gold Price: <span className="font-semibold text-yellow-600">${goldPrice.toFixed(2)}</span> per gram
                </p>
              </div>
            )}

            {/* Filter Panel - ALTTA */}
            <div className="mt-12">
              <FilterPanel onFilterChange={fetchProducts} isLoading={isLoading} />
            </div>
          </>
        )}

        {/* Empty State */}
        {!isLoading && !error && products.length === 0 && (
          <div className="text-center py-32">
            <p className="text-gray-600 text-xl font-medium">No products found.</p>
            <button
              onClick={() => fetchProducts({ sortBy: 'popularity', sortOrder: 'desc' })}
              className="mt-6 px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-gray-500">
          <p>© 2025 Product Listing Application</p>
        </footer>
      </div>
    </main>
  );
}