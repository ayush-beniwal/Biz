import React from 'react'
import "../App.css"
import Bash from '../Components/Bash';
import Particles, { ISourceOptions} from "react-tsparticles";
import EventRight from '../Components/EventRight.js';
import EventLeft from '../Components/EventLeft.js';
import Madhavendra from '../EventImages/madhavendra.png'
import ParticleBackground from '../Components/tspar';
import Gallery from '../Components/Gallery';
import GalleryImages from '../Components/GalleryImages';
import party from '../EventImages/partyima.jpeg'
const Bashpage = () => {
  return (
         <div>
      <Bash />
      <EventRight name={"Event Name"} image={Madhavendra} content={"Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc. Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc."} />
      <EventLeft name={"Event Name"} image={Madhavendra} content={"Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc. Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc."} />
      <EventRight name={"Event Name"} image={Madhavendra} content={"Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc. Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc."} />
      <EventLeft name={"Event Name"} image={Madhavendra} content={"Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc. Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc."} />
      {/* <Gallery /> */}
      {/* <GalleryImages img1={party} img2={Madhavendra} img3={Madhavendra}/> */}
      {/* <GalleryImages img1={party} img2={Madhavendra} img3={Madhavendra}/> */}
      {/* <ParticleBackground /> */}
    </div>

  )
}

export default Bashpage