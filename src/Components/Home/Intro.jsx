import React from 'react'
import img1 from '../../EventImages/biz.svg'
const Intro = () => {
  return (
    <div className='flex w-full max-w-[80rem] h-min'>
        <div className='text-[6vw] font-bold leading-[100%] w-[70%] text-left 3xl:text-[90px] max-xs:text-xl max-xs:w-[60%]' >
            <span>We are</span> <br />
            <span>The <span className='text-[#D01919]'>Business Club</span></span> <br />
            <span>IIT (BHU) Varanasi</span>
        </div>
        <div className='w-[30%]  max-xs:w-[40%]'>
            <img src={img1} alt=""  className=' h-full'/>
        </div>
    </div>
  )
}

export default Intro