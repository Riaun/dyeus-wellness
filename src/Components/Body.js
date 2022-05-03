import React from 'react'
import About from './About'
import './body.css'
import Consultation from './Consultation'
import Outro from './Outro'
import Period from './Period'
import PersonalBox from './PersonalBox'
import Wellness from './Wellness'
import Difference from './Difference'
import Mood from './Mood'

function Body() {
  return (
    <div className='body'>
        <About />
        <Difference />
        <Wellness />
        <Mood />
        <Period />
        <Consultation />
        <PersonalBox />
        <Outro />
    </div>
  )
}

export default Body