import React from 'react'
import aboutUsBanner from '../../Images/about-us-banner.webp'


function Banner() {
    return (
        <>
            
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                    <img loading="lazy" width="100%" src={aboutUsBanner} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner