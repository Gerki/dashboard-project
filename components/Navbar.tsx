import React from 'react';

const Navbar = () => (
  <header className="w-full h-16 bg-white shadow flex items-center px-6 justify-between">
    <div className="font-semibold text-lg">Dashboard de Ayuda</div>
    <div>
      {/* Placeholder for user menu or actions */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign In</button>
    </div>
  </header>
);

export default Navbar; 