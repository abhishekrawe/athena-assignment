import { useEffect, useRef, useState } from "react";
import './Landing.scss'

const Landing = () => {

    const [imgSource, setImgSrc] = useState("../Videos/video1.gif");
    const leftDivRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                        <div class="automation-section">
                            <div class="margin-bottom margin-xsmall">
                                <div class="text-weight">
                                    <span class="text-span">Kula Outreach</span>
                                </div>
                            </div>
                            <h2 className='margin-xsmall'>Automated Candidate Follow-ups</h2>
                            <p className='text-size-medium-2 margin-xsmall'>For prospective candidates, send automated, periodic follow-ups and value-adds to nurture long-term relationships</p>
                        </div>
                        <div class="automation-section">
                            <div class="margin-bottom margin-xsmall">
                                <div class="text-weight">
                                    <span class="text-span">Kula Outreach</span>
                                </div>
                            </div>
                            <h2 className='margin-xsmall'>Personalized Candidate Reach Outs</h2>
                            <p className='text-size-medium-2 margin-xsmall'>For prospective candidates, send automated, periodic follow-ups and value-adds to nurture long-term relationships</p>
                        </div>
                        <div class="automation-section">
                            <div class="margin-bottom margin-xsmall">
                                <div class="text-weight">
                                    <span class="text-span">Kula Outreach</span>
                                </div>
                            </div>
                            <h2 className='margin-xsmall'>Reach out on channels candidates prefer</h2>
                            <p className='text-size-medium-2 margin-xsmall'>For prospective candidates, send automated, periodic follow-ups and value-adds to nurture long-term relationships</p>
                        </div>
                    </div>
                    <div class="sidebar">
                        <img className="img" src={imgSource} alt="placeholder" />
                    </div>
                </div>
            </>
        </div>
    )
}

export default Landing