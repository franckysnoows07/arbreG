import React from "react";
import { Link } from 'react-router-dom';

const FamilyTreeForm = () => {
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
        
      {/* Formulaire */}
      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-4xl grid grid-cols-2 gap-8">
          {/* Colonne Gauche */}
          <div className="space-y-4">
            <div>
              <label className="block font-semibold">Nom</label>
              <input type="text" value="TODE" className="w-full border p-2 rounded bg-white" />
            </div>
            <div>
              <label className="block font-semibold">Prénom</label>
              <input type="text" value="Junion" className="w-full border p-2 rounded bg-white" />
            </div>
            <div>
              <label className="block font-semibold">Nom de l’arbre (Votre nom de famille)</label>
              <input type="text" value="TODE" className="w-full border p-2 rounded bg-white" />
            </div>
            <button className="bg-[#3D2B1F] text-white px-6 py-2 rounded">Ajouter</button>
          </div>

          {/* Colonne Droite */}
          <div className="p-4 border rounded bg-white">
            <div className="mb-4">
              <label className="block font-semibold">Nom / Père</label>
              <input type="text" value="TODE" className="w-full border p-2 rounded bg-white" />
            </div>
            <div>
              <label className="block font-semibold">Nom / Mère</label>
              <input type="text" value="TODE" className="w-full border p-2 rounded bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Suivant */}
      <div className="flex justify-end mt-6">
        <button className="bg-[#3D2B1F] text-white px-6 py-2 rounded">Suivant</button>
      </div>
    </div>
  );
};

export default FamilyTreeForm;
