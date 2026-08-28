import React from 'react'
import { RiArrowUpLongLine } from "react-icons/ri";
const ScrollUpBtn = () => {
   const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' 
    });
  };
  return (
    <div onClick={handleScrollToTop}  className={`flex items-center justify-center rounded-full bg-[#e2d8b7]/70 backdrop-blur-lg w-12.5 h-12.5 fixed bottom-20 right-5 shadow-md cursor-pointer transition duration-200 transform hover:-translate-y-1`}>
      <RiArrowUpLongLine size={19} className='text-white' />
    </div>
  )
}

export default ScrollUpBtn
