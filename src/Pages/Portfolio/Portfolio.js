import React from 'react'
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import Portfolio1 from '../../Images/Portfolio.webp'
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
                            src={Portfolio1}
                            alt='Hire + Service Name + Expert or Specialist' />
                    </div>
                </div>

            </div>
            <div className="container-fluid py-5">
                <div className="container-xl">
                    <div className="row ">
                        <div className="col">
                            <NuCosmetic />
                        </div>
                        <div className="col">
                            <CarParts />
                        </div>
                        <div className="col">
                            <NuCosmetic />
                        </div>

                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Portfolio