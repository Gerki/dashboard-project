import React, { useState } from 'react';

export default function Organization() {
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleOrgAction = (action: string) => (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Action: ${action} ("${orgName}")`);
  };

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Invitation sent to: ${email}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <form className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 p-6" onSubmit={handleOrgAction('Create')}>
        <fieldset>
          <legend className="text-lg font-semibold text-gray-900 mb-4">Organization management</legend>
          <div className="mb-4">
            <label htmlFor="org-nombre" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="org-nombre"
              name="organizacion"
              value={orgName}
              onChange={e => setOrgName(e.target.value)}
              placeholder="Nombre de su organización"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              size={40}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="submit" onClick={handleOrgAction('Create')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Create</button>
            <button type="button" onClick={handleOrgAction('Edit')} className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">Edit</button>
            <button type="button" onClick={handleOrgAction('Delete')} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Delete</button>
            <button type="button" onClick={handleOrgAction('Archive')} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">Archive</button>
            <button type="button" onClick={handleOrgAction('Recover')} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Recover</button>
          </div>
        </fieldset>
      </form>
      <form className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 p-6" onSubmit={handleInvite}>
        <fieldset>
          <legend className="text-lg font-semibold text-gray-900 mb-4">Invite to this organization</legend>
          <div className="mb-4">
            <label htmlFor="org-invitar-email" className="block text-sm font-medium text-gray-700 mb-1">Email from the user</label>
            <input
              type="email"
              id="org-invitar-email"
              name="email_invitacion_organizacion"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="usuario@ejemplo.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              size={50}
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Invite to this organization</button>
        </fieldset>
      </form>
      {message && (
        <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg px-4 py-2 text-center">{message}</div>
      )}
    </div>
  );
} 