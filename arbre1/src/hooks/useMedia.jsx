import { useState } from 'react';
import { useMediaContext } from './useMediaContext';
import { useAuthContext } from './useAuthContext';
import { usePersonsContext } from './usePersonContext';

const useMedia = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useMediaContext();
  const {state}= useAuthContext()
  const user = state.user;

  console.log('useAuthContext output:', useAuthContext());
  console.log('usePersonContext output:', usePersonsContext());

      const pprofil = async (file) => {
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
            const formData = new FormData();
             formData.append('file', file);
            const response = await fetch('http://localhost:4000/api/media/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                  },
                body: formData,
              })
    
              const json = await response.json();
    
              if (!response.ok) {
                setError(json.error);
              } else {
                dispatch({ type: 'ADD_MEDIA', payload: json });
              }
            } catch (error) {
              setError(' Profile ficture upload successfully');
              console.log(error);
            } finally {
              setIsLoading(false);
            }
          };

  return {pprofil, isLoading, error };
};

export default useMedia;