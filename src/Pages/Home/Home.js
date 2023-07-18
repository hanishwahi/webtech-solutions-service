import React from 'react'
import Banner from './Banner'
import CreateWebsite from './Create-website'
// import GrowBusiness from './GrowBusiness'
import HowWeWork from './HowWeWork'
import Service from './Service'
import Faq from './FAQ'
import AboutHome from './AboutHome'
import Testmonial from '../Clients/Testmonial'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
 

function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <CreateWebsite/> 
    <AboutHome/>
     <Service/>
    <HowWeWork/>
    {/* <GrowBusiness/> */}
    <Faq/>
    <div className='my-3 my-lg-5'>
    <Testmonial />
    </div>
    
    <Footer/>
    
     
    </>
  )
}

export default Home