import { createFileRoute } from '@tanstack/react-router';
import { ArrowLeft, Cloud, Shield, Code, Zap } from 'lucide-react';

// بيانات المميزات
const features = [
  {
    icon: Cloud,
    title: 'الحلول السحابية',
    description: 'بنية تحتية سحابية آمنة وقابلة للتوسع',
  },
  {
    icon: Shield,
    title: 'الأمن السيبراني',
    description: 'حماية متقدمة لبياناتك وأنظمتك',
  },
  {
    icon: Code,
    title: 'التطوير المخصص',
    description: 'حلول برمجية مصممة خصيصاً لاحتياجاتك',
  },
  {
    icon: Zap,
    title: 'أداء عالي',
    description: 'تطبيقات سريعة وموثوقة على مدار الساعة',
  },
];

export const Route = createFileRoute('/')({
  component: IndexRoute,
});

function IndexRoute() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              مرحباً بكم في{' '}
              <span className="text-gradient">الباب تيك</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              شركة تقنية رائدة تقدم حلولاً مبتكرة في مجال التكنولوجيا. 
              نسعى لتمكين الأعمال من خلال التقنيات الحديثة والحلول المتكاملة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
              >
                استكشف منتجاتنا
                <ArrowLeft className="mr-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا تختار الباب تيك؟</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نقدم مجموعة متكاملة من الخدمات التقنية التي تساعدك على تحقيق أهدافك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              جاهز للبدء؟
            </h2>
            <p className="text-muted-foreground text-lg">
              تواصل معنا اليوم لاكتشاف كيف يمكننا مساعدتك في تحقيق أهدافك التقنية
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
            >
              ابدأ الآن
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
