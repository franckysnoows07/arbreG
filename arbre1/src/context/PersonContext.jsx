import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const PersonsContext = createContext();

const personsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PERSON':
      return { ...state, person: action.payload };
    case 'CREATE_PERSON':
      return { ...state, persons: [...state.persons, action.payload] };
    case 'CREATE_BIO':
      return { ...state, persons: [...state.persons, action.payload] };
    case 'UPDATE_PERSON':
      return {
          ...state,
          persons: state.persons.map(person =>
            person.id === action.payload.id ? action.payload : person
          ),
        };
    case 'DELETE_PERSON':
      return {
          ...state,
          persons: state.persons.filter(person => person.id !== action.payload),
        };
    default:
      return state;
  }
};

const PersonsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(personsReducer, { persons: [] });

  return (
    <PersonsContext.Provider value={{ state, dispatch }}>
      {children}
    </PersonsContext.Provider>
  );
};

PersonsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PersonsContext, PersonsProvider };