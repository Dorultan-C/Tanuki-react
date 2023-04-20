import React from 'react'
import Photo from './photos/tanuki-shop/h-1.jpg'
import '../components/css/Card.css'

export default function 
() {
  return (
    <div className='main-card'>
      <img className='photo-card' src={Photo}></img>
      <h1>hbusbs</h1>
      <p>£99</p>
    </div>
  )
}
