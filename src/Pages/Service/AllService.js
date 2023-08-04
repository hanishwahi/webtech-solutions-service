import React from 'react'
import ServiceList from './ServiceList'
import ServicesOverview from './ServicesOverview'
import CounterRecord from '../Home/CounterRecord'
import ServiceBox from './ServiceBox'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet';
import serviceBanner from '../../Images/services-main-banner.webp'


function AllService() {
    return (
        <>

            <Helmet>
                <title>Our Services - Comprehensive IT Solutions for Digital Success 
</title>
                <meta name="description" content="Explore our comprehensive range of IT solutions designed to drive digital success. From mobile and web application development to digital marketing strategies, our services empower the businesses..
" />
                {/* Open Graph (OG) tags */}
                <meta property="og:title" content="Our Services - Comprehensive IT Solutions for Digital Success 
" />
                <meta property="og:description" content="Explore our comprehensive range of IT solutions designed to drive digital success. From mobile and web application development to digital marketing strategies, our services empower the businesses..
" />

                <meta property="og:url" content="https://webtechsolutionsservice.com/services" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Services - Comprehensive IT Solutions for Digital Success 
" />
                <meta name="twitter:description" content="Explore our comprehensive range of IT solutions designed to drive digital success. From mobile and web application development to digital marketing strategies, our services empower the businesses..
" />

                <meta name="twitter:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />
                {/* Canonical tag   */}

                <link rel="canonical" href="https://webtechsolutionsservice.com/services" />

            </Helmet>

            <Header />
            <div className='container-fluid px-0'>
                <div className='container-xxl px-0'>
                    <img className='img-fluid' src={serviceBanner} alt="" />
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