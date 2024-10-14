import React, { useState } from "react";

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
    <section className="py-12 bg-gradient-to-b from-gray-100 to-amber-950 text-black">
      <form onSubmit={handleSubmit}>
        <div className="entete">
          <h4 className="mb-4 text-xl font-bold text-center text-gray-900">Formulaire d'inscription</h4>
          <div>
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
            <div className="flex ml-20">
              <div className="bg-gray-300 w-7 h-7 mr-1">4</div>
              <h4>Configuration du compte</h4>
            </div>
          </div><br />
          <div>
            <h4>Les champs marqués d'un astérisque * sont obligatoires</h4>
          </div><br />
          <div className="h-px bg-black"></div><br />
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
            className="bg-gray-200 border py-2 px-4 rounded-md w-full"
            placeholder="Écrivez votre biographie ici..."
          />
        </div>

        {/* Boutons de soumission et d'annulation */}
        <div className="flex justify-center space-x-20 mt-8">
          <button
            type="button"
            onClick={handleReset}
            className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={!formValid} // Désactiver le bouton si la biographie est vide
            className={`py-2 px-4 rounded-md text-white ${formValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}`}
          >
            Continuer
          </button>
        </div>
      </form>
    </section>
  );
};

export default Bio;
