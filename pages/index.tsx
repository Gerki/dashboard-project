import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-4">Dashboard de Ayuda</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example dashboard cards */}
            <div className="bg-white rounded-lg shadow p-6">Analytics Card</div>
            <div className="bg-white rounded-lg shadow p-6">Billing Card</div>
            <div className="bg-white rounded-lg shadow p-6">User Management Card</div>
          </div>
        </main>
      </div>
    </div>
  );
} 