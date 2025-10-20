import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import About from './Pages/About'
import AboutPage from './Pages/AboutPage'
import WorksPage from './Pages/WorksPage'
import ProjectsPage from './Pages/ProjectsPage'
import ContactPage from './Pages/ContactPage'

const App = () => {
  return (
    <div>
      <Router basename="/ian-port">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/worksPage" element={<WorksPage />} />
          <Route path="/projectsPage" element={<ProjectsPage />} />
          <Route path="/contactPage" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
