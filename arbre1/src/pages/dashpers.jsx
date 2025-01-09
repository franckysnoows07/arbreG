import React from "react";
import Sidebar1 from "../components/sidebar1";
import PersonsTable from "../components/personnes";

function DashPersonne() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar1 />
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-700">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span>Welcome, Prénom NOM</span>
            <button className="text-gray-500">🌐</button>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm">Admin</span>
            </div>
          </div>
        </div>
        {/* Table */}
        <PersonsTable />
      </main>
    </div>
  );
}

export default DashPersonne;
