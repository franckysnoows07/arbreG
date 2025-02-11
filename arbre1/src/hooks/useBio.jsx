import { useState } from 'react';
import { usePersonsContext } from './usePersonContext';
import { useAuthContext } from './useAuthContext';

const useBio = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = usePersonsContext();
  const {state}= useAuthContext()
  const user = state.user;

  console.log('usePersonContext output:', usePersonsContext());
const createBio = async (personId, bio) => {
    setIsLoading(true);
    setError(null);

    if (!user || !user.token) {
      setError('You must be logged in');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost:4000/api/people/${personId}/bio`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({ bio }),
      });

      const json = await response.json();

      if (!response.ok) {
        if (json.error === 'jwt expired') {
          setError('Session expired. Please log in again.');
          // Optionally, you can implement a token refresh mechanism here
        } else {
          setError(json.error);
        }
      } else {
        dispatch({ type: 'CREATE_BIO', payload: json });
        return json;
      }
    } catch (error) {
      setError('Failed to create bio');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { createBio, isLoading, error };
};

export default useBio;
