import React from 'react'
import Banner from './Banner'
import CreateWebsite from './Create-website'
import HowWeWork from './HowWeWork'
import Service from './Service'
import Faq from './FAQ'
import AboutHome from './AboutHome'
import Testmonial from '../Clients/Testmonial'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet'

 
function Home() {
  return (
    <>
      <Helmet>
        <title>WebTech Solutions: Best Digital Marketing & App Development Company in Chandigarh, INDIA</title>

        {/* Meta Tags */}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="We are one of the leading IT Solutions providers offering a wide range of digital marketing, mobile & web application development services worldwide.
" />

        {/* Open Graph (OG) Tags */}
        <meta property="og:title" content="WebTech Solutions: Best Digital Marketing & App Development Company in Chandigarh, INDIA" />
        <meta property="og:description" content="We are one of the leading IT Solutions providers offering a wide range of digital marketing, mobile & web application development services worldwide."/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webtechsolutionsservice.com/" />
        <meta property="og:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WebTech Solutions: Best Digital Marketing & App Development Company in Chandigarh, INDIA
" />
        <meta name="twitter:description" content="We are one of the leading IT Solutions providers offering a wide range of digital marketing, mobile & web application development services worldwide.
" />
        <meta name="twitter:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://webtechsolutionsservice.com/" />
      </Helmet>
      <Header />
      <Banner />
      <CreateWebsite />
      <AboutHome />
      <Service />
      <HowWeWork />
      <Faq />
      <div className='my-3 my-lg-5'>
        <Testmonial />
      </div>

      <Footer />


    </>
  )
}

export default Home