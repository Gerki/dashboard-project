import React from 'react';

const Sidebar = () => (
  <aside className="w-64 bg-white shadow h-screen hidden md:block">
    <div className="p-6 font-bold text-xl border-b">SaaS Dashboard</div>
    <nav className="mt-6">
      <ul className="space-y-2">
        <li><a href="#" className="block px-6 py-2 hover:bg-gray-100 rounded">Dashboard</a></li>
        <li><a href="#" className="block px-6 py-2 hover:bg-gray-100 rounded">Analytics</a></li>
        <li><a href="#" className="block px-6 py-2 hover:bg-gray-100 rounded">Billing</a></li>
        <li><a href="#" className="block px-6 py-2 hover:bg-gray-100 rounded">Users</a></li>
        <li><a href="#" className="block px-6 py-2 hover:bg-gray-100 rounded">Settings</a></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar; 