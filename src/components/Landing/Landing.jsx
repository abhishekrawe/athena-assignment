import { useEffect, useRef, useState } from "react";
import './Landing.scss'

const Landing = ({text}) => {

    const [imgSource, setImgSrc] = useState("../Videos/video1.gif");
    const leftDivRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return {
          width
        };
      }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

      useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      // console.log(windowDimensions);
    

    const handleScroll = (e) => {
        const leftDiv = leftDivRef.current;
        if (leftDiv) {
            const scrollTop = 0 - leftDiv.getBoundingClientRect().top;
            if (scrollTop < 500) {
                setImgSrc("../Videos/video1.gif");
            } else if (scrollTop < 800) {
                setImgSrc("../Videos/video2.gif");
            } else {
                setImgSrc("../Videos/video3.gif");
            }
        }
    };
    return (
        <div>
            <>
                <div class="wrapper">
                    <div class="main" ref={leftDivRef}>
                        {text.map ((values,index) => (
                            <div class="automation-section">
                            <div class="margin-bottom margin-xsmall">
                                <div class="text-weight">
                                    <span class="text-span">{values.heading}</span>
                                </div>
                            </div>
                            <h2 className='margin-xsmall'>{values.subHeading}</h2>
                            <p className='text-size-medium-2 margin-xsmall'>{values.description}</p>

                            {windowDimensions.width < 765 && <img src={`../Videos/video${index+1}.gif`}/>}
                        </div>
                        ))}
                        
                    </div>
                    <div class="sidebar">
                        <img className="img" src={imgSource} alt="placeholder" />
                    </div>
                </div>
            </>
        </div>
    )
}

export default Landing;