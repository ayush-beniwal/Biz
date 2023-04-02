import React from 'react'
import data from "../../Data/Events.js"
import Oureventtile from './Oureventtile.jsx';
const OurEvents = () => {
  console.log(data);
  return (
    <div>
        <div className='text-white font-bold text-[4vw] text-center max-xs:text-xl mt-[9vh]'>Our <span className='text-[#D01919]'>Events</span></div>
        <div className='grid grid-flow-row grid-cols-2 gap-10 px-[20vw] max-xl:px-[15vw] max-lg:px-[10vw] max-md:px-[5vw] max-sm:px-[10px] max-sm:gap-3 max-xs:grid-cols-1 mt-[3vh] '>
            {
                data.map((item,index) => {
                  return(
                    <Oureventtile item={item} key={index} />
                  )
                }
              )
            }
        </div>

    </div>
  )
}

export default OurEvents