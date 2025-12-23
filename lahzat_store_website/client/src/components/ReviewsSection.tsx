import ReviewCard from './ReviewCard';
import { Star } from 'lucide-react';

/**
 * Reviews Section - Luxury Modern Design
 * Customer testimonials and ratings showcase
 * Features: Review cards, overall rating, review count
 */
export default function ReviewsSection() {
  const reviews = [
    {
      id: '1',
      name: 'محمد علي',
      rating: 5,
      comment: 'ساعة رائعة جداً، الجودة ممتازة والتسليم سريع جداً. أنصح الجميع بهذا المتجر.',
      date: 'منذ شهر',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Muhammad',
    },
    {
      id: '2',
      name: 'فاطمة محمد',
      rating: 5,
      comment: 'أفضل متجر للساعات الفاخرة. الموظفون محترفون جداً والخدمة ممتازة.',
      date: 'منذ أسبوعين',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima',
    },
    {
      id: '3',
      name: 'أحمد سالم',
      rating: 5,
      comment: 'شراء الساعة كان تجربة رائعة. المنتج أصلي وجودته عالية جداً.',
      date: 'منذ شهرين',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed',
    },
    {
      id: '4',
      name: 'نور الدين',
      rating: 5,
      comment: 'أفضل استثمار قمت به. الساعة تستحق السعر والجودة فوق التوقعات.',
      date: 'منذ 3 أشهر',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Noor',
    },
    {
      id: '5',
      name: 'ليلى أحمد',
      rating: 4,
      comment: 'ساعة جميلة جداً، الخدمة كانت سريعة والتغليف احترافي.',
      date: 'منذ شهر',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Layla',
    },
    {
      id: '6',
      name: 'سارة محمود',
      rating: 5,
      comment: 'أنا راضية جداً عن الشراء. الساعة تحافظ على الوقت بدقة عالية.',
      date: 'منذ أسبوع',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    },
  ];

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;

  return (
    <section id="reviews" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <span className="text-accent text-sm font-semibold tracking-widest">
              آراء العملاء
            </span>
            <h2 className="text-4xl md:text-5xl text-primary mt-4 mb-6">
              ماذا يقول عملاؤنا
            </h2>
            <p className="text-lg text-primary/60 mb-8">
              آلاف العملاء الراضين يثقون في متجر لحظات للحصول على أفضل الساعات الفاخرة
            </p>

            {/* Overall Rating */}
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <div className="text-4xl font-bold text-primary">{averageRating}</div>
                  <p className="text-sm text-primary/60">من 5 نجوم</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={`${
                        i < Math.floor(parseFloat(averageRating))
                          ? 'fill-accent text-accent'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-primary/60">
                بناءً على {totalReviews} تقييم
              </p>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  {...review}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-accent/20">
          <p className="text-primary/60 mb-6">
            هل لديك تجربة مع متجر لحظات؟
          </p>
          <button className="luxury-button">
            اكتب تقييمك
          </button>
        </div>
      </div>
    </section>
  );
}
