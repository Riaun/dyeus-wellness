import React from 'react'
import './wellness.css'

function Wellness() {
  return (
    <div className='wellness'>
        <h2 className='wellness__subheading'>
            Liberate your everyday wellness 
        </h2>

        <h1 className='wellness__bigpic'>
         Shop our self-care products
        </h1>

        <p className='wellness__text'>
            Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get. 
        </p>

        <div className='wellness__button'>
            Upgrade your self-care
        </div>

        <p className='wellness__text wellness__text-tag'>
            #NoNasties, we promise!
        </p>

        <img className='wellness__img' src='/assets/icons/rose.png' />

        {/* <div className='wellness__image'></div> */}

    </div>
  )
}

export default Wellness