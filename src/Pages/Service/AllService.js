import React from 'react'
import ServiceList from './ServiceList'
import ServicesOverview from './ServicesOverview'
import CounterRecord from '../Home/CounterRecord'
import ServiceBox from './ServiceBox'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function AllService() {
    return (
        <>
        <Header/>
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
            <ServiceBox/>
            <CounterRecord />
            <Footer/>
        </>
    )
}

export default AllService