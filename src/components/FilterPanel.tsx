'use client';

import { useState } from 'react';
import { FilterOptions } from '@/lib/types';

interface FilterPanelProps {
  onFilterChange: (filters: FilterOptions) => void;
  isLoading?: boolean;
}

export default function FilterPanel({ onFilterChange, isLoading }: FilterPanelProps) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState<FilterOptions['sortBy']>('popularity');
  const [sortOrder, setSortOrder] = useState<FilterOptions['sortOrder']>('desc');

  const handleApplyFilters = () => {
    const filters: FilterOptions = {
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      sortBy,
      sortOrder,
    };
    onFilterChange(filters);
  };

  const handleReset = () => {
    setMinPrice('');
    setMaxPrice('');
    setSortBy('popularity');
    setSortOrder('desc');
    onFilterChange({ sortBy: 'popularity', sortOrder: 'desc' });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      <h3 className="font-montserrat font-semibold text-lg mb-4">Filters & Sorting</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-2">
            Min Price ($)
          </label>
          <input
            id="minPrice"
            name="minPrice"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0"
          />
        </div>

        <div>
          <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-2">
            Max Price ($)
          </label>
          <input
            id="maxPrice"
            name="maxPrice"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="10000"
          />
        </div>

        <div>
          <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-2">
            Sort By
          </label>
          <select
            id="sortBy"
            name="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as FilterOptions['sortBy'])}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="popularity">Popularity</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </div>

        <div>
          <label htmlFor="sortOrder" className="block text-sm font-medium text-gray-700 mb-2">
            Order
          </label>
          <select
            id="sortOrder"
            name="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as FilterOptions['sortOrder'])}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        <button
          onClick={handleApplyFilters}
          disabled={isLoading}
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Loading...' : 'Apply Filters'}
        </button>
        <button
          onClick={handleReset}
          disabled={isLoading}
          className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reset
        </button>
      </div>
    </div>
  );
}