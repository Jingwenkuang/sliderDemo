import React, {useState} from 'react'
import './Slider.css'
import sliderData from './sliderData';
import SlideButton from './SlideButton';
import Modal from './Modal';

export default function Slider() {
  const [slideIdx, setSlideIdx] = useState(1); 
  const [showModal, setShowModal] = useState(false);

  //for next and prev button
  const nextSlide = () => {
    if (slideIdx !== sliderData.length) {
      setSlideIdx(slideIdx + 1);
    } else if (slideIdx === sliderData.length) {
      setSlideIdx(1)
    }
  }

  const prevSlide =() => {
    if (slideIdx !== 1) {
      setSlideIdx(slideIdx - 1);
    } else if (slideIdx === 1){
      setSlideIdx(sliderData.length)
    }
  }


  //for the circle below
  const moveDot = idx => {
    setSlideIdx(idx)
  }

  // const toggleModal = ()=> {
  //   setModal(!modal)
  // }
  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return(
    <div className='container'>
      <div className='box' >
      {sliderData.map((item, idx) => {
        return(
          <div 
          onClick={openModal}
          className={slideIdx === idx + 1 ? 'image active' : 'image'}
          key={item.id}
          >
            <img          
            src={process.env.PUBLIC_URL + `/Images/${idx + 1}.jpg`}
            />
          <Modal showModal={showModal} setShowModal={setShowModal} slide={idx}></Modal>
          </div>
        )
      })}
      </div>
      <SlideButton direction={'next'} moveSlide={nextSlide}/>
      <SlideButton direction={'prev'} moveSlide={prevSlide}/>

{/* create 5 empty dots  */}
      <div className='dots'>
        {Array.from({length: 5}).map((item, idx) => (
          <div 
          onClick={()=> moveDot(idx + 1)}
          className='dot'> 
          </div>
        ))}
      </div>

     
    </div>
  )
}