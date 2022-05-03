import React from 'react'
import './period.css'

function Period() {
  return (
    <div className='period'>
        <h1 className='period__bigpic'>
            Track your period
        </h1>

        <p className='period__text'>
            Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data. 
        </p>

        <div className='wellness__button'>
            Track your period on the app
        </div>

        <img className='period__image' src='/assets/icons/calendar.png' />

    </div>
  )
}

export default Period