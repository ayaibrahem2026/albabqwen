import { createFileRoute } from '@tanstack/react-router';
import { ExternalLink, ArrowLeft } from 'lucide-react';

// بيانات المشاريع
const projects = [
  {
    id: 1,
    title: 'منصة التجارة الإلكترونية',
    category: 'تطوير ويب',
    description: 'منصة تجارة إلكترونية متكاملة مع بوابات دفع متعددة',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 2,
    title: 'تطبيق إدارة المستشفيات',
    category: 'تطبيقات',
    description: 'نظام متكامل لإدارة المستشفيات والعيادات الطبية',
    image: '/api/placeholder/600/400',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    link: '#',
  },
  {
    id: 3,
    title: 'نظام المحاسبة السحابي',
    category: 'حلول سحابية',
    description: 'حل محاسبي سحابي للشركات الصغيرة والمتوسطة',
    image: '/api/placeholder/600/400',
    tags: ['Vue.js', 'AWS', 'Python'],
    link: '#',
  },
  {
    id: 4,
    title: 'بوابة التعليم الإلكتروني',
    category: 'تطوير ويب',
    description: 'منصة تعليمية تفاعلية مع فصول افتراضية',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'WebRTC', 'MongoDB'],
    link: '#',
  },
  {
    id: 5,
    title: 'تطبيق التوصيل',
    category: 'تطبيقات',
    description: 'تطبيق توصيل طلبات مع تتبع مباشر',
    image: '/api/placeholder/600/400',
    tags: ['Flutter', 'Google Maps', 'Node.js'],
    link: '#',
  },
  {
    id: 6,
    title: 'نظام إدارة الموارد البشرية',
    category: 'حلول سحابية',
    description: 'نظم متكامل لإدارة شؤون الموظفين والرواتب',
    image: '/api/placeholder/600/400',
    tags: ['Angular', '.NET', 'SQL Server'],
    link: '#',
  },
];

const categories = ['الكل', 'تطوير ويب', 'تطبيقات', 'حلول سحابية'];

export const Route = createFileRoute('/portfolio')({
  component: PortfolioRoute,
});

function PortfolioRoute() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            أعمالنا
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            اكتشف مشاريعنا الناجحة وكيف ساعدنا عملاءنا على تحقيق أهدافهم
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2.5 rounded-md text-sm font-medium bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="text-primary/30 text-6xl font-bold">مشروع</div>
                
                {/* Overlay Link */}
                <a
                  href={project.link}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="bg-background/90 backdrop-blur-sm rounded-full p-3">
                    <ExternalLink className="w-6 h-6 text-primary" />
                  </div>
                </a>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-4"
                >
                  عرض المشروع
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-muted/50 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'مشروع ناجح' },
              { value: '30+', label: 'عميل سعيد' },
              { value: '5+', label: 'سنوات خبرة' },
              { value: '24/7', label: 'دعم فني' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">هل لديك مشروع في ذهنك؟</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            دعنا نساعدك في تحويل فكرتك إلى واقع ملموس
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
          >
            ابدأ مشروعك الآن
          </a>
        </div>
      </div>
    </div>
  );
}
