import React from 'react';
import PhoneIcon from './photos/phone.svg';

export default function Header() {
  return (
    <div className='contact-header'>
      <a href="https://wa.me/+4407462971007" target="_blank">
      <img
        src= {PhoneIcon} >
      </img>
      <p> 07462971007</p>
      </a>
    </div>
  )
}
