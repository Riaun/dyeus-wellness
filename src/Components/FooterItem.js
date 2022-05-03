import React from 'react'
import './footeritem.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const FooterItem = (props) => {
  return (
    <div className='footeritem'>
        <p>{ props.text }</p>
        <ChevronRightIcon /> 
    </div>
  )
}

export default FooterItem