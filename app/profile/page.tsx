import { Header } from '@/components/header'

export default function UserProfile() {
  // This would typically fetch from an API
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    balance: 500.00,
    holdBalance: 100.00,
    membershipLevel: 'VIP'
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">User Profile</h1>
        <div className="bg-card text-card-foreground rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">{user.name}</h2>
          <p className="mb-2">Email: {user.email}</p>
          <p className="mb-2">Balance: ${user.balance.toFixed(2)}</p>
          <p className="mb-2">Hold Balance: ${user.holdBalance.toFixed(2)}</p>
          <p className="mb-2">Membership Level: {user.membershipLevel}</p>
        </div>
      </main>
    </div>
  )
}

