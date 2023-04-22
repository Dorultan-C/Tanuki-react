import React from 'react'
import Photo from './photos/tanuki-shop/h-1.jpg'
import '../components/css/Card.css'

export default function 
() {
  return (
    <div className='main-card'>
      <div className='price'>
        <p>£19.99</p>
      </div>
      <div>
        <img className='photo-card' src={Photo}></img>
      </div>
      <span>Pokemon</span>
      <h3>Viraety</h3>
    </div>
  );
}
