'use client';

interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-4 h-4 fill-yellow-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#E5E7EB" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-4 h-4 fill-gray-300" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span className="ml-1 text-sm font-medium text-gray-700">{rating.toFixed(1)}/5</span>
    </div>
  );
}