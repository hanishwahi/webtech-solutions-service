import React from 'react'
import SEObanner from '../../Images/seo-banner.webp'
import GraphicdesignImg from '../../Images/graphic-design-img.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'
import SeoService from './SeoService'
import ContactForm from '../ContactForm/ContactForm'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Seo() {
    return (
        <>
        <Header/>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                        <img className='overflow-hidden px-0 img-fluid'
                            src={SEObanner}
                            alt='' />
                    </div>
                </div>
            </div>
            <div className='container-fluid py-lg-5 py-3'>
                <div className='container-lg'>
                    <div className='row justify-content-center py-lg-5'>
                        <div className='col-lg-6 col-sm-8 col-md-8 align-self-center'>
                            <img width="100%" height="100%" src={GraphicdesignImg} alt='' className='img-fluid' />
                        </div>
                        <div className='col-lg-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                    <img width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 graphic-desg-heading align-self-center'>
                                    <h1>SEO</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11'>
                                    <div className='graphic-desg-content'>
                                        <h2>Boost Your Website's Visibility and Dominate Search Results.</h2>
                                        <p>Enhance your online visibility and earn high-quality traffic. At Web Tech Solutions Service, we ensure our SEO services are aligned with search engines’ best practices to boost your website’s trustworthiness.
                                            Partner with our SEO company and let us help you demonstrate your industry expertise.
                                        </p>
                                    </div>
                                    <div className='graphic-desg-content'>
                                        <h2>Reach Your Audience Faster Than Ever</h2>
                                        <p>Whether you're a local business targeting a specific region or a global brand aiming for widespread recognition, we have the expertise to propel your website to the top.
                                            Our team of SEO specialists stays up-to-date with the latest industry trends and algorithm updates, ensuring that your website remains ahead of the curve. By employing latest SEO techniques, we deliver long-term results that stand the test of time.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <SeoService />
            <ContactForm />
            <Footer/>
        </>
    )
}

export default Seo