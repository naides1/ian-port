import React from 'react'

import { FaHtml5, FaReact, FaCss3Alt  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { Mail, Github, Linkedin, Instagram, CornerDownRight, ArrowRight } from "lucide-react";

import '../Styles/About.css'
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

  return (

    /* Splash Box Information */
    <>
      <div className='aboutContainer'>

        <div className='topRow'>

          <h1>Ian Canlas</h1>

          <div className='iconContainer'>
            <a href="emailto:iancanlas0125@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail size={22} />
            </a>

            <a href="https://github.com/naides1" target="_blank" rel="noopener noreferrer">
              <Github size={22} />
            </a>

            <a href="https://www.linkedin.com/in/ian-canlas-50a896387/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={22} />
            </a>

            <a href="https://www.instagram.com/_iancanlas1/" target="_blank" rel="noopener noreferrer">
              <Instagram size={22} />
            </a>
          </div>
        </div>

        <div className="locationContainer">
          <span className='location'>Based in the Philippines</span>
        </div>

        <div className='bottomRow'>
          <p className='info'>Frontend Developer, UI/UX Designer</p>
          <button className='aboutButton' onClick={() => navigate("/aboutPage")}>
            <span>Learn More</span>
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
      
      <div className='TechStack'>
        <h1 className="TechStackHeader"> Technology Stack </h1>
        <ul className='TechStackList'>
          <li><FaHtml5 size={22} /><p>HTML</p></li>
          <li><FaCss3Alt size={22} /><p>CSS</p></li>
          <li><IoLogoJavascript size={22} /><p>JavaScript</p></li>
          <li><SiVite size={22} /><p>Vite</p></li>
          <li><FaReact size={22} /><p>React</p></li>
        </ul>
      </div>
      
      <div className='Experience'>
        <h1 className='ExperienceHeader'>Experience</h1>
        <ul className='ExperienceList'>
          <div className='ExperienceItemWrapper'>
          <CornerDownRight size={28} className='ExperienceArrow'/>
          <li className='ExperienceItem'>
            <h2 className='ExperienceType'>Frontend Developer Intern</h2>
            <h3 className='ExperienceDate'>September, 2025 - November, 2025</h3>
            <p className='ExperienceInfo'>Worked as a frontend developer on several pages for an already built website. Includes designing UI/UX through Figma, and development using React JS.</p>
          </li>
          </div>

          <div className='ExperienceItemWrapper'>
          <CornerDownRight size={28} className='ExperienceArrow'/>
          <li className='ExperienceItem'>
            <h2 className='ExperienceType'>UI/UX Designer Intern</h2>
            <h3 className='ExperienceDate'>January, 2025 - March 2025</h3>
            <p className='ExperienceInfo'>Designed the UI/UX of multiple websites from scratch using Figma.</p>
          </li>
          </div>

          <div className='ExperienceItemWrapper'>
          <CornerDownRight size={28} className='ExperienceArrow'/>
          <li className='ExperienceItem'>
            <h2 className='ExperienceType'>Mapua University</h2>
            <h3 className='ExperienceDate'>BS Information Technology, Specializing in Cybersecurity</h3>
            <p className='ExperienceInfo'>Conducted Thesis and Practicum here.</p>
          </li>
          </div>
        </ul>
        
      </div></>

  )
}

export default About
