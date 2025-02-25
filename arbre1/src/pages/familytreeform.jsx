import { useState, useEffect } from "react";
import useFamilyForm from '../hooks/useFamilyForm';
import useForm1 from "../hooks/useForm1";
import { useLocation } from "react-router-dom";
//rt { useTreesContext } from "../hooks/useTreeContext";


const FamilyTreeForm = () => {

  
  const [name, setName]= useState('')
  const [surname, setSurname]= useState('')
  const [relation, setRelation]= useState('')
  const [npere, setFsname]= useState('')
  const [ppere, setFfname]= useState('')
  const [nmere, setMsname]= useState('')
  const [pmere, setMfname]= useState('')
  const [familyTreeId, setFamilyTreeId]= useState(null)
  const {addMembers}=useFamilyForm()
  const {createPerson1, createPere, createMere}=useForm1()
 // const {state}= useTreesContext()
  const location = useLocation();
  const { tree } = location.state || {};

  useEffect(()=>{
    if (tree && tree._id){
      setFamilyTreeId(tree._id)
    }
  }, [tree]) 

  if (!tree) {
    return <div>No tree data available</div>;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (familyTreeId) {
      console.log('Family tree ID:', familyTreeId);
      try {
        const result = await createPerson1(name, surname, relation, ppere, npere, pmere, nmere);
        
        const result1 = await createPere(ppere, npere);
        
        const result2 = await createMere(pmere, nmere);
        
        const result3= await addMembers(name, surname, relation, familyTreeId);
        if(result){
          localStorage.setItem('personId', result._id);
          console.log('enregistrement de la personne réussi');
        }
        if (result1) {
          localStorage.setItem('personId', result1._id);
          console.log('enregistrement de la personne réussi');
        }
        if (result2) {
          localStorage.setItem('personId', result2._id);
          console.log('enregistrement de la personne réussi');
        }
        if (result3){
          localStorage.setItem('familyMemberId', result3._id);
          console.log('enregistrement sauvegarder');
        }
      } catch (error) {
        console.error('Error while adding members:', error);
      }
    }
  };

  // const handleChange = (e) => {
  //   const { name, value} = e.target;
  //   if (name === 'npere') {
  //     setFsname(value)
  //   }
  //   if(name === 'ppere'){
  //     setFfname(value)
  //   }
  //   if(name === 'nmere'){
  //     setMsname(value)
  //   }
  //   if(name === 'pmere'){
  //     setMfname(value)
  // }
// }
  const handleEtatChange = (e, parent) =>{
    const { value } = e.target;
    if(parent ==='relation'){
      setRelation(value)
    }
  }

  const handleReset = () => {
    setName('')
    setSurname('')
    setRelation('')
    setFsname('')
    setFfname('')
    setMsname('')
    setMfname('')
  }


  return (
    <div className="min-h-screen bg-[#F8F1E7] text-[#3D2B1F] px-8 py-4">
      {/* Navbar */}
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

              <div className="text-[#6D8E48] text-3xl">🌍</div>
          </div>

          <div className="h-1 bg-amber-950"></div><br />
          <div className="flex w-max">
            <div className="flex ml-12 mr-20">
              <div className="mr-1">✅</div>
              <h4>Informations personnelles</h4>
            </div>
            <div className="flex ml-16 mr-20">
              <div className="mr-1">✅</div>
              <h4>Photos de profil</h4>
            </div>
            <div className="flex ml-16 mr-20">
              <div className="mr-1">✅</div>
              <h4>Biographie</h4>
            </div>
            <div className="flex ml-16 mr-20">
              <div className="mr-1">✅</div>
              <h4>Configuration du compte</h4>
            </div>
          </div><br />
        </div>

      {/* Titre*/}
      <h2 className="text-2xl font-semibold text-[#3D2B1F]">Ajouter un membre a l&apos;arbre: {tree.name} </h2>
        
      {/* Formulaire */}
      < form onSubmit={handleSubmit} className="mt-8 flex justify-center">
        <div className="w-full max-w-4xl grid grid-cols-2 gap-8">
          {/* Colonne Gauche */}
          <div className="space-y-4">
            <div>
              <label className="block font-semibold">Nom *</label>
              <input 
              type="text" 
              name="sname"
              value={surname} 
              onChange={(e) => setSurname(e.target.value)}
              className="w-full border p-2 rounded bg-white" 
              />
            </div>
            <div>
              <label className="block font-semibold">Prénom *</label>
              <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded bg-white" />
            </div>
            <div>
              <label className="block font-semibold">Relation</label>
              <select 
              name="relation"
              value={relation} 
              onChange={(e)=> handleEtatChange(e, "relation")}
              className="w-full border p-2 rounded bg-white"
              >
                <option value="pere">Père</option>
                <option value="mere">Mère</option>
                <option value="enfant">Enfant</option>
                <option value="unclem">Oncle(mère) </option>
                <option value="unclef">Oncle(père)</option>
                <option value="auntm">Tante(mère)</option>
                <option value="auntf">Tante(père)</option>
                <option value="gfm">Grand-père(mère)</option>
                <option value="gff">Grand-père(père)</option>
                <option value="gmm">Grand-père(mère)</option>
                <option value="gmf">Grand-père(père)</option>
                <option value="cousin">Cousin(e)</option>
              </select>
            </div>
            {/* Colonne Droite */}
          {relation === "cousin" && (
            <div className="p-4 border rounded bg-white">
            <div className="mb-4">
              <label className="block font-semibold">Nom / Père</label>
              <input 
              name="npere"
              value={npere} 
              onChange={(e)=>{setFsname(e.target.value)}}
              className="w-full border p-2 rounded bg-white" 
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Prénoms / Père</label>
              <input 
              name="ppere"
              value={ppere} 
              onChange={(e)=>{setFfname(e.target.value)}}
              className="w-full border p-2 rounded bg-white" 
              />
            </div>
            <div>
              <label className="block font-semibold">Nom / Mère</label>
              <input 
              name="nmere" 
              value={nmere} 
              onChange={(e)=>{setMsname(e.target.value)}}
              className="w-full border p-2 rounded bg-white" 
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Prénom / Mère</label>
              <input 
              name="pmere"
              value={pmere}
              onChange={(e)=>{setMfname(e.target.value)}}
              className="w-full border p-2 rounded bg-white" 
              />
            </div>
          </div>
        )}
            <button  
            className="bg-[#3D2B1F] text-white px-6 py-2 rounded"
            >
              Ajouter
            </button>
          </div>

          
        </div>
      </form>

      {/* Bouton Suivant */}
      <div className="flex justify-end mt-6">
        <button className="bg-[#3D2B1F] text-white px-6 py-2 rounded">Suivant</button>
      </div>
    </div>
  );
};

export default FamilyTreeForm;
