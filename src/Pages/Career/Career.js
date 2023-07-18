import React from 'react'
import careerbanner from '../../Images/career-banner.webp'
import Jobs from './Jobs'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ContactForm from '../ContactForm/ContactForm'


function Career() {
    return (
        <>
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                        <img className='overflow-hidden px-0 img-fluid'
                            src={careerbanner}
                            alt='' />
                    </div>
                </div>
            </div>

            <div className='container-fluid py-lg-5 py-3'>
                <div className='container-lg'>
                    <div className='row career-001 text-center'>
                        <h1>Hello there!</h1>
                        <p>If you have it in you to be a change-maker team player and impactful contributor, you are welcome. We are on a
                            mission to create greeat work, and make agency client partership to be balanced and positive.</p>
                    </div>
                </div>
            </div>

            <Jobs />
            <ContactForm/>
            <Footer />
        </>
    )
}

export default Career