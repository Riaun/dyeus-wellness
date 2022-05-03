import React from 'react'
import './footer.css'
import FooterItem from './FooterItem'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__iconContainer'>
            <img className='footer__icon' src='/assets/icons/fb.png' />
            <img className='footer__icon' src='/assets/icons/twitter.png' />        
        </div>

        <FooterItem text='Products' />
        <FooterItem text='Our Science' />
        <FooterItem text='Vision & Mission' />
        <FooterItem text='About Us' />

        <div className='footer__hr' />

        <p className='footer__subscribe'>
            Subscribe to our Newsletter
        </p>

        <div className='footer__formContainer'>
            <input type='text' className='footer__textbox' placeholder='Enter your email...' />
            <div className='footer__button'>
                <MailOutlineOutlinedIcon />
                Activate
            </div>
        </div>
    </div>
  )
}

export default Footer