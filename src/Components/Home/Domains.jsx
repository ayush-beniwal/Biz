import React from 'react'
import { useState } from 'react'
import Carousel from './Carousel'
import DomainCont from './DomainCont'

const Domains = () => {
    const domains = ["Finance & Economics", "Product Management","Data Analytics", "Consulting",]
    const [currentIndex,setCurrentIndex] = useState(0)
  return (
    <>
    <div className='w-full text-center 3xl:text-[90px] justify-center text-white font-bold text-[3vw] max-xs:text-xl'>
        <span>We Broadly focus on these <span className='text-[#D01919]'>domains:</span></span>
    </div>
    <div className='flex justify-center mt-8 max-md:mt-2'>
    <div className='grid grid-flow-col w-[60%] '>
        {
            domains.map((domain, index) => {
                return ( 
                        <DomainCont text={domain} key={index} index={index} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
                )
            }
            )
    }
    </div>
    </div>
    <div className='mt-8 max-md:mt-4 '>
        <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
    </>
  )
}

export default Domains