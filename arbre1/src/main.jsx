import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext';
import './index.css'
import { PersonsProvider } from './context/PersonContext.jsx';
import { MediaProvider } from './context/MediaContext.jsx';
import { TreesProvider } from './context/TreeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <TreesProvider>
      <PersonsProvider>
        <MediaProvider>
          <App />
        </MediaProvider>
      </PersonsProvider>
      </TreesProvider>
    </AuthProvider>
  </StrictMode>
)
