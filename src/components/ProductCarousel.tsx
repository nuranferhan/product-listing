'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { ProductWithPrice } from '@/lib/types';
import ProductCard from './ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

interface ProductCarouselProps {
  products: ProductWithPrice[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={38}
        slidesPerView={1}
        scrollbar={{ 
          draggable: true,
          dragClass: 'swiper-scrollbar-drag'
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 38,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 38,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 38,
          },
        }}
        className="!px-12"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button 
        className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200"
        aria-label="Previous"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200"
        aria-label="Next"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}