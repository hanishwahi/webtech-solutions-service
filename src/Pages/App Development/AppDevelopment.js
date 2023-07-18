import React from 'react'
import appdevelopment from '../../Images/App-development-banner.webp'
import appdevelopmentimg from '../../Images/app-development-img.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'
import ContactForm from '../ContactForm/ContactForm'
import AndroidIOS from './AndroidIOS'
import AppServices from './AppServices'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet'


function AppDevelopment() {

    return (
        <>
            <Helmet>
                <title>Build Mobile App - Get Best Mobile App Development | Webtech Solutions Service</title>
                <meta name="description" content="Webtech Solutions Service builds mobile apps that take your business to the next level. Generate skyrocketed revenues with our mobile app services. Get Started!" />

                Open Graph (OG) tags
                <meta property="og:title" content="Build Mobile App - Get Best Mobile App Development | Webtech Solutions Service" />
                <meta property="og:description" content="Webtech Solutions Service builds mobile apps that take your business to the next level. Generate skyrocketed revenues with our mobile app services. Get Started!" />
                <meta property="og:url" content="https://webtechsolutionsservice.com/app-development" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

                Twitter Card tags
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Build Mobile App - Get Best Mobile App Development | Webtech Solutions Service" />
                <meta name="twitter:description" content="Webtech Solutions Service builds mobile apps that take your business to the next level. Generate skyrocketed revenues with our mobile app services. Get Started!"/>
                    <meta name="twitter:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

                    Canonical tag
                    <link rel="canonical" href="https://webtechsolutionsservice.com/app-development" />
            </Helmet>
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                        <img width="100%" height="100%" className='overflow-hidden px-0 img-fluid' src={appdevelopment} alt='' />
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container-lg'>
                    <div className='row py-3 py-lg-5 justify-content-center'>
                        <div className='col-lg-6 col-sm-8 col-md-6'>
                            <img width="100%" height="100%" src={appdevelopmentimg} alt='' className='img-fluid' />
                        </div>
                        <div className='col-lg-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                    <img width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 create-website-heading align-self-center'>
                                    <h1>App Development</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11'>
                                    <div className='app-devp-content'>
                                        <h2>Transforming Ideas into Seamless Apps</h2>
                                        <p>Experience the power of our mobile app development service.
                                            Looking for services for developing custom mobile applications? To create your mobile solution, collaborate with the leading mobile app developers in the sector. We work with you to properly promote your company's online presence and win over the mobile-mad public. </p>
                                    </div>
                                    <div className='app-devp-content'>
                                        <h2>Ready to Take the Next Step?</h2>
                                        <p>Collaboration with the right partner is essential.
                                            With the help of Web Tech Solutions Service's custom mobile app development services, Realise your vision. Our team can develop a unique mobile application for your business that meets all of your needs and stands out. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container-fluid'>
                <div className='container-xxl'>
                    <div className='row mb-3'>
                        <div className='col-1 text-end align-self-center'>
                            <img src={dm_rectangle} alt='' />
                        </div>
                        <div className='col-11 create-website-heading align-self-center'>
                            <h1>Mobile Application Development Services We Offer</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-11 app-devp-content'>
                            <p>Whether you're an enterprise client or a unicorn startup, our extensive range of app development services has you covered. <br />Customised iOS & Android apps engineered to perfection. Tailored to your needs from scratch.Your vision, our expertise.</p>
                        </div>

                    </div>
                </div>
            </div>
            <AndroidIOS />
            <AppServices />
            <ContactForm />
            <Footer />
        </>
    )
}

export default AppDevelopment