'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ProductWithPrice, ColorOption } from '@/lib/types';
import { calculatePopularityOutOfFive, formatPrice } from '@/lib/utils';
import ColorPicker from './ColorPicker';
import StarRating from './StarRating';

interface ProductCardProps {
  product: ProductWithPrice;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState<ColorOption>('yellow');
  const popularityRating = calculatePopularityOutOfFive(product.popularityScore);

  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="relative aspect-square bg-gray-50 flex items-center justify-center p-8">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          width={300}
          height={300}
          className="object-contain w-full h-full"
          priority
        />
      </div>
      
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-montserrat font-semibold text-lg text-gray-900 mb-1">
            {product.name}
          </h3>
          <p className="font-avenir text-2xl font-bold text-gray-900">
            {formatPrice(product.price)} <span className="text-sm font-normal text-gray-500">USD</span>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <ColorPicker 
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
          />
          <span className="text-xs text-gray-500 font-medium">
            {selectedColor === 'yellow' ? 'Yellow Gold' : selectedColor === 'white' ? 'White Gold' : 'Rose Gold'}
          </span>
        </div>

        <StarRating rating={popularityRating} />
      </div>
    </div>
  );
}