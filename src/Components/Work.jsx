import React from "react";
import {imgdata} from "../imgdata"
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// import "./Scroll.css"
export default function Work(){
    return (
        <>
        {/* <div className="relative flex items-center group my-8"> */}
       
            
        <div className="mt-[2vw]  ml-[5vw] mr-[5vw]">
            <Splide options={{
                            type: "loop",
                            gap: "20px",
                            drag: "free",
                            arrows: false,
                            pagination: false,
                            perPage: 3,
                            height:'25vw',
                            autoScroll: {
                              pauseOnHover: false,
                              pauseOnFocus: false,
                              rewind: false,
                              speed: 1
                            }
                          }}
                          extensions={{ AutoScroll }}>
        {
            
            imgdata.map((item)=>{
                   
               return (
                <SplideSlide> 
                <img src = {item.img} alt = "/" />
                </SplideSlide> 
               )
               
            })
            
        }
            </Splide>
        </div>
      
         
        {/* </div> */}
        </>
    )
}
