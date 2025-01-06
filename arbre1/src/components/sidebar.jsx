import React from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 w-64 h-screen flex flex-col">
      <div className="flex items-center justify-center py-6">
        <h1 className="text-2xl font-bold text-green-700">ArbreG</h1>
      </div>
      <nav className="flex flex-col flex-1 space-y-2">
        <a
          href="#"
          className="bg-green-100 text-green-700 font-medium py-3 px-4 rounded-md"
        >
          Dashboard
        </a>
        <Link to="/dashpers" className="hover:bg-gray-200 py-3 px-4">
            Personnes
        </Link>
        <Link to="/dashlien" className="hover:bg-gray-200 py-3 px-4">
            Lien
        </Link>
        <Link to="/arbre" className="hover:bg-gray-200 py-3 px-4">
            Voir l'Arbre
        </Link>
      </nav>
    </aside>

  );
};

export default Sidebar;
