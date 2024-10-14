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
import Bio from './pages/pprofil';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormElementInput/>}/>
        <Route path="/profil" element={<Bio/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
