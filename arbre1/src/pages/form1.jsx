import React, { useState } from "react";

const FormulaireInscription = () => {
  const [formData, setFormData] = useState({
    nomComplet: "",
    nationalite: "",
    etatCivil: "",
    email: "",
    telephone: "",
    profession: "",
    dateNaissance: "",
    lieuNaissance: "",
    genre: "",
    nomPere: "",
    etatPere: "vivant",
    dateDecesPere: "",
    nomMere: "",
    etatMere: "vivant",
    dateDecesMere: "",
    enfants: "",
    nombreEnfants: "",
  });

  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateForm();
  };

  const handleEtatChange = (e, parent) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.value === "mort") {
      if (parent === "pere") {
        setFormData({ ...formData, etatPere: "mort" });
      } else {
        setFormData({ ...formData, etatMere: "mort" });
      }
    }
    validateForm();
  };

  const validateForm = () => {
    const requiredFields = Object.keys(formData).filter((key) => formData[key] === "");
    setFormValid(requiredFields.length === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      // Envoi des informations à la base de données 
      console.log("Données envoyées :", formData);
      // Réinitialiser le formulaire
      handleReset();
    }
  };

  const handleReset = () => {
    setFormData({
      nomComplet: "",
      nationalite: "",
      etatCivil: "",
      email: "",
      telephone: "",
      profession: "",
      dateNaissance: "",
      lieuNaissance: "",
      genre: "",
      nomPere: "",
      etatPere: "vivant",
      dateDecesPere: "",
      nomMere: "",
      etatMere: "vivant",
      dateDecesMere: "",
      enfants: "",
      nombreEnfants: "",
    });
  };

  return (
    <section className='py-12 bg-gradient-to-b from-gray-100 to-amber-950 text-black'>
      <form onSubmit={handleSubmit}>
        <div className="entete">
        <h4 className="mb-4 text-xl font-bold text-center text-gray-900">Formulaire d'inscription</h4>
          <div>
          <h4>Veuillez remplir ce formulaire avec attention!</h4><br />
          </div>
          <div className="flex w-max">
            <div className="flex ml-12 mr-20">
              <div className="bg-gray-100 w-7 h-7 mr-1">
                1 
              </div>
              <h4>
                Informations personnelles
              </h4>
            </div>
            <div className="flex ml-16 mr-20">
              <div className="bg-gray-300 w-7 h-7 mr-1">
                2 
              </div>
              <h4>
                Photos de profil
              </h4>
            </div>
            <div className="flex ml-16 mr-20">
              <div className="bg-gray-300 w-7 h-7 mr-1">
                3 
              </div>
              <h4>
                Biographie
              </h4>
            </div>
            <div className="flex ml-16 mr-20">
              <div className="bg-gray-300 w-7 h-7 mr-1">
                4 
              </div>
              <h4>
                Configuration du compte
              </h4>
            </div>
            
          </div><br />
          <div>
            <h4>Les champs marqués d'un astérisque * sont obligatoires</h4>
          </div><br />
          <div className="h-px bg-black"></div><br />
        </div>

        {/* Principal grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-8">
          {/* Première colonne */}
          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Nom complet *</label>
            <input
              type="text"
              name="nomComplet"
              value={formData.nomComplet}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Nationalité *</label>
            <select
              name="nationalite"
              value={formData.nationalite}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            >
              <option value="">Choisir</option>
              <option value="Benin">Bénin</option>
              <option value="Togo">Togo</option>
            </select>
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">État civil *</label>
            <select
              name="etatCivil"
              value={formData.etatCivil}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            >
              <option value="">Choisir</option>
              <option value="Marie">Marié</option>
              <option value="Celibataire">Célibataire</option>
            </select>
          </div>

          {/* Deuxième colonne */}
          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Téléphone *</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Profession *</label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          {/* Troisième colonne */}
          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Date de naissance *</label>
            <input
              type="date"
              name="dateNaissance"
              value={formData.dateNaissance}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Lieu de naissance *</label>
            <input
              type="text"
              name="lieuNaissance"
              value={formData.lieuNaissance}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Genre *</label>
            <select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            >
              <option value="">Choisir</option>
              <option value="Masculin">Masculin</option>
              <option value="Feminin">Féminin</option>
            </select>
          </div>

          {/* Quatrième rangée (commence avec 2 colonnes) */}
          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Nom du père *</label>
            <input
              type="text"
              name="nomPere"
              value={formData.nomPere}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Statut du père *</label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  name="etatPere"
                  value="mort"
                  checked={formData.etatPere === "mort"}
                  onChange={(e) => handleEtatChange(e, "pere")}
                  required
                />
                Mort
              </label>
              <label>
                <input
                  type="radio"
                  name="etatPere"
                  value="vivant"
                  checked={formData.etatPere === "vivant"}
                  onChange={(e) => handleEtatChange(e, "pere")}
                />
                Vivant
              </label>
            </div>
            {formData.etatPere === "mort" && (
              <input
                type="date"
                name="dateDecesPere"
                value={formData.dateDecesPere}
                onChange={handleChange}
                required
                className="w-full bg-gray-200 border py-2 px-4 rounded-md mt-2"
              />
            )}
          </div>

          {/* Nom de la mère et son statut */}
          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Nom de la mère *</label>
            <input
              type="text"
              name="nomMere"
              value={formData.nomMere}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Statut de la mère *</label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  name="etatMere"
                  value="mort"
                  checked={formData.etatMere === "mort"}
                  onChange={(e) => handleEtatChange(e, "mere")}
                  required
                />
                Mort
              </label>
              <label>
                <input
                  type="radio"
                  name="etatMere"
                  value="vivant"
                  checked={formData.etatMere === "vivant"}
                  onChange={(e) => handleEtatChange(e, "mere")}
                />
                Vivant
              </label>
            </div>
            {formData.etatMere === "mort" && (
              <input
                type="date"
                name="dateDecesMere"
                value={formData.dateDecesMere}
                onChange={handleChange}
                required
                className="w-full bg-gray-200 border py-2 px-4 rounded-md mt-2"
              />
            )}
          </div>

          {/* Enfants */}
          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Avez-vous des enfants ? *</label>
            <select
              name="enfants"
              value={formData.enfants}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            >
              <option value="">Choisir</option>
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </select>
          </div>

          {formData.enfants === "Oui" && (
            <div className="flex flex-col mb-4">
              <label className="font-bold text-gray-700">Nombre d'enfants *</label>
              <input
                type="number"
                name="nombreEnfants"
                value={formData.nombreEnfants}
                onChange={handleChange}
                required
                className="bg-gray-200 border py-2 px-4 rounded-md"
              />
            </div>
          )}
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
            disabled={!formValid}
            className={`py-2 px-4 rounded-md text-white ${formValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}`}
          >
            Continuer
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormulaireInscription;
