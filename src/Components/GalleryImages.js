import '../Css/Gallery.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// new Splide( '.splide' ).mount( { AutoScroll } );
// const splide = new Splide( '.splide', {
//     type   : 'loop',
//     drag   : 'free',
//     focus  : 'center',
//     perPage: 3,
//     autoScroll: {
//       speed: -1,
//     },
//   } );
  
//   splide.mount();
const GalleryImages = ({ img1, img2, img3 }) => {

    return (
        <>
         <div className="mt-[2vw] ml-[10vw] mr-[10vw]">
            {/* <div className="img1"> 
                <img src={img1} className="galleryImage"></img>
            </div >
            <div className="img2"> 
                <img src={img2} className="galleryImage"></img>
            </div>
            <div className="img3"> 
                <img src={img3} className="galleryImage"></img>
            </div>  */}

            <Splide aria-label="My Favorite Images" 
                        options={{
                            type: "loop",
                            gap: "20px",
                            drag: "free",
                            arrows: false,
                            pagination: false,
                            perPage: 3,
                            autoScroll: {
                              pauseOnHover: false,
                              pauseOnFocus: false,
                              rewind: false,
                              speed: 1
                            }
                          }}
                          extensions={{ AutoScroll }}>
                <SplideSlide className='' >
                <img src={img2} alt="Image 1" className="ease-in-out"/>
                </SplideSlide>
                <SplideSlide>
                <img src={img3} alt="Image 1" className="ease-in-out"/>
                </SplideSlide>
                <SplideSlide>
                <img src={img1} alt="Image 1" className="ease-in-out"/>
                </SplideSlide>
                  {/* <SplideSlide>
                <img src={img4} alt="Image 1"/>
                </SplideSlide> */}
                
            </Splide>  

        </div>

        </>
    )
};

export default GalleryImages;