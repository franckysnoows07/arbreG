import { useState } from 'react';
import { usePersonsContext } from './usePersonContext';
import { useAuthContext } from './useAuthContext';

const useForm1 = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = usePersonsContext();
  const {state}= useAuthContext()
  const user = state.user;

  console.log('useAuthContext output:', useAuthContext());
  console.log('usePersonContext output:', usePersonsContext());
  const createperson = async (sname, fname,fSname,fFname,mFname,mSname,fState,mState,gender,profession,dob,dod,pob,nationality,email,ecivil,phone,mdod,fdod,child,nbchild) => {
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
        const response = await fetch(`http://localhost:4000/api/people/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
              },
            body: JSON.stringify({sname, fname,fSname,fFname,mFname,mSname,fState,mState,gender,profession,dob,dod,pob,nationality,email,ecivil,phone,mdod,fdod,child,nbchild}),
          })

          const json = await response.json();

          if (!response.ok) {
            setError(json.error);
          } else {
            dispatch({ type: 'CREATE_PERSON', payload: json });
            setError(json.success)
          }
        } catch (error) {
          setError('Failed to create person');
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };

      const createPerson = async (sname, fname, gender, nationality, email, phone) => {
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
            const response = await fetch(`http://localhost:4000/api/people/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                  },
                body: JSON.stringify({sname, fname, gender, nationality, email, phone}),
              })
    
              const json = await response.json();
    
              if (!response.ok) {
                setError(json.error);
              } else {
                dispatch({ type: 'CREATE_PERSON', payload: json });
                setError(json.success)
              }
            } catch (error) {
              setError('Failed to create person');
              console.log(error);
            } finally {
              setIsLoading(false);
            }
          };


        const createPerson1= async (name, surname, relation, ppere, npere, pmere, nmere) => {
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
            const response = await fetch(`http://localhost:4000/api/people/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                  },
                body: JSON.stringify({name, surname, relation, ppere, npere, pmere, nmere})
              })
    
              const json = await response.json();
    
              if (!response.ok) {
                setError(json.error);
              } else {
                dispatch({ type: 'CREATE_PERSON', payload: json });
                setError(json.success)
              }
            } catch (error) {
              setError('Failed to create person2');
              console.log(error);
            } finally {
              setIsLoading(false);
            }
          };

          const createPere = async (ppere, npere ) => {
            setIsLoading(true)
            setError(null)

            console.log('User object:', user)
            if (!user || !user.token) {
              setError('You must be logged in')
              setIsLoading(false)
              return
            }

            try{
              const response = await fetch (`http://localhost:4000/api/people/create`,
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${user.token}`
                  },
                  body: JSON.stringify({ppere, npere})
            })
            const json = await response.json()
            if (!response.ok) {
              setError(json.error)
            } else {
              dispatch({ type: 'CREATE_PERSON', payload: json })
              setError(json.success)
            }

          } catch(error){
            setError('Failed to create person')
            console.log(error)
          } finally {
            setIsLoading(false)
          }
        }

        const createMere = async (pmere, nmere ) => {
          setIsLoading(true)
          setError(null)

          console.log('User object:', user)
          if (!user || !user.token) {
            setError('You must be logged in')
            setIsLoading(false)
            return
          }

          try{
            const response = await fetch (`http://localhost:4000/api/people/create`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json', 
                  'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({pmere, nmere})
          })
          const json = await response.json()
          if (!response.ok) {
            setError(json.error)
          } else {
            dispatch({ type: 'CREATE_PERSON', payload: json })
            setError(json.success)
          }

        } catch(error){
          setError('Failed to create person')
          console.log(error)
        } finally {
          setIsLoading(false)
        }
      }

      

  return { createperson, createPerson, isLoading, error, createPerson1, createPere, createMere}
};

export default useForm1;