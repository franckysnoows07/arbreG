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


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormElementInput/>}/>
        <Route path="/bio" element={<Bio/>}/>
        <Route path="/pprofil" element={<P_Profil/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
