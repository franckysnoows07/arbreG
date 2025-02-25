// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import FamilyDetails from "../components/familyDetail";
import FamilyForm from "../components/familyForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import VisualiserArbre from "./visualiserarbre";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import Chatbot from '../components/Chatbot';
import '../styles/chatbot.css';


const SearchTree = () => {
  const { state } = useContext(AuthContext);
  console.log('AuthContext state:', state); // Debug log
  const username = state.user ? state.user.user : 'Guest';
  console.log('AuthContext username:', username);

  const [selectedTree, setSelectedTree] = useState(null);
  const navigate = useNavigate();

  const handleSelectTree = (tree) => {
    console.log('Selected tree:', tree)
    setSelectedTree(tree);
    navigate(`/seetree/${tree._id}`, { state: { tree } })
  }

  const handleSuggestTree = (suggestedTree) => {
    setSelectedTree(suggestedTree);
  };
  
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
          <h2 className="text-xl font-bold text-[#4B3B2C] mb-4">{username.sName}</h2>
            <FamilyDetails onSelectTree={handleSelectTree} />
          </div>
  
          {/* Create New Tree */}
          <div>
            <h2 className="text-xl font-bold text-[#4B3B2C] mb-4">Créer un nouvel arbre</h2>
            <FamilyForm />
          </div>
        </div>
         {/* Display Selected Tree */}
      {selectedTree && (
        <div className="mt-8">
          <VisualiserArbre tree={selectedTree} />
        </div>
      )}

      {/* Chatbot */}
      <div className="fixed bottom-4 right-4">
        <Chatbot onSuggestTree={handleSuggestTree} />
      </div>
      </div>
    );
  }
  export default SearchTree;
  