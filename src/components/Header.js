import React from 'react';
import PhoneIcon from './photos/phone.svg';
import TanukiLogo from './photos/tanuki-logo.svg';
import TanukiCarpet from './photos/tanuki-background-carpet.png';

export default function Header() {
  return (
    <div>
      <div className='contact-header'>
        <div>
          <a href="https://wa.me/+4407462971007" target="_blank">
            <img className='phone-logo' src= {PhoneIcon}></img>
            Contact us: 07462971007 
          </a>
        </div>
        <div>
          <p>Language</p>
        </div>
      </div>

      <div className='tanuki-carpet'>
        <img className='tanuki-logo' src={TanukiLogo}></img>
      </div>
    </div>
  )
}
