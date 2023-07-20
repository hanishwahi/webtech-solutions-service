import React from 'react'
import careerbanner from '../../Images/career-banner.webp'
import Jobs from './Jobs'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ContactForm from '../ContactForm/ContactForm'
import { Helmet } from 'react-helmet'


function Career() {
    return (
        <>
            <Helmet>
                <title>Join Our Team of IT Experts | WebTech Solutions
                </title>
                <meta name="description" content="Take your career to new heights with WebTech Solutions. Join our team of IT experts and work on cutting-edge projects that drive digital innovation. Explore our career opportunities and grow with us." />
                {/* Open Graph (OG) tags  */}
                <meta property="og:title" content="Join Our Team of IT Experts | WebTech Solutions" />
                <meta property="og:description" content="Take your career to new heights with WebTech Solutions. Join our team of IT experts and work on cutting-edge projects that drive digital innovation. Explore our career opportunities and grow with us." />
                <meta property="og:url" content="https://webtechsolutionsservice.com/career" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

                {/* Twitter Card tags  */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Join Our Team of IT Experts | WebTech Solutions
" />
                <meta name="twitter:description" content="Take your career to new heights with WebTech Solutions. Join our team of IT experts and work on cutting-edge projects that drive digital innovation. Explore our career opportunities and grow with us.
" />
                <meta name="twitter:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

                {/* Canonical tag  */}
                <link rel="canonical" href="https://webtechsolutionsservice.com/career" />
            </Helmet>
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                        <img className='overflow-hidden px-0 img-fluid'
                            src={careerbanner}
                            alt='We Are Hiring - IT Jobs' />
                    </div>
                </div>
            </div>

            <div className='container-fluid py-lg-5 py-3'>
                <div className='container-lg'>
                    <div className='row career-001 text-center'>
                        <h1>Hello there!</h1>
                        <p>If you have it in you to be a change-maker team player and impactful contributor, you are welcome. We are on a
                            mission to create great work, and make agency client partership to be balanced and positive.</p>
                    </div>
                </div>
            </div>

            <Jobs />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Career