import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products')({
  component: ProductsPage,
})

function ProductsPage() {
  const products = [
    { id: 1, name: 'منتج 1', description: 'وصف المنتج', price: '99 ر.س' },
    { id: 2, name: 'منتج 2', description: 'وصف المنتج', price: '149 ر.س' },
    { id: 3, name: 'منتج 3', description: 'وصف المنتج', price: '199 ر.س' },
    { id: 4, name: 'منتج 4', description: 'وصف المنتج', price: '249 ر.س' },
    { id: 5, name: 'منتج 5', description: 'وصف المنتج', price: '299 ر.س' },
    { id: 6, name: 'منتج 6', description: 'وصف المنتج', price: '349 ر.س' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">منتجاتنا</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card overflow-hidden">
            <div className="h-48 bg-muted" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-bold">{product.price}</span>
                <button className="btn-primary btn-sm">أضف للسلة</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
