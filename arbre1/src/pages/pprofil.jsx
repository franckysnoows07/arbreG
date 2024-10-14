import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai"; 
import { Link } from 'react-router-dom';

function P_Profil() {
    const [profileImage, setProfileImage] = useState(null);
    const [formValid, setFormValid] = useState(false);
    const [dragActive, setDragActive] = useState(false);

    // Gère la sélection de fichier via l'input
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setProfileImage(file);
            setFormValid(true);
        } else {
            setProfileImage(null);
            setFormValid(false);
        }
    };

    // Gère la validation pour le drag-and-drop
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            setProfileImage(file);
            setFormValid(true);
        } else {
            setProfileImage(null);
            setFormValid(false);
        }
        setDragActive(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => {
        setDragActive(false);
    };

    // Gère la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValid) {
            // Envoyer la photo de profil
            console.log("Photo de profil envoyée :", profileImage);
            handleReset(); // Réinitialiser le formulaire
        }
    };

    // Réinitialise le formulaire
    const handleReset = () => {
        setProfileImage(null);
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
                        <div className="bg-gray-300 w-7 h-7 mr-1">2</div>
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
                    <div>
                        <h4>Les champs marqués d'un astérisque * sont obligatoires</h4>
                    </div><br />
                    <div className="h-px bg-black"></div><br />
                </div>

                {/* Zone pour la photo de profil (upload ou drag-and-drop) */}
                <div
                    className={`flex flex-col items-center justify-center mb-4 px-8 py-10 relative border-4 border-dashed rounded-xl transition-colors duration-200 ease-in-out ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-100"}`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                >
                    <label className="font-bold text-gray-700 mb-2">Photo de profil *</label>
                    <input
                        type="file"
                        id="imageUpload"
                        name="profileImage"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden" />
                    <label htmlFor="imageUpload" className="cursor-pointer flex flex-col items-center justify-center h-full w-full text-center">
                        {profileImage ? (
                            <>
                                <img src={URL.createObjectURL(profileImage)} alt="Photo de profil" className="w-24 h-24 object-cover rounded-full" />
                                <span className="text-gray-700 mt-4">{profileImage.name}</span>
                            </>
                        ) : (
                            <>
                                <AiOutlineCloudUpload className="text-6xl text-gray-400 mb-4" />
                                <span className="text-gray-600">
                                    Glissez et déposez une image ici ou cliquez pour choisir un fichier
                                </span>
                            </>
                        )}
                    </label>
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
                    <Link to="/bio">
                        <button
                            type="submit"
                            disabled={!formValid} // Désactiver le bouton si la photo de profil n'est pas sélectionnée
                            className={`py-2 px-4 rounded-md text-white ${formValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}`}
                        >
                            Continuer
                    </button>
                    </Link>
                </div>
            </form>
        </section>
    );
}

export default P_Profil;
