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
          <title>About</title>
          <meta name="description" content="Your page description" />
          <meta name="keywords" content="keyword1, keyword2, keyword3" />
          <link rel="canonical" href="https://www.example.com/your-page" />
          {/* Add more meta tags as needed */}
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