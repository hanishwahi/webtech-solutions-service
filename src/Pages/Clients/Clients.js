import React from 'react'
import client_banner from '../../Images/client-banner.webp'
import client_banner2 from '../../Images/client-banner2 .webp'
import Testmonial from './Testmonial'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ContactForm from '../ContactForm/ContactForm'
import client_img from '../../Images/client-img.webp'



function Clients() {
  return (
    <>
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