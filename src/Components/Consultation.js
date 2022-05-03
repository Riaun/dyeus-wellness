import React from 'react'
import './consultation.css'

function Consultation() {
  return (
    <div className='consultation'>
        <h1 className='consultation__bigpic'>
            Consult with wellness experts
        </h1>
        <p className='consultation__text'>
            Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you. 
        </p>
        <div className='consultation__button'>Get a consultation</div>
        <img className='consultation__image' src='/assets/icons/doctor.png' />
    </div>
  )
}

export default Consultation