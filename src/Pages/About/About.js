import React from 'react'
import Banner from './Banner'
import OurMission from './OurMission'
import CounterRecord from '../Home/CounterRecord'
import Unique from './Unique'
import WhyUs from './WhyUs'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet';



function About() {
  return (
    <>
      <div>
        <Helmet>
          <title>Web Tech Solutions Service - Leading IT Service Provider In India | About Us</title>
          <meta name="description" content="Web Tech Solutions Service, the leading IT service provider in India. We specialize in digital marketing, mobile, and web application development, helping businesses thrive globally. Learn more about our experienced team and tailored solutions." />
          {/* Open Graph (OG) tags */}
          <meta property="og:title" content="Web Tech Solutions Service - Leading IT Service Provider In India | About Us" />
          <meta property="og:description" content="Web Tech Solutions Service, the leading IT service provider in India. We specialize in digital marketing, mobile, and web application development, helping businesses thrive globally. Learn more about our experienced team and tailored solutions." />
          <meta property="og:url" content="https://webtechsolutionsservice.com/about-us" />
          <meta property="og:type" content="website"/>
          <meta property="og:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp"/>
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Web Tech Solutions Service - Leading IT Service Provider In India | About Us" />
          <meta name="twitter:description" content="Web Tech Solutions Service, the leading IT service provider in India. We specialize in digital marketing, mobile, and web application development, helping businesses thrive globally. Learn more about our experienced team and tailored solutions." />
          <meta name="twitter:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp"/>
            {/* Canonical tag   */}

          <link rel="canonical" href="https://webtechsolutionsservice.com/about-us"/>
           
        </Helmet>

        <Header />
        <Banner />
        <OurMission />
        <CounterRecord />
        <Unique />
        <WhyUs />
        <Footer />
      </div>

    </>
  )
}

export default About