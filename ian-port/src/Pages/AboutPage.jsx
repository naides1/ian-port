import React from 'react'
import '../Styles/aboutPage.css'
import '../Styles/About.css'
import { CornerDownRight } from 'lucide-react';

const aboutPage = () => {
  return (
    <>
    <div className='AboutPage'>
      <h1 className='AboutPageHeader'>About</h1>
      <p className='AboutPageInfo'>Hello! My name is Ian Gabriel B. Canlas. I am from the Philippines. I am an aspiring frontend web developer and UI/UX designer. I enjoy making and experimenting designs and layouts in websites. I have been exposed to developing mostly frontend of websites and I developed a liking to it.</p><br></br>
      <p className='AboutPageInfo'>I am biased over <b>monochromatic</b> designs. I like the idea of simplicity and order.</p>
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
        
      </div>
      </>
  )
}

export default aboutPage
