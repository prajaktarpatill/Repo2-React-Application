import { useState } from 'react'
import { Routes, Route } from 'react-router'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import LoginForm from './components/LoginForm'
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  return (
    <div>
    <Routes>
      <Route index="true" element = {<Home/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/register" element={<RegistrationForm/>}/>
      
    </Routes>
  </div>
  )
  
  
}

export default App
