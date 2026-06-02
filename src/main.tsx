import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter, createRootRoute } from '@tanstack/react-router';
import './styles.css';

// استيراد الصفحات
import { RootRoute as RootLayout } from './routes/__root';
import { IndexRoute } from './routes/index';
import { ProductsRoute } from './routes/products';
import { ServicesRoute } from './routes/services';
import { PortfolioRoute } from './routes/portfolio';
import { AboutRoute } from './routes/about';
import { ContactRoute } from './routes/contact';
import { AuthRoute } from './routes/auth';

// إنشاء التخطيط الجذري
const rootRoute = createRootRoute({
  component: RootLayout,
});

// إنشاء المسارات
const indexRoute = rootRoute.addChildren([
  {
    path: '/',
    component: IndexRoute,
  },
  {
    path: '/products',
    component: ProductsRoute,
  },
  {
    path: '/services',
    component: ServicesRoute,
  },
  {
    path: '/portfolio',
    component: PortfolioRoute,
  },
  {
    path: '/about',
    component: AboutRoute,
  },
  {
    path: '/contact',
    component: ContactRoute,
  },
  {
    path: '/auth',
    component: AuthRoute,
  },
]);

// إنشاء الراوتر
const router = createRouter({ routeTree: rootRoute });

// تسجيل أنواع الراوتر
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// تشغيل التطبيق
const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
