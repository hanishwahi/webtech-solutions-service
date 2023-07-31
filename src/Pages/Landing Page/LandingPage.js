import React from 'react'
 
import Service from '../Home/Service'
import Faq from '../Home/FAQ'
import HowWeWork from '../Home/HowWeWork'
import Testimonial from '../Clients/Testmonial'
import LandingNav from './LandingNav';
import LandingFooter from './LandingFooter';
import LandingContact from './LandingContact';


function LandingPage() {

  


  return (
    <>
      <LandingNav />
      <div className='container-fluid px-0 landing_page'>
        <div className='container align-self-center'>
          <div className='row align-items-center py-4'>
            <div className='col-lg-6 col-md-12 col-sm-12 col-12 landing_page_content'>
              <h1>Webtech <br />Solutions Service</h1>
              <p>At Web Tech Solutions Service, we believe that your website is your digital storefront, and it deserves to make a lasting impression. Our expert team of designers and developers combine creativity, technical expertise, and industry best practices to deliver exceptional websites that captivate audiences and drive results, whether it comes to digital strategy, site design, customised programming, e-commerce, and internet marketing.</p>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
              <LandingContact />
            </div>
          </div>

        </div>
      </div>

      <div className='py-3'><Service /></div>
      <div className='my-5'><HowWeWork /></div>
      <Faq />
      <div className='how-it-works-section mb-5'>
        <Testimonial />
      </div>
      <LandingFooter />



    </>
  )
}

export default LandingPage
