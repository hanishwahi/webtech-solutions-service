import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PPCbanner from '../../Images/ppc-banner.webp'
import PPCimg from '../../Images/ppc-img.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'
import PPCMarketing from './PPCMarketing'
import WeGrow from './WeGrow'
import PPCTeam from './PPCTeam'
import ContactForm from '../ContactForm/ContactForm'


function PPC() {
    return (
        <>
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                        <img className='overflow-hidden px-0 img-fluid'
                            src={PPCbanner}
                            alt='' />
                    </div>
                </div>
            </div>
            <div className='container-fluid py-lg-5'>
                <div className='container-lg'>
                    <div className='row py-3 py-lg-5 justify-content-center'>
                        <div className='col-lg-6 col-md-8 align-self-center'>
                            <img width="100%" height="100%" src={PPCimg} alt='' className='img-fluid' />
                        </div>
                        <div className='col-lg-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                    <img width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 ppc-heading align-self-center'>
                                    <h1>We Offer Top-Notch PPC Services</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11'>
                                    <div className='ppc-content'>
                                        <p>Get immediate results driven to your business utilising PPC in Digital Marketing with a significant boost in traffic, elevated leads and increased number of conversions. Employing the ropes of PPC will render your business with a yield of measurable ROI and help you achieve your ultimate business goals. As experts in the realm of digital marketing, Web tech Solutions servives strives to assist businesses in tapping into their potential market and helps brands scale up to new heights. <br /><br />

                                            Our PPC Agency in Chandigarh recognises that every business model is distinct in its own way, having its own set of business perks
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <PPCMarketing/>
            <WeGrow/>
            <PPCTeam/>
            <ContactForm/>
            <Footer />
        </>
    )
}

export default PPC