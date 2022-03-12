import React from 'react';
import CTA from './CTA';
import './header.css';

import ProfilePicture from '../../assets/profilephoto.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tharuka Anjana</h1>  
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ProfilePicture} alt='Profile' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header