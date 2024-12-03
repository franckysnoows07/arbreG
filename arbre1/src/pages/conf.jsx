import React, { useState } from "react";
import { Link } from "react-router-dom";

const Conf = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formValid, setFormValid] = useState(false);

  // Validation du formulaire
  const validateForm = () => {
    const isValid =
      email.trim() !== "" &&
      username.trim() !== "" &&
      password.trim() !== "" &&
      password === confirmPassword;
    setFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      console.log("Form submitted:", {
        email,
        username,
        password,
      });
      handleReset();
    }
  };

  const handleReset = () => {
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setFormValid(false);
  };

  return (
    <section className="py-12 bg-orange-50 text-amber-950">
      <form onSubmit={handleSubmit}>
        <div className="entete">
          <div className="container mx-auto px-4 flex items-center justify-between mb-4">
            <img
              src="src/assets/logo.png"
              alt="logo"
              className="w-30 h-20 ml-8"
            />
            <div className="hidden md:flex space-x-8 text-lg">
              <a href="#accueil" className="text-amber-950 hover:bg-orange-50">
                Accueil
              </a>
              <a href="#connection" className="text-amber-950 hover:bg-orange-50">
                Connection
              </a>
              <a
                href="#enregistrement"
                className="text-amber-950 hover:bg-orange-50"
              >
                Enregistrement
              </a>
            </div>
          </div>

          <div className="h-1 bg-amber-950"></div>
          <br />
          <h4 className="ml-12 text-xl">Veuillez remplir ce formulaire avec attention!</h4>
          <br />
        </div>

        {/* Formulaire */}
        <div className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-amber-950"
            >
              Entrez votre email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateForm();
              }}
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-amber-950"
            >
              Entrez un nom d'utilisateur
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                validateForm();
              }}
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-amber-950"
            >
              Entrez un mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validateForm();
              }}
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-amber-950"
            >
              Confirmez votre mot de passe
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                validateForm();
              }}
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
        </div>

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
          <button
            type="submit"
            className={`py-2 px-6 ${
              formValid
                ? "bg-amber-950 text-white hover:bg-amber-800"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!formValid}
          >
            Continuer
          </button>
        </div>
      </form>
    </section>
  );
};

export default Conf;
