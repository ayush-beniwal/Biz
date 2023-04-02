import React from 'react'

const Oureventtile = ({item}) => {
  return (
    <div className='w-full  flex flex-col items-center'> 
        <div className='text-white font-bold text-[2vw] lg:text-2xl max-sm:text-lg mb-[1.5vh]'>
            {item.title}
        </div>
        <div className='drop_shadow rounded-[50px]  w-full max-xs:h-[30vh]'>
            <img src={item.img} alt="" className=' w-full h-full' />
        </div>
        <div>
            <button className='bg-black px-4 py-2 rounded-3xl text-white text-[1.5vw] max-xs:text-lg'>Read More</button>
        </div>
    </div> 
  )
}

export default Oureventtile
