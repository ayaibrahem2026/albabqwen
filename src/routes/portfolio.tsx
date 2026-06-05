import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio')({
  component: PortfolioPage,
})

function PortfolioPage() {
  const projects = [
    { id: 1, title: 'مشروع 1', category: 'تطوير ويب' },
    { id: 2, title: 'مشروع 2', category: 'تطبيق جوال' },
    { id: 3, title: 'مشروع 3', category: 'تصميم' },
    { id: 4, title: 'مشروع 4', category: 'تطوير ويب' },
    { id: 5, title: 'مشروع 5', category: 'تطبيق جوال' },
    { id: 6, title: 'مشروع 6', category: 'تصميم' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">أعمالنا</h1>
      
      {/* Filter Buttons */}
      <div className="flex gap-2 justify-center mb-8 flex-wrap">
        <button className="btn-primary btn-sm">الكل</button>
        <button className="btn-outline btn-sm">تطوير ويب</button>
        <button className="btn-outline btn-sm">تطبيق جوال</button>
        <button className="btn-outline btn-sm">تصميم</button>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="card overflow-hidden group">
            <div className="h-48 bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="btn-outline text-white">عرض التفاصيل</button>
              </div>
            </div>
            <div className="p-4">
              <span className="text-sm text-primary">{project.category}</span>
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
