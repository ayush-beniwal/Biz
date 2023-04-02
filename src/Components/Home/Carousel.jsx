import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useRef } from 'react';
import '@splidejs/react-splide/css';
import img1 from '../../EventImages/DA.svg'
import img2 from '../../EventImages/FnE.svg'
import img3 from '../../EventImages/ProdMan.svg'
import img4 from '../../EventImages/Consult.svg'

const Carousel = ({currentIndex,setCurrentIndex}) => {

  const splideRef = useRef(null)

  useEffect(()=>{
    // splideRef.go(currentIndex)
    if(splideRef.current.splide)splideRef.current.splide.go(currentIndex)
  },[currentIndex])

  return (
    // <div class="splide" data-splide='{"type":"loop","wheel":"true"}' >
    
    <Splide aria-label="My Favorite Images" 
            // data-splide='{"type":"loop","waitForTransition":"true","wheelSleep":100}' 
            className=''
            onMove={(splide)=>{setCurrentIndex(splide.index);console.log(splide.index)}}
            options={{
              type:"loop",
              autoplay:true,
              interval:5000,
              flickMaxPages:1,
              pauseOnFocus:false,
              pauseOnHover:false,
              // arrows:true,

          }}
            ref={splideRef}
            >
    <SplideSlide className=''>
      <img src={img2} alt="Image 1" className=''/>
    </SplideSlide>
    <SplideSlide>
      <img src={img3} alt="Image 1"/>
    </SplideSlide>
    <SplideSlide>
      <img src={img1} alt="Image 1"/>
    </SplideSlide>
    <SplideSlide>
      <img src={img4} alt="Image 1"/>
    </SplideSlide>
    {/* <SplideSlide>
      <img src="image2.jpg" alt="Image 2"/>
    </SplideSlide> */}
  </Splide>
  // </div>
  )
}

export default Carousel