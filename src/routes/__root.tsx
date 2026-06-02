import { Outlet, Link, createRootRoute } from '@tanstack/react-router';
import { Header } from '~/components/site/Header';
import { Footer } from '~/components/site/Footer';
import { ThemeToggle } from '~/components/site/ThemeToggle';
import '../styles.css';

// التخطيط الجذري - يحتوي على الهيكل الأساسي للصفحة
export const RootRoute = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>الباب تيك - حلول تقنية متكاملة</title>
        <meta name="description" content="الباب تيك - شركة تقنية رائدة تقدم حلولاً مبتكرة في مجال التكنولوجيا" />
      </head>
      <body className="min-h-screen bg-background font-almarai antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
