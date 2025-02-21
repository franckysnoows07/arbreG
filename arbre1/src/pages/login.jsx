// LoginPage.js
import { useState } from "react";
import { Link} from 'react-router-dom';
import  {useLogin}  from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";



const LoginPage = () => {

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [showPassword, setShowPassword]=useState('')
  const {login, isLoading, error}=useLogin()
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const result =await login(email, password)
    if(result){
      navigate('/dash1')
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex h-screen bg-orange-50 text-amber-950">
      {/* Section gauche: Formulaire */}
      <div className="flex-1 flex flex-col justify-items-start items-center bg-orange-50 text-amber-950 p-8 shadow-lg">

        <img
              src="src/assets/logo.png"
              alt="logo"
              className="w-30 h-20 "
            />
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Bienvenue👋🏿👋🏿</h2>
        <p>Entrez vos informations de connexion</p><br />
        <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm mb-2"
            >
              Adresse Email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              placeholder="Entrer votre email"
              className="w-full px-4 py-2 border border-gray-300 bg-orange-50 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm mb-2"
            >
              Mot de Passe
            </label>
            <div className="relative">
            <input
              type={showPassword? "text" : "password"}
              id="password"
              onChange={(e) => setPassword(e.target.value)} 
              value={password}  
              placeholder="Entrer votre mot de passe"
              className="w-full px-4 py-2 border border-gray-300 bg-orange-50 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            >
              {showPassword ? (
                  <svg
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.823-.68 1.597-1.196 2.285M15 12a3 3 0 01-6 0 3 3 0 016 0zm-3 3c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0 0c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0 0c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7 .274-.823.68-1.597 1.196-2.285M15 12a3 3 0 01-6 0 3 3 0 016 0zm-3 3c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0 0c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0 0c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
                    />
                  </svg>
                )}
            </span>
            </div>
          </div><br />
          <button
            disabled={isLoading}
            className="w-full bg-amber-950 text-orange-50 py-2 px-4 rounded-md hover:bg-orange-50 hover:text-amber-950 focus:outline-none"
          >
            Se connecter
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center bg-white text-gray-600 border border-gray-300 py-2 px-4 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none"
          >
            <img
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google Logo"
              className="mr-2"
            />
            Se connecter avec Google
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-600">
          Vous n’avez pas encore de compte ?
           <Link to="/conf" className="text-blue-500 hover:underline ml-1">
                Créez-en un
          </Link>
          
        </p>
        {error && <script> alert({error})</script>}
      </div>

      {/* Section droite: Image */}
      <div className="flex-1 hidden lg:flex justify-center items-center bg-blue-500">
        <img
          src="src\assets\img.png"
          alt="Login"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default LoginPage;
