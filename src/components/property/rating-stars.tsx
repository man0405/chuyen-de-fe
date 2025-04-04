import { cn } from '@/lib/utils'

interface RatingStarsProps {
  rating?: number
  reviews?: number
}

export function RatingStars({ rating = 1, reviews = 1 }: RatingStarsProps) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={cn(
            'h-4 w-4',
            star <= rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-muted stroke-muted-foreground'
          )}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ))}
      <span className="ml-2 text-sm font-medium">
        {rating?.toFixed(1)} ({reviews})
      </span>
    </div>
  )
}
