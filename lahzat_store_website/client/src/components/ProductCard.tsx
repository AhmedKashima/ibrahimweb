import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
  color?: string;
}

/**
 * Product Card - Luxury Modern Design
 * Individual product display with image, details, and rating
 * Features: Hover effects, star rating, CTA button
 */
export default function ProductCard({
  id,
  name,
  price,
  image,
  rating,
  reviews,
  color,
}: ProductCardProps) {
  return (
    <div className="luxury-card hover-lift overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-secondary h-64 md:h-80">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
        />
        {color && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm text-primary font-semibold">
            {color}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < Math.floor(rating)
                    ? 'fill-accent text-accent'
                    : 'text-muted'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-primary/60">
            ({reviews} تقييم)
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <p className="text-2xl font-bold text-primary">{price}</p>
          <p className="text-xs text-primary/50">شامل الضريبة</p>
        </div>

        {/* Divider */}
        <div className="luxury-divider mb-4"></div>

        {/* Button */}
        <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold transition-luxury hover:shadow-lg flex items-center justify-center gap-2">
          <ShoppingCart size={18} />
          أضف إلى السلة
        </button>
      </div>
    </div>
  );
}
