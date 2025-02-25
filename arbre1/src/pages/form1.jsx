import  { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import  useForm1  from "../hooks/useForm1";
import { useAuthContext } from "../hooks/useAuthContext";

const FormulaireInscription = () => {
  //const navigate = useNavigate();
  const {state}=useAuthContext();
  const user = state.user.user;
  const [sname, setSname]= useState('')
  const [fname, setFname]= useState('')
  const [fSname, setFsname]= useState('')
  const [fFname, setFfname]= useState('')
  const [mSname, setMsname]= useState('')
  const [mFname, setMfname]= useState('')
  const [fState, setFstate]= useState('')
  const [mState, setMstate]= useState('')
  const [pob, setPob]= useState('')
  const [gender, setGender]= useState('')
  const [nationality, setNationality]= useState('')
  const [ecivil, setEcivil]= useState('')
  const [email, setEmail]= useState('')
  const [dob, setDob]= useState('')
  const [dod, setDod]= useState('')
  const [phone, setPhone]= useState('')
  const [mdod, setMDod]= useState('')
  const [fdod, setFDod]= useState('')
  const [child, setChild]= useState('')
  const [nbchild, setNbChild]= useState('')
  // const [viewers, setViewers]= useState()
  // const [userId, setUserid]= useState()
  const [profession, setProfession]= useState('')
  const {createperson, error, isLoading} = useForm1()

  useEffect(() => {
    if (user) {
      setSname(user.sName || '');
      setFname(user.fName || '');
      setEmail(user.email || '');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const result = await createperson(sname, fname, fSname, fFname, mFname, mSname, fState, mState, gender, profession, dob, dod, pob, nationality, email, ecivil, phone, mdod, fdod, child, nbchild)
    if (result){
      localStorage.setItem('personId', result._id)
      console.log('enregistrement sauvegarder')
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'fdod') {
      setFDod(value);
    } else if (name === 'mdod') {
      setMDod(value);
    }else if (name ==='nbchild'){
      setNbChild(value);
    }
  };

  const handleEtatChange = (e, parent) => {
    const { value } = e.target;
    if (parent === 'pere') {
      setFstate(value);
    } else if (parent === 'mere') {
      setMstate(value);
    } else if (parent === 'child'){
      setChild(value);
    }
  };

  const handleReset = () => {
    setSname('')
    setFname('')
    setFsname('')
    setFfname('')
    setMsname('')
    setMfname('')
    setFstate('')
    setMstate('')
    setPob('')
    setGender('')
    setNationality('')
    setEcivil('')
    setEmail('')
    setDob('')
    setPhone('')
    setMDod('')
    setFDod('')
    setChild('')
    setNbChild('')
    setProfession('')
    setDod('')
  };

  return (
    <section className='py-12 bg-gradient-to-b from-gray-100 to-amber-950 text-black'>
      <form onSubmit={handleSubmit}>
        <div className="entete">
        <h4 className="mb-4 text-xl font-bold text-center text-gray-900">Formulaire d&apos;inscription</h4>
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
            <h4>Les champs marqués d&apos;un astérisque * sont obligatoires</h4>
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
              value={sname}
              onChange={(e) => setSname(e.target.value)}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
              
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Prénoms *</label>
            <input
              type="text"
              name="fname"
              value={fname}
              onChange={(e)=> setFname(e.target.value)}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Nationalité *</label>
            <select
              name="nationality"
              value={nationality}
              onChange={(e)=> setNationality(e.target.value)}
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
              value={ecivil}
              onChange={(e)=>setEcivil(e.target.value)}
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
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Profession *</label>
            <input
              type="text"
              name="profession"
              value={profession}
              onChange={(e)=>setProfession(e.target.value)}
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
              value={dob}
              onChange={(e)=>setDob(e.target.value)}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
              />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Lieu de naissance *</label>
            <input
              type="text"
              name="pob"
              value={pob}
              onChange={(e)=>setPob(e.target.value)}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Genre *</label>
            <select
              name="gender"
              value={gender}
              onChange={(e)=>setGender(e.target.value)}
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
              value={fSname}
              onChange={(e)=>setFsname(e.target.value)}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Prénoms du père *</label>
            <input
              type="text"
              name="fFname"
              value={fFname}
              onChange={(e)=>setFfname(e.target.value)}
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
                  checked={fState === "mort"}
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
                  checked={fState === "vivant"}
                  onChange={(e) => handleEtatChange(e, "pere")}
                />
                Vivant
              </label>
            </div>
            {fState === "mort" && (
              <input
                type="date"
                name="fdod"
                value={fdod}
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
              value={mSname}
              onChange={(e)=>setMsname(e.target.value)}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold text-gray-700">Prénoms de la mère *</label>
            <input
              type="text"
              name="mFname"
              value={mFname}
              onChange={(e)=>setMfname(e.target.value)}
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
                  value="mort"
                  checked={mState === "mort"}
                  onChange={(e) => handleEtatChange(e, "mere")}
                  required
                />
                mort
              </label>
              <label>
                <input
                  type="radio"
                  name="mState"
                  value="vivant"
                  checked={mState === "vivant"}
                  onChange={(e) => handleEtatChange(e, "mere")}
                />
                vivant
              </label>
            </div>
            {mState === "mort" && (
              <input
                type="date"
                name="mdod"
                value={mdod}
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
              value={child}
              onChange={(e) => handleEtatChange(e, "child")}
              required
              className="bg-gray-200 border py-2 px-4 rounded-md"
            >
              <option value="">Choisir</option>
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </select>
          </div>

          {child === "Oui" && (
            <div className="flex flex-col mb-4">
              <label className="font-bold text-gray-700">Nombre d&apos;enfants *</label>
              <input
                type="number"
                name="nbchild"
                value={nbchild}
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
              value={phone}
              onChange={(e)=> setPhone(e.target.value)}
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
            reset
          </button>

            <button
            disabled={isLoading}
            className="py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-gray-600"
            >
              Enregistrer
            </button>
            {error && <div className={`text-red-500`}>{error}</div>}
            
              <Link to="/bio" >
                <button
                disabled={!phone}
                className={`bg-amber-950 text-white py-2 px-6 ${!phone ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-800"}`}
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
