import { Star } from 'lucide-react';

interface ReviewCardProps {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

/**
 * Review Card - Luxury Modern Design
 * Customer review display with rating and feedback
 * Features: Star rating, customer name, date, comment
 */
export default function ReviewCard({
  id,
  name,
  rating,
  comment,
  date,
  avatar,
}: ReviewCardProps) {
  return (
    <div className="luxury-card p-6 hover-lift">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold">
              {name.charAt(0)}
            </div>
          )}
          <div>
            <h4 className="font-bold text-primary">{name}</h4>
            <p className="text-xs text-primary/50">{date}</p>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < rating
                ? 'fill-accent text-accent'
                : 'text-muted'
            }`}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-primary/70 leading-relaxed mb-4">
        "{comment}"
      </p>

      {/* Divider */}
      <div className="luxury-divider"></div>
    </div>
  );
}
