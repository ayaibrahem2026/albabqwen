import { createFileRoute } from '@tanstack/react-router';
import { Code, Cloud, Shield, Headphones, Users, LineChart } from 'lucide-react';

// بيانات الخدمات
const services = [
  {
    id: 1,
    icon: Code,
    title: 'تطوير البرمجيات',
    description: 'نطور حلولاً برمجية مخصصة تلبي احتياجات عملك بدقة واحترافية',
    features: ['تطبيقات ويب', 'تطبيقات جوال', 'واجهات برمجة APIs'],
  },
  {
    id: 2,
    icon: Cloud,
    title: 'الحلول السحابية',
    description: 'نقل وإدارة البنية التحتية السحابية بأمان وكفاءة عالية',
    features: ['هجرة سحابية', 'إدارة خوادم', 'نسخ احتياطي'],
  },
  {
    id: 3,
    icon: Shield,
    title: 'الأمن السيبراني',
    description: 'حماية شاملة لبياناتك وأنظمتك من التهديدات الإلكترونية',
    features: ['اختبار اختراق', 'مراقبة أمنية', 'استجابة للحوادث'],
  },
  {
    id: 4,
    icon: Headphones,
    title: 'الدعم الفني',
    description: 'دعم فني متواصل على مدار الساعة لضمان استمرارية عملك',
    features: ['دعم 24/7', 'صيانة دورية', 'تحديثات مستمرة'],
  },
  {
    id: 5,
    icon: Users,
    title: 'الاستشارات التقنية',
    description: 'استشارات متخصصة لمساعدتك في اتخاذ القرارات التقنية الصحيحة',
    features: ['تحليل احتياجات', 'تخطيط استراتيجي', 'تحسين أداء'],
  },
  {
    id: 6,
    icon: LineChart,
    title: 'تحليل البيانات',
    description: 'تحويل بياناتك إلى رؤى قابلة للتنفيذ لدفع نمو عملك',
    features: ['لوحات معلومات', 'تقارير مخصصة', 'ذكاء أعمال'],
  },
];

export const Route = createFileRoute('/services')({
  component: ServicesRoute,
});

function ServicesRoute() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            خدماتنا
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            نقدم مجموعة متكاملة من الخدمات التقنية المتخصصة لمساعدة عملك على النمو والازدهار
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-xl border border-border bg-card p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                اطلب الخدمة
              </a>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">كيف نعمل؟</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نتبع منهجية منظمة تضمن نجاح كل مشروع وتسليمه في الوقت المحدد
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'التحليل', desc: 'ندرس متطلباتك بدقة' },
              { step: '02', title: 'التخطيط', desc: 'نضع خطة عمل مفصلة' },
              { step: '03', title: 'التنفيذ', desc: 'نبني الحل بأعلى جودة' },
              { step: '04', title: 'الدعم', desc: 'نقدم دعمًا مستمرًا' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gradient mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">جاهز للبدء؟</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            تواصل معنا اليوم لمناقشة احتياجاتك وكيف يمكننا مساعدتك
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
          >
            احجز استشارة مجانية
          </a>
        </div>
      </div>
    </div>
  );
}
