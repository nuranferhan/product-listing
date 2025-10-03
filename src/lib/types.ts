export interface Product {
  name: string;
  popularityScore: number;
  weight: number;
  images: {
    yellow: string;
    rose: string;
    white: string;
  };
}

export interface ProductWithPrice extends Product {
  price: number;
  id: string;
}

export type ColorOption = 'yellow' | 'rose' | 'white';

export interface FilterOptions {
  minPrice?: number;
  maxPrice?: number;
  minPopularity?: number;
  maxPopularity?: number;
  sortBy?: 'price' | 'popularity' | 'name';
  sortOrder?: 'asc' | 'desc';
}