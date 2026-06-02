import { createFileRoute } from '@tanstack/react-router';
import { Award, Users, Target, Lightbulb, CheckCircle } from 'lucide-react';

// بيانات الإحصائيات
const stats = [
  { icon: Award, value: '5+', label: 'سنوات خبرة' },
  { icon: Users, value: '30+', label: 'عميل سعيد' },
  { icon: Target, value: '50+', label: 'مشروع ناجح' },
  { icon: Lightbulb, value: '10+', label: 'جائزة وإنجاز' },
];

// القيم
const values = [
  {
    title: 'الابتكار',
    description: 'نسعى دائماً لتطوير حلول مبتكرة تواكب أحدث التقنيات',
  },
  {
    title: 'الجودة',
    description: 'نلتزم بأعلى معايير الجودة في كل مشروع ننفذه',
  },
  {
    title: 'الشفافية',
    description: 'نؤمن بالتواصل الصريح والواضح مع عملائنا',
  },
  {
    title: 'الالتزام',
    description: 'نحترم المواعيد النهائية ونلتزم بتسليم المشاريع في وقتها',
  },
];

// فريق العمل
const team = [
  { name: 'أحمد محمد', role: 'المدير التنفيذي', image: '/team/ceo.jpg' },
  { name: 'سارة أحمد', role: 'مديرة التقنية', image: '/team/cto.jpg' },
  { name: 'محمد علي', role: 'مدير المشاريع', image: '/team/pm.jpg' },
  { name: 'فاطمة حسن', role: 'قائدة التصميم', image: '/team/design.jpg' },
];

export const Route = createFileRoute('/about')({
  component: AboutRoute,
});

function AboutRoute() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            من نحن
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            الباب تيك هي شركة تقنية رائدة متخصصة في تقديم حلول برمجية مبتكرة 
            تساعد الأعمال على النمو والازدهار في العصر الرقمي
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">قصتنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              تأسست الباب تيك عام 2019 برؤية واضحة: تمكين الشركات من الاستفادة 
              من أحدث التقنيات لتحقيق أهدافها التجارية. بدأنا كفريق صغير من المطورين 
              الشغوفين، واليوم نفخر بخدمة عشرات العملاء الناجحين.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              نؤمن بأن التكنولوجيا يجب أن تكون أداة لتمكين الإنسان، وليس تعقيد حياته. 
              لذلك نركز على بناء حلول سهلة الاستخدام وفعالة في نفس الوقت.
            </p>
            
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                تواصل معنا
              </a>
            </div>
          </div>
          
          <div className="relative h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <div className="text-primary/30 text-8xl font-bold">الباب تيك</div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-muted/50 rounded-2xl p-12 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">قيمنا</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              المبادئ التي نسير عليها وتوجه قراراتنا اليومية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">فريقنا</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نخبة من المتخصصين الشغوفين بالتكنولوجيا والابتكار
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary/50" />
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">هل تريد الانضمام إلينا؟</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            نحن دائماً نبحث عن مواهب جديدة لتنضم إلى فريقنا المتنامي
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
          >
            انضم لفريقنا
          </a>
        </div>
      </div>
    </div>
  );
}
