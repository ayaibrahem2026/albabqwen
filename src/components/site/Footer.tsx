import { Link } from '@tanstack/react-router'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { href: '/about', label: 'من نحن' },
      { href: '/services', label: 'الخدمات' },
      { href: '/portfolio', label: 'أعمالنا' },
    ],
    support: [
      { href: '/contact', label: 'اتصل بنا' },
      { href: '/products', label: 'المنتجات' },
    ],
  }

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary mb-4 inline-block">
              الباب تيك
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              حلول تقنية مبتكرة لأعمالك الرقمية. نساعدك على تحويل أفكارك إلى واقع رقمي ملموس.
            </p>
            <div className="flex gap-4">
              {['twitter', 'linkedin', 'github'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  🔗
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">الشركة</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href as any}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">الدعم</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href as any}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} الباب تيك. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
