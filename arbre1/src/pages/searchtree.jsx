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

  const [showChatbot, setShowChatbot] = useState(false);

  
    return (
      <div className="bg-[#F5EDE2] text-amber-950 h-auto w-screen flex flex-col">
      {/* Contenu centré et large */}
    <div className="flex-grow container mx-auto px-4 py-6 w-full max-w-[90%]">
      
      {/* HEADER */}
      <div className="entete bg-[#F5EDE2] shadow-md p-4 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <img src="src/assets/logo.png" alt="image" className="w-30 h-20 ml-8" />
          <div className="hidden md:flex space-x-8 text-lg">
            <a href="#accueil" className="text-amber-950 hover:bg-orange-50 px-2 py-1 rounded">
              Accueil
            </a>
            <a href="#connection" className="text-amber-950 hover:bg-orange-50 px-2 py-1 rounded">
              Connection
            </a>
            <a href="#enregistrement" className="text-amber-950 hover:bg-orange-50 px-2 py-1 rounded">
              Enregistrement
            </a>
          </div>
          <div className="text-[#6D8E48] text-3xl">🌍</div>
        </div>
        <div className="h-1 bg-amber-950"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {/* Existing Trees */}
        <div>
          <h2 className="text-xl font-bold text-[#4B3B2C] mb-4">{username.sName}</h2>
          <FamilyDetails onSelectTree={handleSelectTree} />
        </div>

        {/* Create New Tree */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-bold text-[#4B3B2C] mb-4">Créer un nouvel arbre</h2>
          <form>
            <label className="block text-sm font-medium text-gray-700">Nom de l’arbre</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg bg-white text-gray-900"
              placeholder="Nom"
            />
            <label className="block text-sm font-medium text-gray-700 mt-4">Description</label>
            <textarea
              className="w-full p-2 border rounded-lg bg-white text-gray-900"
              placeholder="Description..."
            ></textarea>
            <button className="mt-4 bg-[#4B3B2C] text-white py-2 px-4 rounded-lg w-full">
              Créer
            </button>
          </form>
        </div>
      </div>

      {/* Display Selected Tree */}
      {selectedTree && (
        <div className="mt-8">
          <VisualiserArbre tree={selectedTree} />
        </div>
      )}
    </div>

      {/* Chatbot repositionné */}
      {!showChatbot && (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        className="p-8 bg-amber-950 border-0 text-[#F5EDE2] rounded-full shadow-lg hover:bg-amber-900 hover:text-[#F5EDE2] transition"
        onClick={() => setShowChatbot(true)}
      >
        <i className="fa-solid fa-message"></i>
      </button>
    </div>
    )}

    {showChatbot && (
      <div className="fixed bottom-6 right-6">
        <Chatbot onSuggestTree={handleSuggestTree} />
        <button 
          className="mt-2 p-4 bg-amber-950 text-white rounded-full shadow hover:amber-900 transition"
          onClick={() => setShowChatbot(false)}
        >
          <i class="fa-solid fa-xmark w-5"></i>
        </button>
      </div>
    )}
    </div>
    );
  }
  export default SearchTree;
  