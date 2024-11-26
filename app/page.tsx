import Link from 'next/link'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { ArrowRight, ShoppingBag, Users, BarChart } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Marketplace</h1>
          <p className="text-xl text-muted-foreground mb-6">Discover, Buy, and Sell with Ease</p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/products">
                Browse Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/admin">
                Admin Panel <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card text-card-foreground rounded-lg shadow p-6">
            <ShoppingBag className="h-12 w-12 mb-4 text-primary" />
            <h2 className="text-2xl font-semibold mb-2">Wide Product Range</h2>
            <p>Explore our diverse collection of products from trusted sellers.</p>
          </div>
          <div className="bg-card text-card-foreground rounded-lg shadow p-6">
            <Users className="h-12 w-12 mb-4 text-primary" />
            <h2 className="text-2xl font-semibold mb-2">User-Friendly</h2>
            <p>Easy-to-use platform for both buyers and sellers.</p>
          </div>
          <div className="bg-card text-card-foreground rounded-lg shadow p-6">
            <BarChart className="h-12 w-12 mb-4 text-primary" />
            <h2 className="text-2xl font-semibold mb-2">Insightful Analytics</h2>
            <p>Track your performance with detailed statistics and reports.</p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-6">Join our community of buyers and sellers today!</p>
          <Button asChild size="lg">
            <Link href="/profile">
              Create Your Account <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
      </main>
    </div>
  )
}

