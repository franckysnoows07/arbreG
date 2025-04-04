import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    try{
        const response = await fetch('http://localhost:4000/api/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
          })

          const json = await response.json();

          if (!response.ok) {
            setIsLoading(false)
            setError(json.error || 'Login failed')
            return null
          }else {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))
      
            // update the auth context
            dispatch({type: 'LOGIN', payload: json})
      
            // update loading state
            setIsLoading(false)
            return json
          }
    } catch (error){
      setIsLoading(false)
      setError('Login failed')
      console.error('Error during login:', error)
      return null
    }
    
  }

  return { login, isLoading, error }
}