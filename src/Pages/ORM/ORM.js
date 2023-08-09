import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ormbanner from '../../Images/orm-banner.webp'
import ormImg from '../../Images/orm-img.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'
import ORMExpert from './ORMExpert'
import ContactForm from '../ContactForm/ContactForm'

function ORM() {
    return (
        <>
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                         <img loading="lazy" className='overflow-hidden px-0 img-fluid'
                            src={ormbanner}
                            alt='' />
                    </div>
                </div>
            </div>
            <div className='container-fluid py-lg-5 py-3'>
                <div className='container-lg'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-lg-6 col-sm-8 col-md-6 align-self-center'>
                             <img loading="lazy" width="100%" height="100%" src={ormImg} alt='' className='img-fluid' />
                        </div>
                        <div className='col-lg-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end'>
                                     <img loading="lazy" width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 orm-content'>
                                    <h1>Measuring Monitoring, And
                                        Managing The Online Health
                                        of Your Brand</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11'>
                                    <div className='orm-content'>
                                        <p>Gathering online buzz and reviews about your brand from all major review sites<br /><br />

                                            Getting your customer testimonials and uploading them on social media platforms<br /><br />

                                            Countering negative posts and comments to protect your online reputation<br /><br />

                                            Regular monitoring and management to ensure that your brand reputation stays healthy<br /><br />
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <div className='container-fluid py-lg-5 py-3'>
                <div className='container-lg'>
                    <div className='row orm-content '>
                        <h1 className='text-center mb-4'>We Bring Reliable ORM Services At Your Doorstep</h1>
                        <p className='text-center'>Business reputation management is an integral part of the corporate strategy as it builds and maintainsthe trust that the customers have in the business. With the internet being the marketing mainstay in the present time, online reputation is as important as the actual one. Negative reviews, illegal content on hate sites, negative media coverage, and false information are just a few of reputation-related  challenges that businesses come across. It is, thus, essential for them to protect their online image from being tarnished by negative comments and reviews on the internet.</p>
                    </div>
                    <div className='row pt-5'>
                        <div className='col-lg-4 col-md-4 col-sm-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 col-md-2 col-sm-2 text-end'>
                                     <img loading="lazy" width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 col-md-10 col-sm-10 orm-content'>
                                    <h3>Influencing SERP results to deal with negative posts</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 col-md-2 col-sm-2 text-end'>
                                     <img loading="lazy" width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 col-md-10 col-sm-10 orm-content'>
                                    <h3>Promoting the brand image for a positive impact</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 col-md-2 col-sm-2 text-end'>
                                     <img loading="lazy" width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 col-md-10 col-sm-10 orm-content'>
                                    <h3>Enhancing interactions with the customers</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 col-md-2 col-sm-2 text-end'>
                                     <img loading="lazy" width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 col-md-10 col-sm-10 orm-content'>
                                    <h3>Monitoring the online reputation consistently</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <ORMExpert/>
            <ContactForm/>
            <Footer />
        </>
    )
}

export default ORM