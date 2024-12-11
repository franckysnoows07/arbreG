import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Bio = () => {
  const [biographie, setBiographie] = useState("");
  const [formValid, setFormValid] = useState(false);

  // Met à jour le texte et vérifie si le formulaire est valide
  const handleChange = (e) => {
    setBiographie(e.target.value);
    validateForm(e.target.value);
  };

  // Valide le formulaire pour s'assurer que la biographie n'est pas vide
  const validateForm = (value) => {
    setFormValid(value.trim() !== ""); // Si la biographie n'est pas vide, le formulaire est valide
  };

  // Gère la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      console.log("Biographie envoyée :", biographie);
      handleReset(); // Réinitialise le formulaire
    }
  };

  // Réinitialise le formulaire
  const handleReset = () => {
    setBiographie("");
    setFormValid(false); // Réinitialise aussi la validation du formulaire
  };

  return (
    <section className="py-12 bg-orange-50 text-amber-950">
      <form onSubmit={handleSubmit}>
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

              <i class="fa-sharp fa-solid fa-globe"></i>
          </div>

          <div className="h-1 bg-amber-950"></div><br />

          <div className="text-left ml-12 text-xl ">
              <h4>Veuillez remplir ce formulaire avec attention!</h4><br />
          </div>

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
              <div className="bg-gray-300 w-7 h-7 mr-1">3</div>
              <h4>Biographie</h4>
            </div>
            <div className="flex ml-16 mr-20">
              <div className="bg-gray-300 w-7 h-7 ">4</div>
              <h4>Configuration du compte</h4>
            </div>
          </div><br />
        </div>

        {/* Zone de texte pour la biographie */}
        <div className="flex flex-col mb-4 px-8 relative">
          <label className="font-bold text-gray-700">Biographie *</label>
          <textarea
            id="biographieTextarea"
            name="biographie"
            value={biographie}
            onChange={handleChange}
            rows="6"
            required
            className="bg-stone-300 border h-72 py-2 px-4 rounded-md w-full"
            placeholder="Écrivez votre biographie ici..."
          />
        </div>

        {/* Boutons de retour et d'annulation */}               
          <div className="flex justify-center space-x-96 mt-8">
          <Link to="/pprofil">
              <button
                  type="button"
                  onClick={handleReset}
                  className="py-2 px-4 bg-orange-50 text-amber-950 border border-amber-950 text-xl rounded-md hover:bg-amber-950 hover:text-orange-50"
              >
                  Retour
              </button>
          </Link>
          <Link to="/bio">
              <button
              type="submit"
              className={`bg-amber-950 text-white py-2 px-6 ${!formValid ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-800"}`}
              disabled={!formValid}
              >
              Continuer
              </button>
          </Link>
          </div>
      </form>
    </section>
  );
};

export default Bio;
