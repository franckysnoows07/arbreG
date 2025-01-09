import React from "react";
import { Link } from 'react-router-dom';

const persons = [
  { id: 1, name: "Keith", email: "keith@gmail.com", phone: "7145678945", number: "123456789000", date: "09 Dec, 2021" },
  { id: 2, name: "Keith", email: "keith@gmail.com", phone: "7145678945", number: "123456789000", date: "09 Dec, 2021" },
  { id: 3, name: "Keith", email: "keith@gmail.com", phone: "7145678945", number: "123456789000", date: "09 Dec, 2021" },
  { id: 4, name: "Keith", email: "keith@gmail.com", phone: "7145678945", number: "123456789000", date: "09 Dec, 2021" },
  { id: 5, name: "Keith", email: "keith@gmail.com", phone: "7145678945", number: "123456789000", date: "09 Dec, 2021" },
  { id: 6, name: "Keith", email: "keith@gmail.com", phone: "7145678945", number: "123456789000", date: "09 Dec, 2021" },
];

const PersonsTable = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 overflow-x-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Persons List</h2>
        <Link to="/personform">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            ADD NEW PERSON
          </button>
        </Link>
      </div>
      {/* Table */}
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Email</th>
            <th className="py-3 px-4 text-left">Phone</th>
            <th className="py-3 px-4 text-left">Identification Number</th>
            <th className="py-3 px-4 text-left">Date of Entry</th>
            <th className="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {persons.map((person) => (
            <tr key={person.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4">{person.name}</td>
              <td className="py-3 px-4">{person.email}</td>
              <td className="py-3 px-4">{person.phone}</td>
              <td className="py-3 px-4">{person.number}</td>
              <td className="py-3 px-4">{person.date}</td>
              <td className="py-3 px-4 flex justify-center space-x-2">
                <button className="text-green-500 hover:text-green-700">
                  ✏️
                </button>
                <button className="text-red-500 hover:text-red-700">
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonsTable;
