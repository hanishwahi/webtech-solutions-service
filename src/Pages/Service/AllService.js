import React from 'react'
import ServiceList from './ServiceList'
import ServicesOverview from './ServicesOverview'
import CounterRecord from '../Home/CounterRecord'
import ServiceBox from './ServiceBox'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet';



function AllService() {
    return (
        <>

            <Helmet>
                <title>Our Services - Comprehensive IT Solutions for Digital Success | Web Tech Solutions Service</title>
                <meta name="description" content="Explore our comprehensive range of IT solutions designed to drive digital success. From digital marketing strategies to mobile and web application development, our services empower businesses to thrive in the digital age." />
                {/* Open Graph (OG) tags */}
                <meta property="og:title" content="Our Services - Comprehensive IT Solutions for Digital Success | Web Tech Solutions Service" />
                <meta property="og:description" content="Explore our comprehensive range of IT solutions designed to drive digital success. From digital marketing strategies to mobile and web application development, our services empower businesses to thrive in the digital age." />

                <meta property="og:url" content="https://webtechsolutionsservice.com/services" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Services - Comprehensive IT Solutions for Digital Success | Web Tech Solutions Service" />
                <meta name="twitter:description" content="Explore our comprehensive range of IT solutions designed to drive digital success. From digital marketing strategies to mobile and web application development, our services empower businesses to thrive in the digital age." />

                <meta name="twitter:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />
                {/* Canonical tag   */}

                <link rel="canonical" href="https://webtechsolutionsservice.com/services" />

            </Helmet>

            <Header />
            <div className='services-main-banner container-fluid'>
                <div className='container-xxl align-self-center'>
                    <div className='row'>
                        <div className='col-12 services-main-banner-heading'>
                            <h1>Our <span> Services</span></h1>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-lg-7 services-main-banner-text'>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia
                                and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>

                </div>
            </div>
            <ServiceList />
            <ServicesOverview />
            <ServiceBox />
            <CounterRecord />
            <Footer />
        </>
    )
}

export default AllService