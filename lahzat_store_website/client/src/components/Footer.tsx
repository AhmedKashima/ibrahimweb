import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

/**
 * Footer Component - Luxury Modern Design
 * Contact information, links, and social media
 * Features: Multiple columns, social links, contact info
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary text-lg font-bold">⌚</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">لحظات</h3>
                <p className="text-xs text-white/60">Lahzat Store</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              متخصصون في بيع الساعات الفاخرة والعصرية. جودة مضمونة وخدمة عملاء متميزة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-all duration-300">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/70 hover:text-accent transition-all duration-300">
                  المنتجات
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-white/70 hover:text-accent transition-all duration-300">
                  التقييمات
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-all duration-300">
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-6">الفئات</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-all duration-300">
                  ساعات رجالية
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-all duration-300">
                  ساعات نسائية
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-all duration-300">
                  ساعات رياضية
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-all duration-300">
                  ساعات ذكية
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">اتصل بنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:+967782875877" className="text-white/70 hover:text-accent transition-all duration-300">
                  +967 782 875 877
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:info@lahzat.com" className="text-white/70 hover:text-accent transition-all duration-300">
                  info@lahzat.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-1" />
                <span className="text-white/70">صنعاء، اليمن</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm">
            © {currentYear} متجر لحظات. جميع الحقوق محفوظة.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
