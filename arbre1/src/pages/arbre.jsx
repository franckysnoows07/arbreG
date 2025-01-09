import React from "react";
import Sidebar4 from "../components/sidebar4";
import ViewTree from "../components/viewtree";
const Arbre = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar4 */}
      <Sidebar4 />
      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        {/* Header */}
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
        {/* Voir l'arbre Section */}
        <ViewTree />
      </main>
    </div>
  );
};

export default Arbre;
