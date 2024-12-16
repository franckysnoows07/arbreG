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
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
