import '../Css/Bash.css'
import eve1 from '../EventImages/madhavendra.png'
// import Scroll from './Scroll';
import EventLeft from "./EventLeft"
import EventRight from "./EventRight"
import Gallery from "./Gallery"
import GalleryImages from "./GalleryImages"
import Madhavendra from "../EventImages/madhavendra.png"
import party from "../EventImages/partyima.jpeg"
import Work from './Work'
import prod from '../EventImages/ProdBreak.png'
const Bash = () => {
    return (
        <>
        <div className="BashHeader">
       
        <div className="title">
            B.A.S.H
        </div>
        <div className="subtitle">
            <span className="firstLetter"> B</span>usiness   
            <span className="firstLetter"> A</span>ssociates   
            <span className="firstLetter"> S</span>pecial   
            <span className="firstLetter"> H</span>ours  
        </div>
        <div className="content">
        Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc. Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc.
        </div>
        
        <div className="Scrollbar"></div>
        </div>
        <div className="BashEvents mt-8">
        <div className='text-white font-bold text-[4vw] text-center max-xs:text-xl'>Workshop<span className='text-[#D01919]'> Conducted</span></div>
            <Work />
        </div>
        {/* <div className='w-[99vw] flex items-center justify-center'> */}
         {/* <div className='coming w-[35%]  text-center py-4 px-8 text-[5vw] font-bold ' style={{borderRadius:"20px"}}>
            Coming Soon
         </div> */}
        <EventRight 
            name={"Consultium"} 
            image={prod} 
            content={"The flagship consulting event is where participants showcase their problem-solving skills. The competition involves three rounds spanning quiz, deck submission and pitching. Moreover, the participants will be judged on the basis of the creativity, feasibility, and impact of their solution and their presentation skills."} 
            link={"https://unstop.com/competitions/bearish-bull-bash-50-business-associates-special-hours-iit-bhu-varanasi-655544"}
            />
        <EventLeft 
            name={"Prodnosis"} 
            image={prod} 
            content={"Welcome to Prodnosis, a platform to showcase your innovation and creativity in developing and launching successful products. This competition offers you the opportunity to challenge yourself, collaborate with others, and showcase your ability to think strategically and execute flawlessly. You'll have the chance to pitch your product ideas to a panel of judges, receive constructive feedback, and compete for exciting prizes."} 
            link={"https://unstop.com/competitions/bearish-bull-bash-50-business-associates-special-hours-iit-bhu-varanasi-655544"}
            />
        <EventRight 
            name={"Bearish Bull"} 
            image={prod} 
            content={"The Bearish Bull is a flagship event where participants showcase their skills in live stock trading. The competition involves two rounds spanning quiz and simulation trading. Participants will be judged on the basis of their accuracy of trades, portfolio management, risk management, and Decision taking skills. The objective is to maximize the profit while managing the risk within the given time constraints."} 
            link={"https://unstop.com/competitions/bearish-bull-bash-50-business-associates-special-hours-iit-bhu-varanasi-655544"}
            />
        <EventLeft 
            name={"Event Name"} 
            image={prod} 
            content={"Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc. Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc."} 
            link={"https://unstop.com/competitions/bearish-bull-bash-50-business-associates-special-hours-iit-bhu-varanasi-655544"}
            />
        {/* </div> */}
      

        
        </>
    )
};

export default Bash;