import React from "react";
import { Link } from 'react-router-dom';

const AddPersonForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Form Container */}
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-lg font-semibold mb-6 text-gray-700">
          Informations nécessaires
        </h2>
        {/* Input Fields */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-600">
              Nom et Prénom
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-green-200"
              placeholder="Ex: Jean Doe"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-600">
              Téléphone
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-green-200"
              placeholder="+229 123 456"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-green-200"
              placeholder="jean@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-600">
              Autre
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-green-200"
              placeholder="Information"
            />
          </div>
          <Link to="/dashpers">
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
              >
                Ajouter
              </button>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddPersonForm;
