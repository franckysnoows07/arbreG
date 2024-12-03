import React, { useState } from "react";
import { Link } from 'react-router-dom';

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
    prenomPere: "",
    nomMere: "",
    prenomMere: "",
    enfants: "",
    nombreEnfants: "",
  });

  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateForm({ ...formData, [name]: value }); // Valider les données après l'update
  };

  const validateForm = (data) => {
    const requiredFields = ["nomComplet", "nationalite", "etatCivil", "email", "telephone", "profession", "dateNaissance", "lieuNaissance", "genre", "nomPere", "nomMere"];
    const isValid = requiredFields.every((field) => data[field].trim() !== "");

    if (data.enfants === "Oui") {
      if (!data.nombreEnfants || data.nombreEnfants <= 0) {
        setFormValid(false);
        return;
      }
    }

    setFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      console.log("Données envoyées :", formData);
      handleReset();
    } else {
      console.log("Formulaire incomplet ou incorrect");
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
      prenomPere: "",
      nomMere: "",
      prenomMere: "",
      enfants: "",
      nombreEnfants: "",
    });
    setFormValid(false);
  };

  return (
    <section className='py-10 bg-orange-50 text-amber-950'>
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

          <div className="flex w-max text-xm">
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
            
          </div>
          
        </div>

        <div className="ml-8 mr-8 h-px bg-amber-950"></div><br />

        {/* Principal grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-8">
          {/* Première colonne */}
          <div className="flex flex-col mb-4">
            <label className="font-bold text-amber-950">Nom complet *</label>
            <input
              type="text"
              name="nomComplet"
              value={formData.nomComplet}
              onChange={handleChange}
              required
              className="bg-stone-300 border py-2 px-4 border-amber-950"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-amber-950">Nationalité *</label>
            <select
              name="nationalite"
              value={formData.nationalite}
              onChange={handleChange}
              required
              className="bg-stone-300 border py-2 px-4 border-amber-950"
            >
              <option value="">Choisir</option>
              <option value="Benin">Bénin</option>
              <option value="Togo">Togo</option>
            </select>
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-amber-950">État civil *</label>
            <select
              name="etatCivil"
              value={formData.etatCivil}
              onChange={handleChange}
              required
              className="bg-stone-300 border py-2 px-4 border-amber-950"
            >
              <option value="">Choisir</option>
              <option value="Marie">Marié</option>
              <option value="Celibataire">Célibataire</option>
            </select>
          </div>

          {/* Deuxième colonne */}
          <div className="flex flex-col mb-4">
            <label className="font-bold text-amber-950">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-stone-300 border py-2 px-4 border-amber-950"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-amber-950">Téléphone *</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              className="bg-stone-300 border py-2 px-4 border-amber-950"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-amber-950">Profession *</label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              required
              className="bg-stone-300 border py-2 px-4 border-amber-950"
            />
          </div>

          {/* Troisième colonne */}
          <div className="flex flex-col mb-4">
            <label className="font-bold text-amber-950">Date de naissance *</label>
            <input
              type="date"
              name="dateNaissance"
              value={formData.dateNaissance}
              onChange={handleChange}
              required
              className="bg-stone-300 border py-2 px-4 border-amber-950"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-amber-950">Lieu de naissance *</label>
            <input
              type="text"
              name="lieuNaissance"
              value={formData.lieuNaissance}
              onChange={handleChange}
              required
              className="bg-stone-300 border py-2 px-4 border-amber-950"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-amber-950">Genre *</label>
            <select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
              className="bg-stone-300 border py-2 px-4 border-amber-950"
            >
              <option value="">Choisir</option>
              <option value="Masculin">Masculin</option>
              <option value="Feminin">Féminin</option>
            </select>
          </div>

          {/* Quatrième rangée (commence avec 2 colonnes) */}
          <div className="flex flex-col mb-4">
            <label className="font-bold text-amber-950">Nom du père *</label>
            <input
              type="text"
              name="nomPere"
              value={formData.nomPere}
              onChange={handleChange}
              required
              className="bg-stone-300 border py-2 px-4 border-amber-950"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-amber-950">Prenom du pere *</label>
            <input
              type="text"
              name="prenomPere"
              value={formData.prenomPere}
              onChange={handleChange}
              required
              className="bg-stone-300 border py-2 px-4 border-amber-950"
            />
          </div>

          {/* Nom et prenom de la mere*/}
          <div className="flex flex-col mb-4">
            <label className="font-bold text-amber-950">Nom de la mère *</label>
            <input
              type="text"
              name="nomMere"
              value={formData.nomMere}
              onChange={handleChange}
              required
              className="bg-stone-300 border py-2 px-4 border-amber-950"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-amber-950">Prenom de la mere</label>
            <input
              type="text"
              name="prenomMere"
              value={formData.prenomMere}
              onChange={handleChange}
              required
              className="bg-stone-300 border py-2 px-4 border-amber-950"
            />
          </div><br />

          {/* Enfants */}
          <div className="flex flex-col mb-4">
            <label className="font-bold text-amber-950">Avez-vous des enfants ? *</label>
            <select
              name="enfants"
              value={formData.enfants}
              onChange={handleChange}
              required
              className="bg-stone-300 border py-2 px-4 border-amber-950"
            >
              <option value="">Choisir</option>
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </select>
          </div>

          {formData.enfants === "Oui" && (
            <div className="flex flex-col mb-4">
              <label className="font-bold text-amber-950">Nombre d'enfants *</label>
              <input
                type="number"
                name="nombreEnfants"
                value={formData.nombreEnfants}
                onChange={handleChange}
                className="bg-stone-300 border py-2 px-4 border-amber-950"
              />
            </div>
          )}
        </div>

        {/* Boutons de soumission et d'annulation */}
        <div className="flex justify-center space-x-96 mt-8">
          <button
            type="button"
            onClick={handleReset}
            className="py-2 px-4 bg-orange-50 text-amber-950 border border-amber-950 text-xl rounded-md hover:bg-amber-950 hover:text-orange-50"
          >
            Annuler
          </button>
          <Link to="/pprofil">
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

export default FormulaireInscription;
