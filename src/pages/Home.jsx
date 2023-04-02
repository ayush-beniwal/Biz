import React from 'react'
import Intro from '../Components/Home/Intro'
import Domains from '../Components/Home/Domains'
import OurEvents from '../Components/Home/OurEvents'
import Workshop from '../Components/Home/Workshop'
import Achievements from '../Components/Home/Achievements'
const Homepage = () => {
  return (
    <>
        <div className='w-[99vw] min-h-[30vw] h-min flex my-20 justify-center px-[10vw]  '>
            <Intro />
        </div>
        <div className='w-[99vw] flex flex-col'>
            <Domains />
        </div>
        <div className='w-[99vw]  flex flex-col my-5'>
          <OurEvents />
        </div>
        <div className='w-[99vw] flex flex-col my-5'>
          <Workshop />
        <div className='w-[99vw] flex flex-col my-5'>
          <Achievements />
        </div>
        {/* <div className='w-[99vw] flex flex-col my-5'>
          <footer />
        </div> */}

        
        </div>
    </>
  )
}

export default Homepage