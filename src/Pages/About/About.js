import React from 'react'
import Banner from './Banner'
import OurMission from './OurMission'
import CounterRecord from '../Home/CounterRecord'
import Unique from './Unique'
import WhyUs from './WhyUs' 
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function About() {
  return (
    <>
         <Header/>
            <Banner/>
            <OurMission/>
            <CounterRecord/>
            <Unique/>
            <WhyUs/>
            <Footer/>
    </>
  )
}

export default About