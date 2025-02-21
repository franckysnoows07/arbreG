import { useState } from 'react';
import { useTreesContext } from './useTreeContext'; 
import { useAuthContext } from './useAuthContext';

const useFamilyForm = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { state: authState } = useAuthContext();
  const { dispatch } = useTreesContext();


  console.log('useAuthContext output:', useAuthContext());
  console.log('useTreesContext output:', useTreesContext());

  const createtree = async (name, descp) => {
    // setIsLoading(true);
    // setError(null);
    // // Debugging: Log the user object
    // console.log('User object:', user);
    // if (!user || !user.token) {
    //   setError('You must be logged in');
    //   setIsLoading(false);
    //   return;
    // }
    try {
      const response = await fetch('http://localhost:4000/api/familytrees/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.user.token}`
        },
        body: JSON.stringify({ name, descp })
      });

      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.error);
      }

      dispatch({ type: 'CREATE_TREE', payload: json });
      return json;
    } catch (error) {
      console.error('Error creating tree:', error);
      return null;
    }
  };

      const addMembers = async (name, surname, relation, familyTreeId ) => {
        setIsLoading(true);
        setError(null);
        // Debugging: Log the user object
        console.log('User object:', authState.user);
        if (!authState.user || !authState.user.token) {
          setError('You must be logged in');
          setIsLoading(false);
          return;
        }
        try {
            const response = await fetch(`http://localhost:4000/api/familytrees/${familyTreeId}/members`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authState.user.token}`
                  },
                body: JSON.stringify({name,surname,relation}),
              })
    
              const json = await response.json();
    
              if (!response.ok) {
                setError(json.error);
              } else {
                dispatch({ type: 'CREATE_MEMBER', payload: json });
                setError(json.success)
              }
            } catch (error) {
              setError('Failed to create member');
              console.log(error);
            } finally {
              setIsLoading(false);
            }
          };
      

  return { createtree, addMembers, isLoading, error };
};

export default useFamilyForm;