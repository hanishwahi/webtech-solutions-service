import React from 'react'
import client_banner from '../../Images/client-banner.webp'
import client_banner2 from '../../Images/client-banner2 .webp'
import Testmonial from './Testmonial'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ContactForm from '../ContactForm/ContactForm'
import client_img from '../../Images/client-img.webp'
import { Helmet } from 'react-helmet'



function Clients() {
  return (
    <>
      <Helmet>
        <title>Trusted by Satisfied Clients | Web Tech Solutions Service</title>
        <meta name="description" content="Discover the success stories of our satisfied clients. At Web Tech Solutions Service, we have a proven track record of delivering exceptional IT solutions. Learn more about our client partnerships and the results we've achieved together." />

        {/* Open Graph (OG) tags  */}
        <meta property="og:title" content="Trusted by Satisfied Clients | Web Tech Solutions Service" />
        <meta property="og:description" content="Discover the success stories of our satisfied clients. At Web Tech Solutions Service, we have a proven track record of delivering exceptional IT solutions. Learn more about our client partnerships and the results we've achieved together." />
        <meta property="og:url" content="https://webtechsolutionsservice.com/clients" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

        {/* Twitter Card tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trusted by Satisfied Clients | Web Tech Solutions Service" />
        <meta name="twitter:description" content="Discover the success stories of our satisfied clients. At Web Tech Solutions Service, we have a proven track record of delivering exceptional IT solutions. Learn more about our client partnerships and the results we've achieved together." />
        <meta name="twitter:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

        {/* Canonical tag  */}
        <link rel="canonical" href="https://webtechsolutionsservice.com/clients" />
      </Helmet>
      <Header />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col px-0'>
            <img className='overflow-hidden px-0 img-fluid'
              src={client_banner}
              alt='' />
          </div>
        </div>
      </div>

      <Testmonial />
      <div className='container-fluid my-3 my-lg-5'>
        <div className='row'>
          <div className='col px-0'>
            <img className='overflow-hidden px-0 img-fluid'
              src={client_banner2}
              alt='' />
          </div>
        </div>
      </div>

      <div className='container-fluid py-lg-5 py-3'>
        <div className='row'>
          <div className='col px-0'>
            <img className='overflow-hidden px-0 img-fluid'
              src={client_img}
              alt='' />
          </div>
        </div>
      </div>



      <ContactForm />
      <Footer />

    </>
  )
}

export default Clients