import React from "react";

const FormElementInput = () => {
  return (
    <section className='py-12 bg-gradient-to-b from-gray-100 to-amber-950 text-black'>
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
        <div className="flex ml-20 ">
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
      </div>
      <div className="h-px bg-black"></div><br />
      
      <div className='container'>
        <div className='-mx-4 flex flex-wrap'>
          <DefaultColumn>
            <NomComplet />
          </DefaultColumn>

          <DefaultColumn>
            <Nationalite />
          </DefaultColumn>

          <DefaultColumn>
            <SituationMatriomoniale />
          </DefaultColumn>

          <DefaultColumn>
            <Email />
          </DefaultColumn>

          <DefaultColumn>
            <PhoneNumber />
          </DefaultColumn>

          <DefaultColumn>
            <Profession />
          </DefaultColumn>

          <DefaultColumn>
            <Birthday />
          </DefaultColumn>

          <DefaultColumn>
            <LieuNais />
          </DefaultColumn>

          <DefaultColumn>
            <Genre />
          </DefaultColumn>
          
          <DefaultColumn>
            <DadName />
          </DefaultColumn>

          <DefaultColumn>
            <Lieu />
          </DefaultColumn>

          <DefaultColumn>
            <DeathDate />
          </DefaultColumn>
        </div>
      </div>
    </section>
  )
};

export default FormElementInput;

const DefaultColumn = ({ children }) => {
  return (
    <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
      <div className='mb-4 mr-8 ml-8'>{children}</div>
    </div>

    
  )
}

  const NomComplet = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-black text-left'>
          Nom complet:
        </label>
        <input
          type='text'
          placeholder='Your name'
          className='w-full bg-gray-200 border border-stroke dark:border-black py-[10px] px-5
          text-black outline-none transition focus:border-primary active:border-primary
            disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
        />
      </>
    )
  }

  const Nationalite = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-black text-left'>
          Nationalite
        </label>
        <div className='relative z-20'>
          <select className='w-full bg-gray-200 border border-stroke dark:border-black py-[10px] px-5
          text-black outline-none transition focus:border-primary active:border-primary
            disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'>
            <option value='' className='dark:bg-dark-2'>Benin</option>
            <option value='' className='dark:bg-dark-2'>Togo</option>
            <option value='' className='dark:bg-dark-2'>Chine</option>
          </select>
          <span className='absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color'></span>
        </div>
      </>
    )
  }

  const SituationMatriomoniale = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-black text-left'>
          Situation Matrimoniale
        </label>
        <div className='relative z-20'>
          <select className='w-full bg-gray-200 border border-stroke dark:border-black py-[10px] px-5
          text-black outline-none transition focus:border-primary active:border-primary
            disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'>
            <option value='' className='dark:bg-dark-2'>Marié</option>
            <option value='' className='dark:bg-dark-2'>Célibataire</option>
            <option value='' className='dark:bg-dark-2'>Autre</option>
          </select>
          <span className='absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color'></span>
        </div>
      </>
    )
  }

  const Email = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-black text-left'>
          Email
        </label>
        <input
          type='text'
          placeholder='Your mail'
          className='w-full bg-gray-200 border border-stroke dark:border-black py-[10px] px-5
          text-black outline-none transition focus:border-primary active:border-primary
            disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
        />
      </>
    )
  }

  const PhoneNumber = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-black text-left'>
          Numero de Telephone
        </label>
        <input
          type='int'
          placeholder='Your number'
          className='w-full bg-gray-200 border border-stroke dark:border-black py-[10px] px-5
          text-black outline-none transition focus:border-primary active:border-primary
            disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
        />
      </>
    )
  }

  const Profession = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-black text-left'>
          Profession
        </label>
        <input
          type='text'
          placeholder='Your Profession'
          className='w-full bg-gray-200 border border-stroke dark:border-black py-[10px] px-5
          text-black outline-none transition focus:border-primary active:border-primary
            disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
        />
      </>
    )
  }

  const Birthday = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-black text-left'>
          Date de naissance:
        </label>
        <input
          type='date'
          placeholder='Birthday'
          className='w-full bg-gray-200 border border-stroke dark:border-black py-[10px] px-5
          text-black outline-none transition focus:border-primary active:border-primary
            disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
        />
      </>
    )
  }

  const LieuNais = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-black text-left'>
          Lieu de naissance
        </label>
        <input
          type='text'
          placeholder='LieuNais'
          className='w-full bg-gray-200 border border-stroke dark:border-black py-[10px] px-5
          text-black outline-none transition focus:border-primary active:border-primary
            disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
        />
      </>
    )
  }

  const Genre = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-black text-left'>
          Genre
        </label>
        <div className='relative z-20'>
          <select className='w-full bg-gray-200 border border-stroke dark:border-black py-[10px] px-5
          text-black outline-none transition focus:border-primary active:border-primary
            disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'>
            <option value='' className='dark:bg-dark-2'>Masculin</option>
            <option value='' className='dark:bg-dark-2'>Feminin</option>
            <option value='' className='dark:bg-dark-2'>Autre</option>
          </select>
          <span className='absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color'></span>
        </div>
      </>
    )
  }
  const DadName = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-black text-left'>
          Nom complet du pere:
        </label>
        <input
          type='text'
          placeholder='DadName'
          className='w-full bg-gray-200 border border-stroke dark:border-black py-[10px] px-5
          text-black outline-none transition focus:border-primary active:border-primary
            disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
        />
      </>
    )
  }

  const Lieu = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-black text-left'>
          Lieu de naissance
        </label>
        <input
          type='text'
          placeholder='LieuNais'
          className='w-full bg-gray-200 border border-stroke dark:border-black py-[10px] px-5
          text-black outline-none transition focus:border-primary active:border-primary
            disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
        />
      </>
    )
  }

  const DeathDate = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-black text-left'>
          Date de deces
        </label>
        <input
          type='date'
          placeholder='Date de deces'
          className='w-full bg-gray-200 border border-stroke dark:border-black py-[10px] px-5
          text-black outline-none transition focus:border-primary active:border-primary
            disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
        />
      </>
    )
  }
