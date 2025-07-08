import Head from 'next/head';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DashboardCard from '../components/DashboardCard';
import ChartCard from '../components/ChartCard';
import ActivityFeed from '../components/ActivityFeed';
import Organization from '../components/Organization';
import People from '../components/People';
import Files from '../components/Files';
import Chats from '../components/Chats';
import FileAuthorizerTool from '../components/FileAuthorizerTool';
import Industry from '../components/Industry';
import AssetInventory from '../components/AssetInventory';
import MatchZone from '../components/MatchZone';
import AugmentedReality from '../components/AugmentedReality';
import Evidences from '../components/Evidences';
import Reports from '../components/Reports';

export default function Home() {
  const [selectedModule, setSelectedModule] = useState('organization');
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  // Sample data for dashboard cards
  const statsData = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z',
      iconColor: 'blue' as const,
    },
    {
      title: 'Revenue',
      value: '$45,231',
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
      iconColor: 'green' as const,
    },
    {
      title: 'Active Sessions',
      value: '1,234',
      change: '-2.1%',
      changeType: 'negative' as const,
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      iconColor: 'purple' as const,
    },
    {
      title: 'Support Tickets',
      value: '89',
      change: '+15.3%',
      changeType: 'positive' as const,
      icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z',
      iconColor: 'orange' as const,
    },
  ];

  // Sample activity data
  const activities = [
    {
      id: '1',
      type: 'user' as const,
      title: 'New user registered',
      description: 'John Doe created a new account',
      time: '2 minutes ago',
    },
    {
      id: '2',
      type: 'payment' as const,
      title: 'Payment received',
      description: 'Monthly subscription payment from user #1234',
      time: '15 minutes ago',
    },
    {
      id: '3',
      type: 'system' as const,
      title: 'System update completed',
      description: 'Database maintenance finished successfully',
      time: '1 hour ago',
    },
    {
      id: '4',
      type: 'notification' as const,
      title: 'New support ticket',
      description: 'High priority ticket from customer support',
      time: '2 hours ago',
    },
  ];

  // Simple chart component (placeholder)
  const SimpleChart = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <p className="text-gray-500 text-sm">Chart visualization would go here</p>
        <p className="text-gray-400 text-xs">Connect a charting library like Chart.js or Recharts</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Head>
        <title>Dashboard de Ayuda - Modern SaaS Dashboard</title>
        <meta name="description" content="Modern SaaS dashboard with analytics and management tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Sidebar onSelect={setSelectedModule} />
      
      <div className="flex-1 flex flex-col">
        <Navbar />
        
        <main className="flex-1 p-6 md:p-8">
          {selectedModule === 'organization' && <Organization />}
          {selectedModule === 'people' && <People />}
          {selectedModule === 'files' && <Files />}
          {selectedModule === 'chats' && <Chats />}
          {selectedModule === 'file-authorizer' && <FileAuthorizerTool />}
          {selectedModule === 'industry' && <Industry />}
          {selectedModule === 'asset-inventory' && <AssetInventory />}
          {selectedModule === 'match-zone' && <MatchZone />}
          {selectedModule === 'ar-gps' && <AugmentedReality />}
          {selectedModule === 'evidences' && <Evidences />}
          {selectedModule === 'reports' && <Reports />}
        </main>
      </div>
    </div>
  );
} 