import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">من نحن</h1>
      
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">قصتنا</h2>
          <p className="text-muted-foreground leading-relaxed">
            الباب تيك هي شركة تقنية رائدة متخصصة في تقديم حلول رقمية مبتكرة. 
            تأسست بهدف مساعدة الأعمال على التحول الرقمي وتحقيق أهدافها التقنية.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">رؤيتنا</h2>
          <p className="text-muted-foreground leading-relaxed">
            نسعى لأن نكون الشريك التقني المفضل للشركات في المنطقة، من خلال تقديم 
            حلول تقنية عالية الجودة وخدمات استثنائية.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">قيمنا</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['الابتكار', 'الجودة', 'الشفافية', 'الالتزام'].map((value) => (
              <div key={value} className="card p-4">
                <h3 className="font-semibold">{value}</h3>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">فريقنا</h2>
          <p className="text-muted-foreground leading-relaxed">
            نضم فريقاً من الخبراء والمتخصصين في مختلف المجالات التقنية، 
            الذين يعملون بشغف لتحقيق أفضل النتائج لعملائنا.
          </p>
        </section>
      </div>
    </div>
  )
}
