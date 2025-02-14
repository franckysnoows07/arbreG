import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const TreeContext = createContext();

const treesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TREE':
      return { ...state, tree: action.payload };
    case 'CREATE_TREE':
      return { ...state, trees: [...state.trees, action.payload] };
    // case 'CREATE_T':
    //   return { ...state, trees: [...state.trees, action.payload] };
    case 'UPDATE_TREE':
      return {
          ...state,
          trees: state.trees.map(tree =>
            tree.id === action.payload.id ? action.payload : tree
          ),
        };
    case 'DELETE_TREE':
      return {
          ...state,
          trees: state.trees.filter(tree => tree.id !== action.payload),
        };
    default:
      return state;
  }
};

const TreesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(treesReducer, { trees: [] });

  return (
    <TreeContext.Provider value={{ state, dispatch }}>
      {children}
    </TreeContext.Provider>
  );
};

TreesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TreeContext, TreesProvider };