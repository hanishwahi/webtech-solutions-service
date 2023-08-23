import React from 'react'
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import Portfolio1 from '../../Images/Portfolio.webp'
import PortfolioSlider from './PortfolioSlider'




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
            <div className="py-5">
                <PortfolioSlider />
            </div>

            <Footer />
        </>
    )
}

export default Portfolio