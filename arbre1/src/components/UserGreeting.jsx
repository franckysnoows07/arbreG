import  { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../context/AuthContext';

const UserGreeting = () => {
  const { state } = useContext(AuthContext);
  console.log('AuthContext state:', state); // Debug log
  const username = state.user ? state.user.user : 'Guest';
  console.log('AuthContext username:', username);

  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-600">Welcome, {username.fName} {username.sName}</span>
      <div className="text-gray-500">
      <FontAwesomeIcon icon={faCog} className="text-gray-700 text-sm" />
      </div>
      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
        <span className="text-gray-700 text-sm">PP</span>
      </div>
    </div>
  );
};

export default UserGreeting;