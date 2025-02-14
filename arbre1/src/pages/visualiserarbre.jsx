import React from "react";
import { Link } from 'react-router-dom';

const VisualiserArbre = () => {
  return (
    <div className="min-h-screen bg-[#F8F1E7] text-[#3D2B1F] px-8 py-4">
      {/* Navbar */}
      <div className="entete">
        <div className="container mx-auto px-4 flex items-center justify-between mb-4">
              <img
                  src="src\assets\logo.png"
                  alt="image"
                  className="w-30 h-20 ml-8"
              
              />
              <div className="hidden md:flex space-x-8 text-lg">
              <a href="#accueil" className="text-amber-950 hover:bg-orange-50 border-y-0">
                  Accueil
              </a>
              <a href="#connection" className="text-amber-950 hover:bg-orange-50 border-y-0">
                  Connection
              </a>
              <a href="#enregistrement" className="text-amber-950 hover:bg-orange-50 border-y-0">
                  Enregistrement
              </a>
              </div>

              <div className="text-[#6D8E48] text-3xl">🌍</div>
          </div>

          <div className="h-1 bg-amber-950"></div><br />
          <div className="flex w-max">
            <div className="flex ml-12 mr-20">
              <div className="mr-1">✅</div>
              <h4>Informations personnelles</h4>
            </div>
            <div className="flex ml-16 mr-20">
              <div className="mr-1">✅</div>
              <h4>Photos de profil</h4>
            </div>
            <div className="flex ml-16 mr-20">
              <div className="mr-1">✅</div>
              <h4>Biographie</h4>
            </div>
            <div className="flex ml-16 mr-20">
              <div className="mr-1">✅</div>
              <h4>Configuration du compte</h4>
            </div>
          </div><br />
        </div>

      {/* Contenu principal */}
      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-5xl grid grid-cols-2 gap-8 border border-[#3D2B1F] p-4">
          {/* Colonne Gauche */}
          <div className="space-y-6 border-r border-[#3D2B1F] pr-4">
            <div className="h-40 bg-white border border-[#3D2B1F] rounded"></div>
            <div className="h-40 bg-white border border-[#3D2B1F] rounded"></div>
          </div>

          {/* Colonne Droite */}
          <div className="pl-4">
            <div className="h-full bg-white border border-[#3D2B1F] rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualiserArbre;
