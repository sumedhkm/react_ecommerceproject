import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
 const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
       <img src={footer_logo}/>
       <p>SMITH</p>
        </div>
        <ul className='footer-links'>
            <li> Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contract</li>


        </ul>
        
    </div>
  )
}
export default Footer