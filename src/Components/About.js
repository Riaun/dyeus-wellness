import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
        <h1 className='about__heading'>
            About Diana
        </h1>
        <h3 className='about__tagline'>
            A platform that looks out for you
        </h3>

        <p className='about__content'>
        Diana empowers you to understand how your body works so you can look and feel your best.
        </p>

        <div className='about__hr'/>

        <h2 className='about__subheading'>
          Our Philosophy
        </h2>

        <h1 className='about__bigpic'>
          Sustainable wellness is a big-picture, inside out approach
        </h1>

        <p className='about__text about__text-bold'>
          Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness.
          <br />
          <br />
          That’s why we’ve created an integrated ecosystem of: 
        </p>
        
        <img className='about__icon' src='/assets/icons/test-tube.png' />

        <p className='about__text'>
          Consciously formulated products that deliver feel-good results fast
        </p>

        <img className='about__icon' src='/assets/icons/stars.png' />
    
        <p className='about__text'>
          In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body
        </p>

        <img className='about__icon' src='/assets/icons/phone.png' />

        <p className='about__text'>
          In-app consultation portals that connect you with compassionate wellness experts
        </p>

        <p className='about__text about__outro'>
          Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.
        </p>

    </div>
  )
}

export default About

