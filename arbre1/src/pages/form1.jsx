import React, { useState } from "react";
import { Link } from 'react-router-dom';

const FormulaireInscription = () => {
  const [formData, setFormData] = useState({
    sname: "",
    fname: "",
    fSname: "",
    fFname: "",
    mSname: "",
    mFname: "",
    fState: "",
    mState: "",
    pob: "",
    gender: "",
    nationality: "",
    ecivil: "",
    email: "",
    dob: "",
    phone: "",
    mdod: "",
    fdod: "",
    child: "",
    nbchild: "",
    profession: "",
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
        setFormData({ ...formData, fState: "mort" });
      } else {
        setFormData({ ...formData, mState: "mort" });
      }
    }
    validateForm();
  };

  const validateForm = () => {
    // Liste des champs requis pour la validation
    const requiredFields = Object.keys(formData).filter((key) => {
      // Exclure dateDecesPere, dateDecesMere, et nombreEnfants de la validation
      if (
        key === "fState" ||
        key === "mState" ||
        key === "child" ||
        key === "fdod" ||
        key === "mdod" ||
        key === "nbchild"   
      ) {
        return false;
      }
      return formData[key] === "";
    });
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
    sname: "",
    fname: "",
    fSname: "",
    fFname: "",
    mSname: "",
    mFname: "",
    fState: "vivant",
    mState: "vivant",
    pob: "",
    gender: "",
    nationality: "",
    ecivil: "",
    email: "",
    dob: "",
    phone: "",
    mdod: "",
    fdod: "",
    child: "",
    nbchild: "",
    profession: "",
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
            <label className="font-bold text-gray-700">Nom  *</label>
            <input
              type="text"
              name="sname"
              value={formData.sname}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Prénoms *</label>
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Nationalité *</label>
            <select
              name="nationality"
              value={formData.nationality}
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
              name="ecivil"
              value={formData.ecivil}
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
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Lieu de naissance *</label>
            <input
              type="text"
              name="pob"
              value={formData.pob}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Genre *</label>
            <select
              name="gender"
              value={formData.gender}
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
              name="fSname"
              value={formData.fSname}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Prénoms du père *</label>
            <input
              type="text"
              name="fFname"
              value={formData.fFname}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Statut du père</label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  name="fState"
                  value="mort"
                  checked={formData.fState === "mort"}
                  onChange={(e) => handleEtatChange(e, "pere")}
                  required
                />
                Mort
              </label>
              <label>
                <input
                  type="radio"
                  name="fState"
                  value="vivant"
                  checked={formData.fState === "vivant"}
                  onChange={(e) => handleEtatChange(e, "pere")}
                />
                Vivant
              </label>
            </div>
            {formData.etatPere === "mort" && (
              <input
                type="date"
                name="fdod"
                value={formData.fdod}
                onChange={handleChange}
                className="w-full bg-gray-200 border py-2 px-4 rounded-md mt-2"
              />
            )}
          </div>

          {/* Nom de la mère et son statut */}
          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Nom de la mère *</label>
            <input
              type="text"
              name="mSname"
              value={formData.mSname}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Prénoms de la mère *</label>
            <input
              type="text"
              name="mFname"
              value={formData.mFname}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Statut de la mère</label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  name="mState"
                  value="morte"
                  checked={formData.mState === "morte"}
                  onChange={(e) => handleEtatChange(e, "mere")}
                  required
                />
                Mort
              </label>
              <label>
                <input
                  type="radio"
                  name="mState"
                  value="vivante"
                  checked={formData.mState === "vivante"}
                  onChange={(e) => handleEtatChange(e, "mere")}
                />
                Vivant
              </label>
            </div>
            {formData.mState === "mort" && (
              <input
                type="date"
                name="mdod"
                value={formData.mdod}
                onChange={handleChange}
                className="w-full bg-gray-200 border py-2 px-4 rounded-md mt-2"
              />
            )}
          </div>

          {/* Enfants */}
          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Avez-vous des enfants ? *</label>
            <select
              name="child"
              value={formData.child}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            >
              <option value="">Choisir</option>
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </select>
          </div>

          {formData.child === "Oui" && (
            <div className="flex flex-col mb-4">
              <label className="font-bold text-gray-700">Nombre d'enfants *</label>
              <input
                type="number"
                name="nbchild"
                value={formData.nbchild}
                onChange={handleChange}
                className="bg-gray-200 border py-2 px-4 rounded-md"
              />
            </div>
          )}
          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Téléphone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>
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
          <Link to="/pprofil">
            <button
              type="submit"
              disabled={!formValid}
              className={`py-2 px-4 rounded-md text-white ${formValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}`}
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
