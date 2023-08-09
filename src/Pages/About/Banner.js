import React from 'react'
import aboutUsBanner from '../../Images/about-us-banner.webp'


function Banner() {
    return (
        <>
            <div className='container-fluid px-0'>
                <div className='container-xxl px-0'>
                    <img loading="lazy" className='img-fluid' src={aboutUsBanner} alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner