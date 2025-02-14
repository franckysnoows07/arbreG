
// date fns
//import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { useTreesContext } from '../hooks/useTreeContext';
import { useAuthContext } from "../hooks/useAuthContext";

const FamilyDetails = ()=> {
  const { dispatch } = useTreesContext();
  const { state } = useAuthContext();
  const user = state.user;
  const username = user.user

  const [trees, setTrees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/familytrees/surname/${username.sName}`,{
          method: 'GET',
          // headers:{
          //   'Content-Type': 'application/json'
          //   // 'Authorization': `Bearer ${user.token}`
          // }
        }

        ); // Replace with your API endpoint
        if (!response.ok) {
          console.error('Network response was not ok', response.status, response.statusText);
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched trees:', data); // Log the fetched data
        setTrees(Array.isArray(data) ? data : []); // Ensure trees is an array
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrees();
  }, [username.sName]);

  useEffect(() => {
    console.log('Trees state:', trees); // Log the trees state
  }, [trees]);

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
    <div className="space-y-4">
      {trees && trees.length > 0 ? ( // Check if trees exists and is not empty
        trees.map(tree => (
          <div key={tree.id} className="border border-[#4B3B2C] p-4 rounded-md bg-white">
            <h3 className="font-bold text-[#4B3B2C] text-left">{tree.name}</h3>
            <p className="text-sm text-[#4B3B2C] text-left">Membres: {tree.member}</p>
            <p className="text-sm text-[#4B3B2C] text-left">Créé par : {tree.createdBy.surname} {tree.createdBy.name}</p>
            <div className="text-right text-[#4B3B2C] cursor-pointer text-xl">👁</div>
          </div>
        ))
      ) : (
        <p>No data available.</p> // Or a loading indicator
      )}
    </div>
 
    
  )
}

FamilyDetails.propTypes = {
    tree: PropTypes.shape({
      name: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }).isRequired,
  };

export default FamilyDetails