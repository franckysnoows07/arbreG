import { useState } from 'react'
import FormElementInput from './pages/form1';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
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


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormElementInput/>}/>
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
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
