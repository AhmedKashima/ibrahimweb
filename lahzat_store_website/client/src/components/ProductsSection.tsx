import ProductCard from './ProductCard';

/**
 * Products Section - Luxury Modern Design
 * Grid display of featured products with filtering options
 * Features: Responsive grid, product cards, category filters
 */
export default function ProductsSection() {
  const products = [
    {
      id: '1',
      name: 'ساعة كلاسيكية ذهبية',
      price: '1,299 ر.ي',
      image: '/images/featured-watch.png',
      rating: 5,
      reviews: 48,
      color: 'ذهبي',
    },
    {
      id: '2',
      name: 'ساعة فضية فاخرة',
      price: '1,599 ر.ي',
      image: '/images/collection-showcase.png',
      rating: 5,
      reviews: 32,
      color: 'فضي',
    },
    {
      id: '3',
      name: 'ساعة رياضية سوداء',
      price: '899 ر.ي',
      image: '/images/hero-watches.png',
      rating: 4,
      reviews: 24,
      color: 'أسود',
    },
    {
      id: '4',
      name: 'ساعة أنيقة برونزية',
      price: '1,199 ر.ي',
      image: '/images/featured-watch.png',
      rating: 5,
      reviews: 56,
      color: 'برونزي',
    },
    {
      id: '5',
      name: 'ساعة ذكية حديثة',
      price: '1,799 ر.ي',
      image: '/images/collection-showcase.png',
      rating: 4,
      reviews: 41,
      color: 'فضي',
    },
    {
      id: '6',
      name: 'ساعة كلاسيكية جديدة',
      price: '1,099 ر.ي',
      image: '/images/hero-watches.png',
      rating: 5,
      reviews: 67,
      color: 'ذهبي',
    },
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest">
            مجموعتنا
          </span>
          <h2 className="text-4xl md:text-5xl text-primary mt-4 mb-6">
            أفضل الساعات الفاخرة
          </h2>
          <p className="text-lg text-primary/60 max-w-2xl mx-auto">
            اختر من مجموعة واسعة من الساعات الفاخرة التي تعكس أسلوبك وشخصيتك
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="luxury-button-secondary">
            عرض جميع المنتجات
          </button>
        </div>
      </div>
    </section>
  );
}
