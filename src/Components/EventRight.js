
import '../Css/EventRight.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Link} from "react-router-dom"
const EventLeft = ({ name, image, content, link }) => {
    
    

    return (
        <>
        <div className="eventName">
        <div className='text-white font-bold text-[4vw] text-center max-xs:text-xl mb-[1vh]'>
        <a href={link} target="_blank" rel="noopener noreferrer" className='eve-link'>
            {name}
        </a>
        
        </div>
        
        </div>
        <div className='event'>

        
            
            <div className="eventImg">
            <a href={link} target="_blank" rel="noopener noreferrer">

             <img src={image} alt={name} className="EveImg"/>
            </a>
            </div>
            <div className="eventDesc w-[40vw] min-w-[250px] text-[12px] md: text-[18px] lg:text-[28px]">
                {content}
            </div>
        
         


        </div>
        </>
    )
};

export default EventLeft;