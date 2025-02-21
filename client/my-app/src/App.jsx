import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import GetStarted from './components/GetStarted/GetStarted';
import SignUp from './components/SignUp/SignUp';
import ResumeBuilder from './components/Resumebuilder/ResumeBuilder';

function App() {

  return (
    
      <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
         <Route path="/get-started" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/resume-builder" element={<ResumeBuilder/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
