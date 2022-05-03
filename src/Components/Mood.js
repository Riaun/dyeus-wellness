import React from 'react'
import  './Mood.css'

function Mood() {
  return (
    <div className='mood'>
        <h1 className='mood__heading'>
            Track your mood
        </h1>
        <p className='mood__care'>
        All days and all moods are not made equal. 
        But we can only improve what we measure. 
        Track your mood and vitals 
        (including skin and hair health) 
        so you can take better care of yourself every day.
        </p>
        <div className='mood__button'>
          Track you mood on the app
        </div>
        <div className='mood__imgContainer'>
          <img className='mood__image' src='/assets/icons/mood1.png' />
          <img className='mood__image' src='/assets/icons/mood2.png' />
        </div>
        <div className='mood__imgContainer'>
          <img className='mood__image' src='/assets/icons/mood3.png' />
          <img className='mood__image' src='/assets/icons/mood4.png' />
        </div>
    </div>
  )
}

export default Mood