import React from 'react';
import './Slider.css';


export default function Modal({showModal, setShowModal, slide}) {

  return(
    /*show the modal if onClick the image */
    <div>
      {showModal ? 
       (
         <div className='modal-background'>
           <div className='modal-child'>
            <img
            className='modal-slide'
            src={process.env.PUBLIC_URL + `/Images/${slide + 1}.jpg`}
            />
           </div>
         </div>
       ): null}
      
    </div>
  )
}
