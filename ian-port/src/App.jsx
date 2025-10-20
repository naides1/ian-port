import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import About from './Pages/About'
import AboutPage from './Pages/AboutPage'
import WorksPage from './Pages/WorksPage'
import ProjectsPage from './Pages/ProjectsPage'
import ContactPage from './Pages/ContactPage'

const App = () => {
  return (
    <Router basename="/ian-port">
      <Navbar />
      <Routes>

        <Route path="/" element={<About />} />


        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/worksPage" element={<WorksPage />} />
        <Route path="/projectsPage" element={<ProjectsPage />} />
        <Route path="/contactPage" element={<ContactPage />} />

        
        <Route path="*" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
