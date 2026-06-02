import { createFileRoute } from '@tanstack/react-router';
import { Package, ShoppingCart, Server, Database, Cloud, Shield } from 'lucide-react';

// بيانات المنتجات
const products = [
  {
    id: 1,
    icon: Cloud,
    name: 'منصة السحاب المتكاملة',
    description: 'حل سحابي شامل لإدارة البنية التحتية',
    category: 'سحابي',
    features: ['إدارة مرنة', 'أمان عالي', 'دعم 24/7'],
  },
  {
    id: 2,
    icon: Shield,
    name: 'نظام الحماية المتقدم',
    description: 'حماية شاملة من التهديدات السيبرانية',
    category: 'أمن',
    features: ['كشف التهديدات', 'جدار حماية', 'تحليل سلوكي'],
  },
  {
    id: 3,
    icon: Database,
    name: 'قاعدة البيانات الذكية',
    description: 'نظام إدارة قواعد بيانات متطور',
    category: 'بيانات',
    features: ['أداء عالي', 'نسخ احتياطي', 'تقارير مفصلة'],
  },
  {
    id: 4,
    icon: Server,
    name: 'خوادم مخصصة',
    description: 'استضافة قوية وموثوقة لتطبيقاتك',
    category: 'استضافة',
    features: ['موارد مخصصة', 'uptime 99.9%', 'دعم فني'],
  },
  {
    id: 5,
    icon: Package,
    name: 'حزمة الشركات',
    description: 'حل متكامل للشركات الكبيرة',
    category: 'مؤسسات',
    features: ['حلول مخصصة', 'تكامل كامل', 'تدريب موظفين'],
  },
  {
    id: 6,
    icon: ShoppingCart,
    name: 'منصة التجارة الإلكترونية',
    description: 'حل تجارة إلكترونية متكامل',
    category: 'تجارة',
    features: ['متجر إلكتروني', 'بوابات دفع', 'إدارة مخزون'],
  },
];

export const Route = createFileRoute('/products')({
  component: ProductsRoute,
});

function ProductsRoute() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            منتجاتنا
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            نقدم مجموعة متنوعة من المنتجات التقنية المبتكرة المصممة لتلبية احتياجات الأعمال الحديثة
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['الكل', 'سحابي', 'أمن', 'بيانات', 'استضافة', 'مؤسسات', 'تجارة'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-md text-sm font-medium bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Product Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <product.icon className="w-16 h-16 text-primary/50" />
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="pt-4 flex gap-3">
                  <a
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    اطلب عرض سعر
                  </a>
                  <button className="px-4 py-2 rounded-md border border-border hover:bg-muted transition-colors">
                    التفاصيل
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            هل تبحث عن حل مخصص لاحتياجاتك؟
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </div>
  );
}
