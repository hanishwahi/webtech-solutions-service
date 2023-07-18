import React from 'react'
import Digitalmarketing from '../../Images/digital-marketing-banner.webp'
import DigitalmarktingImg from '../../Images/digital-marketing-img.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'
import ServiceBox from '../Service/ServiceBox'
import ContactForm from '../ContactForm/ContactForm'
import NewHeights from './NewHeights'
import CallNow from './CallNow'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function DigitalMarketing() {
    return (
        <>
<Header/>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                        <img width="100%" height="100%" className='overflow-hidden px-0 img-fluid' src={Digitalmarketing} alt='' />
                    </div>
                </div>
                <div className='container-lg'>
                    <div className='row py-md-5 py-3'>
                        <div className='col-lg-6 col-md-5 col-sm-8 p-0 mb-4 mb-md-0'>
                            <img width="100%" height="100%" className='img-fluid' src={DigitalmarktingImg} alt='' />
                        </div>
                        <div className='col-lg-6 col-md-7 ps-md-4 mb-4 '>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                    <img width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 create-website-heading align-self-center'>
                                    <h1>Digital Marketing</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col create-website-text'>
                                    <p>Web Tech Solutions Services provides high-caliber,
                                        goal-oriented digital marketing services for your company. Our Google-certified experts offer dynamic and adaptable marketing solutions, from organic strategies to paid advertising, to ensure that you achieve the desired business growth. Our marketing methods will make sure that you build your brand, reach more people, and produce real business leads—all at affordable costs. They do this with the aid of SEO, SMO, PPC, and other tools.
                                        platforms. It’s a fantastic approach to boost traffic and consumer interaction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <NewHeights />
            <ServiceBox />
            <CallNow/>
            <ContactForm />
            <Footer/>

        </>
    )
}

export default DigitalMarketing