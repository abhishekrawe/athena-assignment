import React from 'react'
import './Landing.scss'

const Landing = () => {
    return (
        <div>
            <>
                <div class="wrapper">
                    <div class="main">
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
                    <iframe className="video" src="../Videos/video1.mp4" frameborder="0"></iframe>
                    </div>
                    
                </div>
            </>
        </div>
    )
}

export default Landing