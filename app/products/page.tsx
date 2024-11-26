import { Header } from '@/components/header'

export default function ProductListing() {
  // This would typically fetch from an API
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, promoted: true },
    { id: 2, name: 'Product 2', price: 29.99, promoted: false },
    { id: 3, name: 'Product 3', price: 39.99, promoted: true },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className={`p-4 bg-card text-card-foreground rounded-lg shadow ${product.promoted ? 'border-2 border-primary' : ''}`}>
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="mb-2">${product.price.toFixed(2)}</p>
              {product.promoted && <span className="text-sm text-primary">Promoted</span>}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

