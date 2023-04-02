import React from "react";
import {imgdata} from "../imgdata"
import {MdChevronLeft,MdChevronRight} from "react-icons/md";
// import "./Scroll.css"
export default function Scroll(){
    const slideleft = ()=>{
        var slider = document.getElementById("slide");
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideright = () => {
        var slider = document.getElementById("slide");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return(
        <>
        <div className="relative flex items-center group my-8">
       
            
        <div id="slide" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide" >
        {
            imgdata.map((item)=>{
               return (
                <img className="xl:w-[20rem] xl:h-[20rem] w-[220px] h-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src = {item.img} alt = "/" />
               )
            })
        }</div>
           <MdChevronLeft id = "opac" className=" absolute left-0 bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 hidden group-hover:block" onClick = {slideleft} size = {40}/>
        <MdChevronRight id="opac" className='absolute right-0 bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 hidden group-hover:block' onClick = {slideright} size = {40}/>
         
        </div>
        </>
    )
}