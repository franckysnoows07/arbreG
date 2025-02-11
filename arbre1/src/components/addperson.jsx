import  { useState } from "react";
import { useNavigate } from 'react-router-dom';
import  useForm1  from "../hooks/useForm1";

const AddPersonForm = () => {
  const navigate = useNavigate()
  const [sname, setSname]= useState('')
  const [fname, setFname]= useState('')
  // const [fSname, setFsname]= useState('')
  // const [fFname, setFfname]= useState('')
  // const [mSname, setMsname]= useState('')
  // const [mFname, setMfname]= useState('')
  // const [fState, setFstate]= useState('')
  // const [mState, setMstate]= useState('')
  // const [pob, setPob]= useState('')
  const [gender, setGender]= useState('')
  const [nationality, setNationality]= useState('')
  // const [ecivil, setEcivil]= useState('')
  const [email, setEmail]= useState('')
  // const [dob, setDob]= useState('')
  // const [dod, setDod]= useState('')
  const [phone, setPhone]= useState('')
  // const [mdod, setMDod]= useState('')
  // const [fdod, setFDod]= useState('')
  // const [child, setChild]= useState('')
  // const [nbchild, setNbChild]= useState('')
  // const [viewers, setViewers]= useState()
  // const [userId, setUserid]= useState()
  // const [profession, setProfession]= useState('')
  const {createPerson, error, isLoading} = useForm1()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const result = await createPerson(sname, fname, gender, nationality, email, phone)
    if (result){
      // localStorage.setItem('personId', result._id)
      // console.log('enregistrement sauvegarder')
      navigate("/dashpers")
    }
  }
  const handleReset = () => {
    setSname('')
    setFname('')
    // setFsname('')
    // setFfname('')
    // setMsname('')
    // setMfname('')
    // setFstate('')
    // setMstate('')
    // setPob('')
    setGender('')
    setNationality('')
    // setEcivil('')
    setEmail('')
    // setDob('')
    setPhone('')
    // setMDod('')
    // setFDod('')
    // setChild('')
    // setNbChild('')
    // setProfession('')
    // setDod('')
  };
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Form Container */}
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-lg font-semibold mb-6 text-gray-700">
          Informations nécessaires
        </h2>
        {/* Input Fields */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-600">
              Nom 
            </label>
            <input
              type="text"
              name="sname"
              value={sname}
              onChange={(e) => setSname(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-green-200"
              placeholder="Ex: Jean"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-600">
              Prénoms 
            </label>
            <input
              type="text"
              name="fname"
              value={fname}
              onChange={(e)=> setFname(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-green-200"
              placeholder="Ex: Doe"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-600">
              Genre
            </label>
            <select
              name="gender"
              value={gender}
              onChange={(e)=>setGender(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-green-200"
            >
              <option value="">Choisir</option>
              <option value="Masculin">Masculin</option>
              <option value="Feminin">Féminin</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-600">
              Nationalité
            </label>
            <select
              name="nationality"
              value={nationality}
              onChange={(e)=> setNationality(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-green-200"
            >
              <option value="">Choisir</option>
              <option value="Benin">Bénin</option>
              <option value="Togo">Togo</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-green-200"
              placeholder="jean@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-600">
              Téléphone
            </label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e)=> setPhone(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-green-200"
              placeholder="0166225588"
            />
          </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
              >
                {isLoading ? 'Ajout...' : 'Ajouter'}
              </button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddPersonForm;
