import FormulaireInscription from './pages/form1';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Bio from './pages/bio';
import P_Profil from './pages/pprofil';
import Conf from './pages/conf';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import Dash1 from './pages/dash1';
import DashPersonne from './pages/dashpers';
import PersonForm from './pages/personform';
import Arbre from './pages/arbre';
import DashLien from './pages/dashlien';
import SearchTree from './pages/searchtree';
import FamilyTreeForm from './pages/familytreeform';
import VisualiserArbre from './pages/visualiserarbre';


const App=() => {

  //const user = useAuthContext()

  return (
      <Router future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<FormulaireInscription/>}/>
          <Route path="/bio" element={<Bio/>}/>
          <Route path="/pprofil" element={<P_Profil/>}/>
          <Route path="/conf" element={<Conf/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/dash1" element={<Dash1/>}/>
          <Route path="/dashpers" element={<DashPersonne/>}/>
          <Route path="/personform" element={<PersonForm/>}/>
          <Route path="/arbre" element={<Arbre/>}/>
          <Route path="/dashlien" element={<DashLien/>}/>
          <Route path="/searchtree" element={<SearchTree/>}/>
          <Route path="/familytree" element={<FamilyTreeForm/>}/>
          <Route path="/seetree/:id" element={<VisualiserArbre/>}/>
        </Routes>
    </Router>
  )
}

export default App
