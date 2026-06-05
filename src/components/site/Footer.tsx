import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-primary">الباب تيك</h3>
            <p className="text-sm text-muted-foreground">
              حلول تقنية مبتكرة لمستقبل رقمي أفضل
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition">
                  المنتجات
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition">
                  الخدمات
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">تواصل معنا</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@babtech.sa</li>
              <li>+966 50 000 0000</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3">تابعنا</h4>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                تويتر
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                لينكد إن
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} الباب تيك. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
