import React from 'react'
import SEO from '../../Images/SEO1.png'
import PPC from '../../Images/PPC1.png'
import WEBDEVELOPMENT from '../../Images/WEBDEVELOPMENT.png'
import ORM from '../../Images/ORM.png'
import AppDevelopment from '../../Images/AppDevelopment.png'
import Content_Marketing from '../../Images/Content_Marketing.png'
import { Link } from 'react-router-dom'
function ServiceBox() {
    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    };

    return (
        <>
            <div className='container-fluid '>
                <div className="tools-section wf-section grow-business-bg">

                    <div className="features-tools-grid">
                        <div className="features-tools-grid-contain row">
                            <div className="features-tools-grid-cell col-lg-4 col-md-4 col-sm-6 border-right border-bottom1 pb-3 ">
                                <div>
                                    <div className='mb-3 '>
                                        <img
                                            width={80}
                                            src={SEO}
                                            loading="lazy" alt="seo-service" className="tools-grid-image   mb-0 box" />
                                    </div>
                                    <h5 className="tools-grid-heading">Search Engine Optimization</h5>
                                    <div className="service-grid-text"><p>
                                        From SEO audit to seo strategy to on-page seo to Link building, as a top seo agency, webtech offers the best search engine optimization (seo) services if you want to get to the top of google search results and stay there.</p></div>

                                </div>
                                <div className='readMore'>
                                    <Link className='btn' to="/seo-service" onClick={scrollToHome}>Read More</Link>
                                </div>
                            </div>
                            <div className="features-tools-grid-cell col-lg-4 col-md-4 col-sm-6 border-right border-bottom1 pb-3">
                                <div>
                                    <div className='mb-3'>
                                        <img
                                            width={80}
                                            src={PPC}
                                            loading="lazy" alt="ppc-service" className="tools-grid-image   mb-0 box" />
                                    </div>
                                    <h5 className="tools-grid-heading">Pay Per Click</h5>
                                    <div className="service-grid-text">
                                        <p>
                                            As one of only 60 google premier partners in india, we are amongst the best of the best when it comes to generating leads and driving sales via ppc services.</p></div>

                                </div>
                                <div className='readMore'>
                                    <Link className='btn'to='/ppc-service' onClick={scrollToHome}>Read More</Link>
                                </div>
                            </div>
                            <div className="features-tools-grid-cell col-lg-4 col-md-4 col-sm-6 border-bottom1 pb-3">
                                <div>
                                    <div className='mb-3'>
                                        <img
                                            width={80}
                                            src={WEBDEVELOPMENT}
                                            loading="lazy" alt="smo-service" className="tools-grid-image   mb-0 box" />
                                    </div>
                                    <h5 className="tools-grid-heading">SMO</h5>
                                    <div className="service-grid-text"><p>
                                        First impressions are very important & we can get that deal sealed for you right away. as your website design company, we work in a consultative manner, serving as your advisors, designers and developers.</p></div>

                                </div>
                                <div className='readMore'>
                                    <Link className='btn' to='/smo-service' onClick={scrollToHome}>Read More</Link>
                                </div>
                            </div>
                            <div className="features-tools-grid-cell col-lg-4 col-md-4 col-sm-6 border-right pb-3">
                                <div>
                                    <div className='mb-3'>
                                        <img
                                            width={80}
                                            src={ORM}
                                            loading="lazy" alt="orm-service" className="tools-grid-image   mb-0 box" />
                                    </div>
                                    <h5 className="tools-grid-heading">Online Reputation Management (ORM)</h5>
                                    <div className="service-grid-text"><p>
                                        Get full control and authority of getting what the online results will be through our online reputation management services and reap the maximum benefits.</p></div>
                                </div>
                                <div className='readMore'>
                                    <Link className='btn' to="/orm-service" onClick={scrollToHome}>Read More</Link>
                                </div>
                            </div>
                            <div className="features-tools-grid-cell col-lg-4 col-md-4 col-sm-6 border-right pb-3">
                                <div>
                                    <div className='mb-3'>
                                        <img
                                            width={80}
                                            src={AppDevelopment}
                                            loading="lazy" alt="smm-service" className="tools-grid-image   mb-0 box" />
                                    </div>
                                    <h5 className="tools-grid-heading">SMM</h5>
                                    <div className="service-grid-text"><p>
                                        Engage your targeted audience more creatively and spread your brand awareness by opting for our effective social media marketing services.</p></div>
                                </div>
                                <div className='readMore'>
                                    <Link className='btn' to="/smm-service" onClick={scrollToHome}>Read More</Link>
                                </div>
                            </div>
                            <div className="features-tools-grid-cell col-lg-4 col-md-4 col-sm-6 pb-3">
                                <div>
                                    <div className='mb-3'>
                                        <img
                                            width={80}
                                            src={Content_Marketing}
                                            loading="lazy" alt="content-marketing" className="tools-grid-image   mb-0 box box" />
                                    </div>
                                    <h5 className="tools-grid-heading">Content Marketing</h5>
                                    <div className="service-grid-text"><p>
                                        Our award winning content marketing services can help your brand establish trust, authority and thought leadership while engaging with your target audience. also boost performance of your seo campaigns. engage visitors.</p></div>
                                </div>
                                <div className='readMore'>
                                    <Link className='btn' to='/content-marketing' onClick={scrollToHome}>Read More</Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceBox