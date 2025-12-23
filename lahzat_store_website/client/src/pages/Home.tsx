import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

/**
 * Home Page - Luxury Modern Design
 * Main landing page showcasing the watch store
 * Sections: Header, Hero, Products, Reviews, Footer
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
