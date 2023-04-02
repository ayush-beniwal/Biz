import React from "react";
import img1 from "../HelmImages/img1.jpg";
import img2 from "../HelmImages/img2.jpg";
import img3 from "../HelmImages/img3.jpg";
import sntc from "../HelmImages/SNTCLogo.svg";
import islogo from "../HelmImages/logo.svg";
import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { AiTwotoneHeart } from "react-icons/ai";
export default function Footer() {
  const [a, set] = useState(window.innerWidth);
  const [x, set1] = useState(window.innerWidth/36);
  useEffect(()=>{

    window.addEventListener("resize", () => {
        set(window.innerWidth);
        const temp = Number(a);
        set1(temp / 36);
      })
      return (
        window.removeEventListener("resize", () => {
          set(window.innerWidth);
          const temp = Number(a);
          set1(temp / 36);
        })
      );

  },[a]);

  return (
    <div id="Footer" className="relative w-full">
      <div id="ContactUs">
        <div>
            Contact Us
        </div>
      </div>
      <div id="FooterImages" className="relative">
        <div id="baccha" >
          <img
            id="borderimg"
            src={img1}
            className="object-cover rounded-full p-2 text-center"
          ></img>
          <br />
          <span id="m1" className="">Archit Gupta</span>
          {/* <br></br> */}
          <span id="m2" className="">Jt. Secretary & Product Head</span>
          {/* <br></br> */}
          <span id="m3" className="">(+91 70558 48000)</span>
        </div>
        <div id="baccha">
          <img
            id="borderimg"
            src={img2}
            className="w-[10vw] h-auto object-cover rounded-full p-2"
          ></img>
          <br />
          <span id="m1" className="">Ayush Gupta</span>
          {/* <br></br> */}
          <span id="m2" className="">Secretary & Outreach Head</span>
          {/* <br></br> */}
          <span id="m3" className="">(+91 98997 41300)</span>
        </div>
        <div id="baccha">
          <img
            id="borderimg"
            src={img3}
            className="w-[10vw] h-auto object-cover rounded-full p-2"
          ></img>
          <br />
          <span id="m1" className="">K Abhishek Kumar</span>
          {/* <br></br> */}
          <span id="m2" className="">Jt. Secretary & Finance Head</span>
          {/* <br></br> */}
          <span id="m3" className="">(+91 97528 20153)</span>
        </div>
      </div>
      {/* <br /> */}
      <div id="FooterEnding" className="relative flex w-full">
        <div className=" self-center">
          <img src={islogo} className="w-[10vw] h-auto object-cover"></img>
        </div>
        <div id="query" className="relative flex self-center ">
          <div id="q1" className="text-[1.2vw] ">For queries, mail at:</div>
          <div className="text-[1.2vw]">
            <u id="q2">
              businessclub.iitbhu<span>@</span>gmail.com
            </u>
          </div>
        </div>
        <div className=" self-center">
          <img src={sntc} className="w-[10vw] self-center object-cover"></img>
        </div>
      </div><div id="love" className="flex">
        <div id="lefty" className="">
          <div id="land1" className="text-[1.4vw]">Made With</div>
          <div id="land2" className="flex">
            <AiTwotoneHeart
              size={x}
              color="red"
              className=" inline-block"
            />
          </div>
        </div>
        <div className=" flex flex-1" id="footericons">
          <div className="flex self-center align-middle">
            <SocialIcon id="icon"
              url="https://www.instagram.com/businessclub_iitbhu"
              bgColor="#ffff"
              target="_blank"
              className="hover:scale-105 ease-in-out duration-300"
              style={{ height: x, width: x }}
            />
          </div>
          <div className=" flex">
            <SocialIcon
              url="https://www.linkedin.com/mwlite/company/businessclubiitbhu"
              bgColor="#ffff"
              target="_blank"
              className="hover:scale-105 ease-in-out duration-300"
              style={{ height: x, width: x }}
            />
          </div>
          <div className=" flex">
            {" "}
            <SocialIcon
              url="https://bizclub.notion.site/Business-Club-IIT-BHU-Homepage-e5d03277a179446097c28aee8ac258ad"
              bgColor="#ffff"
              target="_blank"
              className=" align-middle hover:scale-105 ease-in-out duration-300"
              style={{ height: x, width: x }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
