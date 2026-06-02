import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: IndexPage,
})

function IndexPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          الباب تيك
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          حلول تقنية مبتكرة لأعمالك الرقمية
        </p>
        <div className="flex gap-4 justify-center">
          <button className="btn-primary">ابدأ الآن</button>
          <button className="btn-outline">اعرف المزيد</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">مميزاتنا</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">ميزة {i}</h3>
              <p className="text-muted-foreground">وصف الميزة هنا</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
