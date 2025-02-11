import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const MediaContext = createContext();

const personsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MEDIA':
      return { ...state, media: action.payload };
      case 'ADD_MEDIA':
        return { ...state, media: [...state.media, action.payload], }
      case 'DELETE_MEDIA':
        return {
          ...state,
          media: state.media.filter(m => m.id !== action.payload),
        };
    default:
      return state;
  }
};




const MediaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(personsReducer, { media: [] });


  return (
    <MediaContext.Provider value={{ state, dispatch }}>
      {children}
    </MediaContext.Provider>
  );
};

MediaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MediaContext, MediaProvider };