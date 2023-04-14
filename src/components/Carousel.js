import React from 'react'
import './css/Carousel.css'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import images from './Images'

export default function Carousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  // useEffect(() => {
  //   console.log(carousel.current);
  // }, []);

  return (
    <div>
      <motion.div className='carousel'>
        <motion.div
         drag='x' 
         dragConstraints={{right: 0 , left: -8780}}
         className='inner-carousel'>
          {images.map((image) => {
            return (
              <motion.div className='item' key={image}> 
                <img src={image} alt='' />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
