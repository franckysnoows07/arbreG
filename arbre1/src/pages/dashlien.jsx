import React from "react";
import Sidebar2 from "../components/sidebar2";
import CrudTable from "../components/crudtable";

const DashLien = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar2 />
      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-green-700">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, Prénom NOM</span>
            <button className="text-gray-500">🌐</button>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm">PN</span>
            </div>
          </div>
        </div>
        {/* Tableau CRUD */}
        <CrudTable />
      </main>
    </div>
  );
};

export default DashLien;
