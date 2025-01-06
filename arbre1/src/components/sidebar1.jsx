import React from "react";
import { Link } from 'react-router-dom';

const Sidebar1 = () => {
  return (
    <aside className="bg-gray-100 w-64 h-screen flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center py-6">
        <h1 className="text-2xl font-bold text-green-700">ArbreG</h1>
      </div>
      {/* Navigation */}
      <nav className="flex flex-col flex-1 space-y-2">

        <Link to="/dash1" className="py-3 px-4 hover:bg-gray-200 rounded-md">
          Dashboard
        </Link>
        <a
          href="#"
          className="bg-green-100 text-green-700 font-medium py-3 px-4 rounded-md"
        >
          Personnes
        </a>
        <Link to="/dashlien" className="py-3 px-4 hover:bg-gray-200 rounded-md">
          Lien
        </Link>
       
        <Link to="/arbre" className="py-3 px-4 hover:bg-gray-200 rounded-md">
          Voir l'arbre
        </Link>

      </nav>
    </aside>
  );
};

export default Sidebar1;
