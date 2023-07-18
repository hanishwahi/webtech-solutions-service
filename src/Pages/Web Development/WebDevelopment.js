import React from 'react'
import Webdevelopment from '../../Images/web-development.webp'
import web_devp_img from '../../Images/web-devp-img.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'
import WhyChooseDevp from './WhyChooseDevp'
import WebDesigning from './WebDesigning'
import ContactForm from '../ContactForm/ContactForm'
import BusinessGrowth from './BusinessGrowth'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function WebDevelopment() {

    return (
        <>
         <Header/>
             <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                        <img width="100%" height="100%" className='overflow-hidden px-0 img-fluid' src={Webdevelopment} alt='' />
                    </div>
                </div>               
            </div>
            <div className='container-fluid'>
                <div className='container-lg'>
                    <div className='row justify-content-center py-3 py-lg-5'>
                        <div className='col-lg-6 col-sm-8 col-md-6  align-self-center mb-3'>
                            <img width="100%" height="100%" src={web_devp_img} alt='' className='img-fluid' />
                        </div>
                        <div className='col-lg-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                    <img width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 create-website-heading align-self-center'>
                                    <h1>Web Development</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11'>
                                    <div className='web-devp-content'>
                                        <h2>Achieve your business goals with web development solutions</h2>
                                        <p> Unleash the power of your online presence with our cutting-edge web development solutions. From stunning designs to seamless functionality, we create websites that captivate your audience and drive success. Elevate your digital game with our expert team. with a great user Interface with the best design for your own website. We help you establish your business, brand and other things online.</p>
                                    </div>
                                    <div className='web-devp-content'>
                                        <h2>Web Development Solution We Provide:</h2>
                                         <ul className='web-devp-list'>
                                            <li>Informational Websites</li>
                                            <li>Custom Web Development</li>
                                            <li>E-Commerce Solutions</li>
                                            <li>Intranet and Extranet Portals</li>
                                            <li>Web-based Enterprise Solutions</li>
                                            <li>Cloud-based / SAAS Development</li>
                                         </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <WhyChooseDevp/>
            <WebDesigning/>
            <BusinessGrowth/>
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default WebDevelopment