import React, { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full h-16 bg-white shadow-sm border-b border-gray-200 flex items-center px-6 justify-between sticky top-0 z-20">
      {/* Logo (left) */}
      <div className="flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
          <span className="text-white font-bold text-sm">DA</span>
        </div>
        <span className="font-bold text-xl text-gray-800 hidden sm:block">Dashboard de Ayuda</span>
      </div>

      {/* User dropdown (right) */}
      <div className="relative" ref={dropdownRef}>
        <button
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
          onClick={() => setDropdownOpen((open) => !open)}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <i className="fa fa-user text-white text-lg"></i>
          </div>
          <span className="hidden md:block text-sm font-medium text-gray-700">John Doe</span>
          <i className="fa fa-chevron-down text-gray-400 ml-1"></i>
        </button>
        {/* Dropdown menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-fade-in">
            <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <i className="fa fa-user-circle mr-2"></i> Profile
            </button>
            <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <i className="fa fa-cog mr-2"></i> Settings
            </button>
            <hr className="my-2" />
            <button className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
              <i className="fa fa-sign-out-alt mr-2"></i> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
} 