import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { usePersonsContext } from "../hooks/usePersonContext";
import { useAuthContext } from "../hooks/useAuthContext";

const PersonsTable = ()=> {
  const { dispatch } = usePersonsContext();
  const { state } = useAuthContext();
  const user = state.user;

  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/people',{
          method: 'GET',
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        }

        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPersons(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPersons();
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleClick = async (id) => {
    if (!user) {
      return;
    }

    const response = await fetch(`http://localhost:4000/api/people/${id}` , {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_PERSON', payload: json})
    }
  }

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
          {persons.map(person =>(
            <tr key={person.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4">{person.sname} {person.fname}</td>
              <td className="py-3 px-4">{person.email}</td>
              <td className="py-3 px-4">{person.phone}</td>
              <td className="py-3 px-4">{person.number}</td>
              <td className="py-3 px-4">{person.createdAt}</td>
              <td className="py-3 px-4 flex justify-center space-x-2">
                <button className="text-green-500 hover:text-green-700">
                  ✏️
                </button>
                <button className="text-red-500 hover:text-red-700" onClick={handleClick}>
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

PersonsTable.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonsTable;
