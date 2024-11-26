import { NextResponse } from 'next/server'

export async function GET() {
  // This would typically fetch from a database
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, promoted: true },
    { id: 2, name: 'Product 2', price: 29.99, promoted: false },
    { id: 3, name: 'Product 3', price: 39.99, promoted: true },
  ]

  return NextResponse.json(products)
}

