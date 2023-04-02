import React, {useState, useRef, useEffect} from "react";
import {RiMenuFill} from 'react-icons/ri';
import {links} from "../data.js";
import logo from "../HelmImages/logo.svg"; 

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <div>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <RiMenuFill size={31.5} color = "red"/>
          </button>
          </div>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <div className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <div>
                  <a href={url}>{text}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
