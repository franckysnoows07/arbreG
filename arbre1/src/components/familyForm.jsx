import { useState } from "react"
import useFamilyForm from "../hooks/useFamilyForm";
import {useNavigate} from 'react-router-dom'

const FamilyForm = () => {
  const {createtree, error} = useFamilyForm()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [descp, setDescp] = useState('')
  const [emptyFields, setEmptyFields] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true);
    setEmptyFields([])
    
   try{ 
    const result = await createtree(name, descp)
    console.log('Tree creation result:', result);
    if (result && result._id) {
      console.log('Navigating to:', `/familytreeform/${result._id}`);
      navigate(`/familytreeform/${result._id}`, { state: { tree: result } });
    } else {
      console.error('Tree creation failed or _id missing:', result);
    }
  }catch (error) {
    console.error('Error while creating tree: ', error);
  }finally{
    setIsLoading(false);
  }
 
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