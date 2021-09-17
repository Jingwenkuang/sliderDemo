import React from 'react';
import './Slider.css';
import playPrevious from './icons/left.png';
import playNext from './icons/right.png';

export default function SlideButton ({direction, moveSlide}){
//the moveSlide logic from the parent component
  return(
    <button 
    onClick={moveSlide}
    className={direction === 'next'? 'buttonClick next' : 'buttonClick prev'}
    >
      <img 
      src={direction === 'next' ? playNext : playPrevious}
      />
    </button>
  )
}