import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function ServicesPage() {
  const services = [
    { id: 1, title: 'تطوير الويب', description: 'بناء مواقع وتطبيقات ويب حديثة' },
    { id: 2, title: 'تطوير الجوال', description: 'تطبيقات iOS و Android' },
    { id: 3, title: 'التصميم UI/UX', description: 'تصاميم عصرية وسهلة الاستخدام' },
    { id: 4, title: 'الاستشارات التقنية', description: 'حلول واستشارات متخصصة' },
    { id: 5, title: 'الأمن السيبراني', description: 'حماية أنظمتك وبياناتك' },
    { id: 6, title: 'الدعم والصيانة', description: 'دعم فني مستمر' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">خدماتنا</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
            <button className="btn-outline btn-sm mt-4 w-full">اطلب الخدمة</button>
          </div>
        ))}
      </div>
    </div>
  )
}
