import { useState } from 'react';
import { useTreesContext } from './useTreeContext'; 
import { useAuthContext } from './useAuthContext';

const useFamilyForm = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useTreesContext();
  const {state}= useAuthContext()
  const user = state.user;

  console.log('useAuthContext output:', useAuthContext());
  console.log('useTreesContext output:', useTreesContext());
  const createtree = async (name, descp) => {
    setIsLoading(true);
    setError(null);
    // Debugging: Log the user object
    console.log('User object:', user);
    if (!user || !user.token) {
      setError('You must be logged in');
      setIsLoading(false);
      return;
    }
    try {
        const response = await fetch(`http://localhost:4000/api/familytrees/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
              },
            body: JSON.stringify({name,descp}),
          })

          const json = await response.json();

          if (!response.ok) {
            setError(json.error);
          } else {
            dispatch({ type: 'CREATE_TREE', payload: json });
            setError(json.success)
          }
        } catch (error) {
          setError('Failed to create person');
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };

      

  return { createtree, isLoading, error };
};

export default useFamilyForm;