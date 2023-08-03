import React from 'react'
import whowe from '../../Images/home-about-img.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'



function AboutHome() {
    return (
        <>
            <div className='container-fluid how-it-works-section py-5 my-md-5'>
                <div className='container-lg'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-7 col-md-7 ps-md-4 mb-4'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                    <img width={10} className='img-fluid' src={dm_rectangle} alt='About Web Tech Solutions' />
                                </div>
                                <div className='col-11 create-website-heading align-self-center'>
                                    <h1>About Our Company</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11 create-website-text'>
                                    <p>WebTech solutions is a digital marketing/branding agency & IT solutions provider company that connect clients with the best professional resources they need to quickly set-up by their online presence & automate, simplify and rapidly increase their profits.</p>
                                    <h6>Quick Turn Around Time</h6>
                                    <p>We provide a fast turnaround time for client and offer efficient customer service. Quickly communicate by email and phone and deliver final products in a consistently speedy timeframe.</p>
                                    <h6>Ease Of Contact With Project Managers</h6>
                                    <p>Define the project, Plan the work, manage the workplan, issues, communication, documentation, quality risks & scope.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 col-sm-8 col-md-5 p-0 mb-4 mb-md-0 px-2'>
                            <img width="100%" height='100%' className='img-fluid' src={whowe} alt='About Web Tech Solutions' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHome