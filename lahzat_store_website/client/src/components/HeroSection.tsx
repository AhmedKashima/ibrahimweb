/**
 * Hero Section - Luxury Modern Design
 * Main banner with featured watch image and welcome message
 * Features: Responsive layout, gradient overlay, CTA button
 */
export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-watches.png"
          alt="مجموعة الساعات الفاخرة"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-2xl">
          <div className="mb-6 inline-block">
            <span className="text-accent text-sm font-semibold tracking-widest">
              متجر لحظات
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl text-primary mb-6 leading-tight">
            استمتع بكل لحظة
            <br />
            <span className="text-accent">مع ساعات فاخرة</span>
          </h1>

          <p className="text-lg text-primary/70 mb-8 max-w-xl leading-relaxed">
            اكتشف مجموعة حصرية من أفضل الساعات العالمية. كل ساعة تروي قصة وتعكس أسلوبك الفريد.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="luxury-button">
              اكتشف المجموعة
            </button>
            <button className="luxury-button-secondary">
              تصفح المنتجات
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-accent/20">
            <div>
              <div className="text-2xl font-bold text-accent mb-2">+500</div>
              <p className="text-sm text-primary/60">منتج فاخر</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-primary/60">أصلي مضمون</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-2">24/7</div>
              <p className="text-sm text-primary/60">خدمة عملاء</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
