import React, { useState } from "react";
import { Link } from 'react-router-dom';


export default function SearchTree() {
    return (
      <div className="bg-[#F5EDE2]  text-amber-950 p-6">
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
  
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Existing Trees */}
          <div>
            <h2 className="text-xl font-bold text-[#4B3B2C] mb-4">GBAGUIDI</h2>
            <div className="space-y-4">
              {["GBAGUIDI", "GBAGUIDI GBAGO", "GBAGUIDI GOUMOUAN"].map((name, index) => (
                <div key={index} className="border border-[#4B3B2C] p-4 rounded-md bg-white">
                  <h3 className="font-bold text-[#4B3B2C] text-left">{name}</h3>
                  <p className="text-sm text-[#4B3B2C] text-left">Membres: 50</p>
                  <p className="text-sm text-[#4B3B2C] text-left">Créé par : Aurel VIGNON</p>
                  <div className="text-right text-[#4B3B2C] cursor-pointer text-xl">👁</div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Create New Tree */}
          <div>
            <h2 className="text-xl font-bold text-[#4B3B2C] mb-4">Créer un nouvel arbre</h2>
            <form className="bg-white p-6 border border-[#4B3B2C] rounded-md">
              <label className="block text-[#4B3B2C] font-semibold mb-1">Nom de l’arbre (Votre nom de famille)</label>
              <input type="text" placeholder="Tode" className="w-full p-2 border border-[#4B3B2C] rounded-md mb-4" />
  
              <label className="block text-[#4B3B2C] font-semibold mb-1">Description</label>
              <textarea className="w-full p-2 border border-[#4B3B2C] rounded-md mb-4"></textarea>
  
              <button className="w-full bg-[#4B3B2C] text-white p-2 rounded-md font-semibold">Créer</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  