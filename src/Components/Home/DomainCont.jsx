import React from 'react'

const DomainCont = ({text,currentIndex, setCurrentIndex,index}) => {
  return (
    <div className={`bg-[#171717] rounded-2xl ${(index==currentIndex) ?'text-[white]' : 'text-[grey]'} font-bold text-[2vw]  py-1 text-center w-min flex items-center px-4`} onClick={()=>{setCurrentIndex(index);console.log(index)}}>
        {text}
    </div>
  )
}

export default DomainCont