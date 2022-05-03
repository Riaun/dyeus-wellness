import React from 'react'
import './personalbox.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function PersonalBox() {
  return (
    <div className='personalbox'>
        <h1 className='personalbox__bigpic'>
            Get your personalized period box
        </h1>
        <img className='personalbox__image' src='/assets/icons/box.png' />
        <p className='personalbox__text'>
            Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app. 
        </p>
        <div className='personalbox__button'>
            <p>Create your box on the app</p>
            <ChevronRightIcon />
        </div>

    </div>
  )
}

export default PersonalBox