import { Link } from '@tanstack/react-router';

const footerLinks = {
  products: [
    { href: '/products', label: 'جميع المنتجات' },
    { href: '/products', label: 'الحلول السحابية' },
    { href: '/products', label: 'الأمن السيبراني' },
  ],
  services: [
    { href: '/services', label: 'الاستشارات التقنية' },
    { href: '/services', label: 'التطوير والبرمجة' },
    { href: '/services', label: 'الدعم الفني' },
  ],
  company: [
    { href: '/about', label: 'من نحن' },
    { href: '/portfolio', label: 'أعمالنا' },
    { href: '/contact', label: 'اتصل بنا' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* معلومات الشركة */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-bold text-xl">
                ب
              </div>
              <span className="text-2xl font-bold text-gradient">الباب تيك</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              شركة تقنية رائدة تقدم حلولاً مبتكرة في مجال التكنولوجيا. نسعى لتمكين الأعمال من خلال التقنيات الحديثة.
            </p>
          </div>

          {/* المنتجات */}
          <div>
            <h3 className="font-bold mb-4">المنتجات</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* الخدمات */}
          <div>
            <h3 className="font-bold mb-4">الخدمات</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* الشركة */}
          <div>
            <h3 className="font-bold mb-4">الشركة</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} الباب تيك. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
