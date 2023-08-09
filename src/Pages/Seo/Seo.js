import React from 'react'
import SEObanner from '../../Images/seo-banner.webp'
import SEOImg from '../../Images/SEO-img.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'
import SeoService from './SeoService'
import ContactForm from '../ContactForm/ContactForm'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet'

function Seo() {
    return (
        <>
            <Helmet>
                <title>SEO Specialist | SEO Agency |  Best SEO Company in Chandigarh, India
                </title>
                <meta name="description" content="Enhance your website's visibility and outrank the competition with our comprehensive SEO strategies. We are specializes in optimising websites for search engines." />

                {/* Open Graph (OG) tags */}
                <meta property="og:title" content="SEO Specialist | SEO Agency |  Best SEO Company in Chandigarh, India" />
                <meta property="og:description" content="Enhance your website's visibility and outrank the competition with our comprehensive SEO strategies. We are specializes in optimising websites for search engines." />
                <meta property="og:url" content="https://webtechsolutionsservice.com/seo-service" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SEO Specialist | SEO Agency |  Best SEO Company in Chandigarh, India
" />
                <meta name="twitter:description" content="Enhance your website's visibility and outrank the competition with our comprehensive SEO strategies. We are specializes in optimising websites for search engines.
" />
                <meta name="twitter:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

                {/* Canonical tag */}
                <link rel="canonical" href="https://webtechsolutionsservice.com/seo-service" />
            </Helmet>
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                         <img loading="lazy" className='overflow-hidden px-0 img-fluid'
                            src={SEObanner}
                            alt='SEO Company in Chandigarh' />
                    </div>
                </div>
            </div>
            <div className='container-fluid py-lg-5 py-3'>
                <div className='container-lg'>
                    <div className='row justify-content-center py-lg-5'>
                        <div className='col-lg-6 col-sm-8 col-md-8 align-self-center'>
                             <img loading="lazy" width="100%" height="100%" src={SEOImg} alt='Best SEO Service' className='img-fluid' />
                        </div>
                        <div className='col-lg-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                     <img loading="lazy" width={10} className='img-fluid' src={dm_rectangle} alt='' />
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
                                        <p>Enhance your online visibility and earn high-quality traffic. At WebTech Solutions, we ensure our SEO services are aligned with search engines’ best practices to boost your website’s trustworthiness. Partner with our SEO company and let us help you demonstrate your industry expertise.
                                        </p>
                                    </div>
                                    <div className='graphic-desg-content'>
                                        <h2>Reach Your Audience Faster Than Ever</h2>
                                        <p>Whether you're a local business targeting a specific region or a global brand aiming for widespread recognition, we have the expertise to propel your website to the top. We SEO specialists stays up-to-date with the latest industry trends and algorithm updates. By employing latest SEO techniques, we deliver long-term results that stand the test of time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <SeoService />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Seo