import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import content_marketing_banner from '../../Images/content-marketing-banner.webp'
import CONTENT_FIRST_DIGITAL from '../../Images/Account_Management.png'
import INBOUNDDIGITALCAMPAIGNS from '../../Images/INBOUNDDIGITALCAMPAIGNS.png'
import anSeocontent from '../../Images/AN-SEO-CONTENT.png'
import partner_industry from '../../Images/PARTNER-Inductry.png'
import ContentWorld from './ContentWorld'
import ContactForm from '../ContactForm/ContactForm'


function ContentMarketing() {
    return (
        <>
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                         <img loading="lazy" className='overflow-hidden px-0 img-fluid'
                            src={content_marketing_banner}
                            alt='' />
                    </div>
                </div>
            </div>
            <div className='container-fluid py-4 py-lg-5'>
                <div className='container-lg'>
                    <div className='row text-center content-marketing-text'>
                        <h1>Who we are ?</h1>
                        <h3>Not just a content writing agency. We build content marketing engines for growth</h3>
                        <p>web tech solution services 5-year-old content marketing-led digital marketing agency that drives relevant leads and growth for B2B and B2C businesses.</p>
                    </div>
                </div>
            </div>
            <div className='container-fluid how-it-works-section py-5'>
                <div className='container-lg'>
                    <div className='row content-marketing-text text-center'>
                        <h1>We are prefect if you are looking for !</h1>
                    </div>
                    <div className='row py-4'>
                        <div className='col-lg-3 col-sm-6 mb-3 '>
                            <div className='shadow bg-white p-4 text-center content-marketing-box'>
                                 <img loading="lazy" className='mb-3' width={120} src={CONTENT_FIRST_DIGITAL} alt='' />
                                <h2>CONTENT-FIRST DIGITAL MARKETING</h2>
                                <p>We build digital growth engines powered by content marketing and SEO – a process we mastered through 5 years.</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 mb-3 '>
                            <div className='shadow bg-white p-4 text-center content-marketing-box'>
                                 <img loading="lazy" className='mb-3' width={120} src={INBOUNDDIGITALCAMPAIGNS} alt='' />
                                <h2>INBOUND DIGITAL CAMPAIGNS</h2>
                                <p>We design wildly successful digital campaigns that lead to online brand visibility, connected audiences, organic traffic and ROI.</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 mb-3 '>
                            <div className='shadow bg-white p-4 text-center content-marketing-box'>
                                 <img loading="lazy" className='mb-3' width={120} src={anSeocontent} alt='' />
                                <h2>AN SEO + CONTENT WRITING AGENCY</h2>
                                <p>Content and SEO works hand-in-hand. We know that and that is why our team specialises in content and SEO – the core of content marketing.</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 mb-3 '>
                            <div className='shadow bg-white p-4 text-center content-marketing-box'>
                                 <img loading="lazy" className='mb-3' width={120} src={partner_industry} alt='' />
                                <h2>A PARTNER WHO HAS INDUSTRY EXPERIENCE</h2>
                                <p>We have worked 11 years with B2B & B2C brands, SMEs, medium & large enterprises, global & desi brands, and almost every vertical.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <ContentWorld/>
            <ContactForm/>
            <Footer />
        </>
    )
}

export default ContentMarketing