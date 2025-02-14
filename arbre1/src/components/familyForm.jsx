import { useState } from "react"
import useFamilyForm from "../hooks/useFamilyForm";

const FamilyForm = () => {
  const {createtree, error} = useFamilyForm()
  

  const [name, setName] = useState('')
  const [descp, setDescp] = useState('')
  const [emptyFields, setEmptyFields] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true);
    
    
    const result = await createtree(name, descp)
    if (result){
      // localStorage.setItem('personId', result._id)
      console.log('enregistrement sauvegarder')
      setEmptyFields([])
      setName('');
      setDescp('');
    } else {
      setEmptyFields(['name', 'descp']); // Example of setting empty fields
    }

    setIsLoading(false);
    
  }

  return (
    <form className="bg-white p-6 border border-[#4B3B2C] rounded-md" onSubmit={handleSubmit}>
    <label className="block text-[#4B3B2C] font-semibold mb-1">Nom de l’arbre (Votre nom de famille)</label>
    <input 
    type="text"
    value={name} 
    onChange={(e) => setName(e.target.value)}
    placeholder="Tode" 
    className={`w-full p-2 border border-[#4B3B2C] rounded-md mb-4 ${emptyFields.includes('name') ? 'border-red-500' : ''}`} 
    />

    <label className="block text-[#4B3B2C] font-semibold mb-1">Description</label>
    <textarea 
     id="descriptionTextarea"
     name="description"
     value={descp}
     onChange={(e)=>setDescp(e.target.value)}
     rows="6"
     className={`w-full p-2 border border-[#4B3B2C] rounded-md mb-4 ${emptyFields.includes('descp') ? 'border-red-500' : ''}`}
     >

    </textarea>

    <button 
        className="w-full bg-[#4B3B2C] text-white p-2 rounded-md font-semibold" 
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Créer'}
      </button>
    {error && <div className="text-red-500 mt-4">{error}</div>}
  </form>
  )
}

export default FamilyForm