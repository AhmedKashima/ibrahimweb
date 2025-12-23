import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component - Luxury Modern Design
 * Navigation bar with logo and menu items
 * Features: Sticky positioning, responsive mobile menu
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'المنتجات', href: '#products' },
    { label: 'المجموعات', href: '#collections' },
    { label: 'التقييمات', href: '#reviews' },
    { label: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-accent/20 shadow-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-accent text-xl font-bold">⌚</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary">لحظات</h1>
            <p className="text-xs text-accent">Lahzat Store</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-primary hover:text-accent transition-all duration-300 font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="luxury-button text-sm">
            تواصل معنا
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-secondary border-t border-accent/20">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-primary hover:text-accent transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="luxury-button w-full text-sm mt-4">
              تواصل معنا
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
