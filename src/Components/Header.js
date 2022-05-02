import React from 'react'
import './header.css'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
function Header() {
  return (
    <div className='header'>
        <div className='header__hamburger'>
            <MenuIcon />
        </div>
        <div className='header__rightContainer'>
            <ShoppingCartOutlinedIcon />
            <NotificationsOutlinedIcon />
        </div>
    </div>
  )
}

export default Header