import React from "react";
import { Link } from 'react-router-dom';

const Sidebar2 = () => {
  return (
    <aside className="bg-gray-100 w-64 h-screen p-6 fixed">
      {/* Logo */}
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-3xl font-bold text-green-700">ArbreG</h1>
      </div>
      {/* Menu Items */}
      <nav className="flex flex-col flex-1 space-y-2">
        <Link to="/dash1" className="hover:bg-gray-200 py-3 px-4">
            Dashboard
        </Link>
        <Link to="/dashpers" className="hover:bg-gray-200 py-3 px-4">
            Personnes
        </Link>
        <Link to="/dashlien" className="bg-green-100 text-green-700 font-medium py-3 px-4 rounded-md">
            Lien
        </Link>
        <Link to="/arbre" className="hover:bg-gray-200 py-3 px-4">
            Voir l'Arbre
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar2;
