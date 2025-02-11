import { useState } from 'react';
import {useAuthContext} from './useAuthContext';

const useSignup = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (uname, fName, sName, email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:4000/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uname, fName, sName, email, password })
      });

      const text = await response.text();
      const json = text ? JSON.parse(text) : {};

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error || 'Signup failed');
        return null;
      } else {
        // save the user to local storage
        localStorage.setItem('user', JSON.stringify(json));

        // update the auth context
        dispatch({ type: 'LOGIN', payload: json });

        setIsLoading(false);
        return json;
      }
    } catch (error) {
      setIsLoading(false);
      setError('Signup failed');
      console.error('Error during signup:', error);
      return null;
    }
  };

  return { signup, isLoading, error };
};

export default useSignup;