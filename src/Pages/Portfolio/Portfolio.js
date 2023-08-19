import React from 'react'
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import Teambanner from '../../Images/our-team-banner.webp'
import NuCosmetic from './NuCosmetic'
import CarParts from './CarParts'


function Portfolio() {
    return (
        <>
            <Header />
            <div className='container-fluid'>
                <div className='row our-team-main'>
                    <div className='col px-0'>
                        <img loading="lazy" className='img-fluid px-0'
                            src={Teambanner}
                            alt='Hire + Service Name + Expert or Specialist' />
                    </div>
                </div>
            </div>

            <NuCosmetic/>
            <CarParts/>
            <Footer />
        </>
    )
}

export default Portfolio