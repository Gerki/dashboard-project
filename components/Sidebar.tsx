import React, { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    {
      label: 'Organization',
      icon: 'fa fa-building',
      key: 'organization',
    },
    {
      label: 'People',
      icon: 'fa fa-users',
      key: 'people',
      empty: true,
    },
    {
      label: 'Files',
      icon: 'fa fa-folder',
      key: 'files',
      submenu: [
        {
          label: 'Chats',
          icon: 'fa fa-comments',
          key: 'chats',
        },
        {
          label: 'File Authorizer Tool',
          icon: 'fa fa-check-circle',
          key: 'file-authorizer',
        },
      ],
    },
    {
      label: 'Industry',
      icon: 'fa fa-industry',
      key: 'industry',
    },
    {
      label: 'Asset Inventory',
      icon: 'fa fa-archive',
      key: 'asset-inventory',
    },
    {
      label: 'Match Zone',
      icon: 'fa fa-exchange-alt',
      key: 'match-zone',
    },
    {
      label: 'Augmented Reality / GPS Tracking',
      icon: 'fa fa-map-marker-alt',
      key: 'ar-gps',
    },
    {
      label: 'Evidences',
      icon: 'fa fa-camera',
      key: 'evidences',
    },
    {
      label: 'Reports',
      icon: 'fa fa-chart-bar',
      key: 'reports',
    },
  ];

  return (
    <>
      {/* Mobile overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden ${isCollapsed ? 'hidden' : 'block'}`} 
           onClick={() => setIsCollapsed(true)} />
      
      {/* Sidebar */}
      <aside className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
        isCollapsed ? '-translate-x-full' : 'translate-x-0'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DA</span>
            </div>
            <span className="font-bold text-xl text-gray-800">Dashboard</span>
          </div>
          <button 
            onClick={() => setIsCollapsed(true)}
            className="md:hidden p-1 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.key}>
                {item.submenu ? (
                  <div>
                    <button
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 focus:outline-none"
                      onClick={() => setOpenFiles((open) => !open)}
                    >
                      <i className={`${item.icon} w-5 h-5`}></i>
                      <span className="font-medium">{item.label}</span>
                      <svg className={`w-4 h-4 ml-auto transition-transform ${openFiles ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {openFiles && (
                      <ul className="ml-8 mt-1 space-y-1">
                        {item.submenu.map((sub) => (
                          <li key={sub.key}>
                            <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200">
                              <i className={`${sub.icon} w-4 h-4`}></i>
                              <span className="text-sm">{sub.label}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : item.empty ? (
                  <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 cursor-not-allowed bg-gray-50">
                    <i className={`${item.icon} w-5 h-5`}></i>
                    <span className="font-medium">{item.label}</span>
                    <span className="ml-auto text-xs text-gray-300">(Coming soon)</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveItem(item.key)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeItem === item.key
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <i className={`${item.icon} w-5 h-5`}></i>
                    <span className="font-medium">{item.label}</span>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-800">Pro Plan</div>
                <div className="text-xs text-gray-500">Upgrade for more features</div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile menu button */}
      <button 
        onClick={() => setIsCollapsed(false)}
        className="md:hidden fixed top-4 left-4 z-30 p-2 bg-white rounded-lg shadow-lg"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  );
};

export default Sidebar; 