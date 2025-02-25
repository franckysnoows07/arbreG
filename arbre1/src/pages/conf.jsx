import { useState } from "react";
import  useSignup  from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";
import  {useLogin}  from "../hooks/useLogin";

const Conf = () => {
  const [email, setEmail] = useState("");
  const [uname, setUsername] = useState("");
  const [fName, setFName] = useState("");
  const [sName, setSName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {signup, error, isLoading} = useSignup()
  const {login}= useLogin()
  const navigate = useNavigate();

  // Validation du formulaire
  // const validateForm = () => {
  //   const isValid =
  //     email.trim() !== "" &&
  //     uname.trim() !== "" &&
  //     password.trim() !== "" &&
  //     password === confirmPassword;
  //   setFormValid(isValid);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signup(uname, fName, sName, email, password)
    if(result){
      await login(email, password)
      navigate('/');
    }
  };

  const handleReset = () => {
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setFName("");
    setSName("");
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
              htmlFor="fName"
              className="block mb-2 text-sm font-medium text-amber-950"
            >
              Prénoms
            </label>
            <input
              type="text"
              id="fName"
              value={fName}
              onChange={(e) => {setFName(e.target.value)}}
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="sName"
              className="block mb-2 text-sm font-medium text-amber-950"
            >
              Nom
            </label>
            <input
              type="text"
              id="sName"
              value={sName}
              onChange={(e) => {
                setSName(e.target.value);
                // validateForm();
              }}
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-amber-950"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                // validateForm();
              }}
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="uname"
              className="block mb-2 text-sm font-medium text-amber-950"
            >
              Utilisateur
            </label>
            <input
              type="text"
              id="uname"
              value={uname}
              onChange={(e) => {
                setUsername(e.target.value);
                //validateForm();
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
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                //validateForm();
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
              Confirmation
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                //validateForm();
              }}
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
        </div>

        <div className="flex justify-center space-x-96 mt-8">
          
            <button
              type="button"
              onClick={handleReset}
              className="py-2 px-4 bg-orange-50 text-amber-950 border border-amber-950 text-xl rounded-md hover:bg-amber-950 hover:text-orange-50"
            >
              Reset
            </button>
          
          <button
            className={`py-2 px-6  "bg-amber-950 text-white hover:bg-amber-800"`}
            disabled={isLoading}
          >
            Continuer
          </button>
          {error && <div className={`text-red-500`}>{error}</div>}
        </div>
      </form>
    </section>
  );
};

export default Conf;
