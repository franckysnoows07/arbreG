import React from "react";

const Dashboard = () => {
  return (
    <main className="flex-1 bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-green-700">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Welcome, Prénom NOM</span>
          <div className="text-gray-500">
            🌐
          </div>
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-700 text-sm">Admin</span>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border-2 border-green-200 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Créer un arbre</h3>
        </div>
        <div className="border-2 border-green-200 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Ajouter un membre</h3>
        </div>
        <div className="border-2 border-green-200 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Créer un lien</h3>
        </div>
        <div className="border-2 border-green-200 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Voir l'arbre</h3>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
