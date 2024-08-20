import React from 'react';
import {  useLocation } from 'react-router-dom';

import './Footer.css';
import footerLogo from '../Assets/logo_big.png';
import instagramIcon from '../Assets/instagram_icon.png';
import pinterestIcon from '../Assets/pintester_icon.png';
import whatsappIcon from '../Assets/whatsapp_icon.png';

const Footer = () => {

  const location = useLocation();

  const navbar = ['/loginsignup', '/register','/'];

  if (navbar.includes(location.pathname)) {
    return null;
  }


  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footerLogo} alt='Logo' />
        <p>SMITH</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
          <img src={instagramIcon} alt='Instagram' />
        </div>
        <div className='footer-icons-container'>
          <img src={pinterestIcon} alt='Pinterest' />
        </div>
        <div className='footer-icons-container'>
          <img src={whatsappIcon} alt='WhatsApp' />
        </div>
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>Copyright @ 2024- All Right Resvered</p>
      </div>
    </div>
  );
};

export default Footer;
