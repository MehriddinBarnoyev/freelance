import { Header } from '@/components/header'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-card text-card-foreground rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Reports</h2>
            <p>View and manage user reports</p>
          </div>
          <div className="p-4 bg-card text-card-foreground rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Statistics</h2>
            <p>Site activity and user statistics</p>
          </div>
          <div className="p-4 bg-card text-card-foreground rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">User Management</h2>
            <p>Manage user accounts and permissions</p>
          </div>
          <div className="p-4 bg-card text-card-foreground rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Ad Moderation</h2>
            <p>Review and moderate advertisements</p>
          </div>
          <div className="p-4 bg-card text-card-foreground rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Commission Management</h2>
            <p>Set and manage commission rates</p>
          </div>
          <div className="p-4 bg-card text-card-foreground rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Order Management</h2>
            <p>View and manage user orders</p>
          </div>
        </div>
      </main>
    </div>
  )
}

