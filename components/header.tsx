import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Marketplace
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/admin">Admin</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/profile">Profile</Link></li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}

