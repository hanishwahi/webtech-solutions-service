import React from 'react'
import SEO from '../../Images/SEO1.png'
import PPC from '../../Images/PPC1.png'
import WEBDEVELOPMENT from '../../Images/WEBDEVELOPMENT.png'
import Graphicdesign from '../../Images/ORM.png'
import AppDevelopment from '../../Images/AppDevelopment.png'
import Content_Marketing from '../../Images/Content_Marketing.png'
import { Link } from 'react-router-dom'
  

function Service() {
    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
            
    };



    return (
        <>
            <div className='container-fluid '>
                <div className="tools-section wf-section grow-business-bg">
                    <div className="services-header">
                        <h3 className="service-tools-heading">Our Services</h3>
                        <p className="service-home-text">Webtech Solutions Service is India’s top digital marketing and SEO services company. From conceptualization to final-stage execution, we implement the entire digital marketing strategy. Though we adopt a 360° approach to digital marketing, our expertise lies in SEO services – from Enterprise SEO to local SEO, from App SEO to Video SEO and everything in between. With 15 years as leaders in SEO in India, we are on a mission to deliver transformational growth to 250 customers in 2025. If you’re serious about your digital performance, you've found the right partner. We’ll help you meet your marketing objectives and help your business achieve the growth you've always wanted.</p>
                    </div>
                    <div className="features-tools-grid">
                        <div className="features-tools-grid-contain row">
                            <div className="features-tools-grid-cell col-lg-4 col-md-4 col-sm-6 border-right border-bottom1 pb-3">
                                <Link className="text-decoration-none" to='/seo-service' onClick={scrollToHome}>
                                    <div className='mb-3'>
                                        <img
                                            width={80}
                                            height='100%'
                                            src={SEO}
                                            loading="lazy" alt="" className="tools-grid-image   mb-0 box" />
                                    </div>
                                    <h5 className="tools-grid-heading">Search Engine Optimization</h5>
                                    <div className="service-grid-text1">
                                        <p>From SEO audit to seo strategy to on-page seo to link building, as a top seo agency, webtech offers the best search engine optimization (seo) services if you want to get to the top of google search results and stay there.</p>
                                        </div>
                                </Link>
                            </div>
                            <div className="features-tools-grid-cell col-lg-4 col-md-4 col-sm-6 border-right border-bottom1 pb-3">
                                <Link className="text-decoration-none" to='/ppc-service' onClick={scrollToHome}>
                                    <div className='mb-3'>
                                        <img
                                            width={80}
                                            height='100%'
                                            src={PPC}
                                            loading="lazy" alt="" className="tools-grid-image   mb-0 box" />
                                    </div>
                                    <h5 className="tools-grid-heading">Pay Per Click</h5>
                                    <div className="service-grid-text1"><p>
                                    As one of only 60 google premier partners in india, we are amongst the best of the best when it comes to generating leads and driving sales via ppc services.    </p></div>
                                </Link>
                            </div>
                            <div className="features-tools-grid-cell col-lg-4 col-md-4 col-sm-6 pb-3 border-bottom1">
                                <Link className="text-decoration-none" to='/content-marketing' onClick={scrollToHome}   >
                                    <div className='mb-3'>
                                        <img
                                            width={80}
                                            height='100%'
                                            src={Content_Marketing}
                                            loading="lazy" alt="" className="tools-grid-image   mb-0 box box" />
                                    </div>
                                    <h5 className="tools-grid-heading">Content Marketing</h5>
                                    <div className="service-grid-text1"><p>
                                    Our award winning content marketing services can help your brand establish trust, authority and thought leadership while engaging with your target audience. also boost performance of your seo campaigns. engage visitors.</p></div>
                                </Link>
                            </div>
                            <div className="features-tools-grid-cell col-lg-4 col-md-4 col-sm-6 border-right pb-3">
                                <Link className='text-decoration-none' to='/graphic-design'  onClick={scrollToHome}>
                                    <div className='mb-3'>
                                        <img
                                            width={80}
                                            height='100%'
                                            src={Graphicdesign}
                                            loading="lazy" alt="" className="tools-grid-image   mb-0 box" />
                                    </div>
                                    <h5 className="tools-grid-heading">Graphic Design</h5>
                                    <div className="service-grid-text1"><p>
                                    We combine our expertise in design, hosting, search engine marketing, analytics and conversion optimization to offer ecommerce solutions that ensure your sales keep growing month on month.</p></div>
                                </Link>
                            </div>

                            <div className="features-tools-grid-cell col-lg-4 col-md-4 col-sm-6 pb-3 border-right">
                                <Link className='text-decoration-none' to='/web-development'  onClick={scrollToHome}>
                                    <div className='mb-3'>
                                        <img
                                            width={80}
                                            height='100%'
                                            src={WEBDEVELOPMENT}
                                            loading="lazy" alt="" className="tools-grid-image   mb-0 box" />
                                    </div>
                                    <h5 className="tools-grid-heading">Web Development</h5>
                                    <div className="service-grid-text1"><p>
                                    First impressions are very important & we can get that deal sealed for you right away. as your website design company, we work in a consultative manner, serving as your advisors, designers and developers</p></div>
                                </Link>
                            </div>
                       
                            <div className="features-tools-grid-cell col-lg-4 col-md-4 col-sm-6 pb-3">
                                <Link className='text-decoration-none' to='/app-development'  onClick={scrollToHome}>
                                    <div className='mb-3'>
                                        <img
                                            width={80}
                                            height='100%'
                                            src={AppDevelopment}
                                            loading="lazy" alt="" className="tools-grid-image   mb-0 box" />
                                    </div>
                                    <h5 className="tools-grid-heading">App Development</h5>
                                    <div className="service-grid-text1"><p>
                                    Get your app ranked at the top for your target keywords on the play store and apple store. enhance app visibility and multiply download numbers.</p></div>
                                </Link>
                            </div>
                            

                        </div>
                        <div className='d-flex justify-content-center'>
                            <Link onClick={scrollToHome} className='btn ViewAllServices' to='/services'>View All Services</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Service