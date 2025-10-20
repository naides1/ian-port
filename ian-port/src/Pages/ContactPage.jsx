import React from 'react'
import '../styles/ContactPage.css'
import { AiOutlineDiscord } from "react-icons/ai";
import { Mail, Instagram } from "lucide-react";

const ContactPage = () => {
  return (
    <div className='ContactPage'>
      <div className='ContactMe'>
        <h1 className='ContactPageHeader'>Contact Me</h1>
        <p>You can contact me through Email, Discord, or Instagram.</p>

        <div className='ContactIconsContainer'>

          <div className='ContactIndiv'>
            <div className='ContactTop'>
              <a 
                href="mailto:iancanlas0125@gmail.com" 
                className="ContactIconLink" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Mail size={40} />
              </a>
              <h3 className='ContactLabel'>Email</h3>
            </div>
            <div className='ContactUserContainer'>
              <p className='ContactUser'>iancanlas0125@gmail.com</p>
            </div>
          </div>

          <div className='ContactIndiv'>
            <div className='ContactTop'>
              <a 
                href="https://www.instagram.com/_iancanlas1/" 
                className="ContactIconLink" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram size={40} />
              </a>
              <h3 className='ContactLabel'>Instagram</h3>
            </div>
            <div className='ContactUserContainer'>
              <p className='ContactUser'>_iancanlas01</p>
            </div>
          </div>

          <div className='ContactIndiv'>
            <div className='ContactTop'>
              <a 
                href="https://discord.com/users/ianu." 
                className="ContactIconLink" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineDiscord size={44} />
              </a>
              <h3 className='ContactLabel'>Discord</h3>
            </div>
            <div className='ContactUserContainer'>
              <p className='ContactUser'>ianu.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactPage
