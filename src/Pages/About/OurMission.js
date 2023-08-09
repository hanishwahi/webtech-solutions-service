import React from 'react'
import Ourmission from '../../Images/Our-mission.webp'
 import dm_rectangle from '../../Images/dm-rectangle 13.png'


function OurMission() {
    return (
        <>
            <div className='container-fluid py-4'>
                <div className='container-lg'>
                    <div className='row py-md-5  d-flex justify-content-center'>
                        <div className='col-lg-5 col-md-8 mb-3 '>
                           <div className='about-blob-1 about-blob '>
                           <img loading="lazy" src={Ourmission}
                                alt='' className='img-fluid' />
                           </div>
                        </div>
                        <div className='col-lg-7 col-md-12 ps-lg-5'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end'>
                                    <img loading="lazy" width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 about-mission-heading align-self-center'>
                                    <h1>Our Mission & Vision</h1>
                                </div>
                            </div>
                            <div className='ps-lg-5 ps-4'>
                            <div className='row'>
                                <div className='col-md- col-sm-1 col-1 text-end'>
                                    <i className="fa-regular fa-circle-dot text-dark"></i>
                                </div>
                                <div className='col-md-11 col-sm-11 col-11 '>
                                    <p className='our-mission-text'>
                                        <strong>Mission:
                                        </strong> Our mission is to improve businesses and through cutting-edge technology.</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-1 col-sm-1 col-1 text-end'>
                                    <i className="fa-solid fa-eye text-dark"></i>
                                </div>
                                <div className='col-md-11 col-sm-11 col-11'>
                                    <p className='our-mission-text'>
                                        <strong>Vision:
                                        </strong> We believe that combining our technical and customer experience will produce the best solutions that define your business effectively and aid in achieving your goals.</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-1 col-sm-1 col-1 text-end'>
                                    <i className="fa-solid fa-bullseye text-dark"></i>
                                </div>
                                <div className='col-md-11 col-sm-11 col-11'>
                                    <p className='our-mission-text'>
                                        <strong>Goal:
                                        </strong> Our goal is to create visually stunning and user-centric websites that drive engagement, enhance brand perception, and achieve measurable results.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OurMission