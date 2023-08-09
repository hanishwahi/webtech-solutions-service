import React from 'react'
import Graphicdesigning from '../../Images/graphic-design-banner.webp'
import GraphicdesignImg from '../../Images/graphic-design-img.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'
import GraphicSolution from './GraphicSolution'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet'

function GraphicDesign() {
    return (
        <>
            <Helmet>
                <title>Hire Best Graphic Design Agency  in Chandigarh | Creative Logo Design Solutions
                </title>
                <meta name="description" content="Transform your brand with visually stunning graphic design solutions. Our creative experts specialize in delivering captivating designs that leave a lasting impression" />

                {/* Open Graph (OG) tags" */}
                <meta property="og:title" content="Hire Best Graphic Design Agency  in Chandigarh | Creative Logo Design Solutions" />
                <meta property="og:description" content="Transform your brand with visually stunning graphic design solutions. Our creative experts specialize in delivering captivating designs that leave a lasting impression" />
                <meta property="og:url" content="https://webtechsolutionsservice.com/graphic-design" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

                {/* Twitter Card tags" */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hire Best Graphic Design Agency  in Chandigarh | Creative Logo Design Solutions" />
                <meta name="twitter:description" content="Transform your brand with visually stunning graphic design solutions. Our creative experts specialize in delivering captivating designs that leave a lasting impression" />
                <meta name="twitter:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

                {/* Canonical tag" */}
                <link rel="canonical" href="https://webtechsolutionsservice.com/graphic-design" />
            </Helmet>

            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                         <img loading="lazy" className='overflow-hidden px-0 img-fluid'
                            src={Graphicdesigning}
                            alt='Graphic Designing Agency in Chandigarh' />
                    </div>
                </div>
            </div>
            <div className='container-fluid py-lg-5 py-3'>
                <div className='container-lg'>
                    <div className='row justify-content-center py-lg-5'>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center'>
                             <img loading="lazy" width="100%" height="100%" src={GraphicdesignImg} alt='Graphic Designing Company' className='img-fluid' />
                        </div>
                        <div className='col-lg-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                     <img loading="lazy" width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 graphic-desg-heading align-self-center'>
                                    <h1>Graphic Designing</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11'>
                                    <div className='graphic-desg-content'>
                                        <h2>From Concept to Creation: Unleash the Magic of Graphic Design</h2>
                                        <p>Web Tech Solutions Service's outstanding graphic designers will create whatever you need, whether it's an extraordinary illustration, lovely print designs, or captivating digital marketing assets. We, in contrast to conventional graphic design firms, are a tech-enabled, Creative-as-a-Service design solution created to keep up with the accelerating pace and changing needs of corporate teams. A clear design subscription model lets you access the full range of design capabilities.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-3 col-sm-6 graphic-list'><p>Cost-effective Services</p></div>
                        <div className='col-12 col-md-3 col-sm-6 graphic-list'><p>Experienced Graphic Designers</p></div>
                        <div className='col-12 col-md-3 col-sm-6 graphic-list'><p>High-quality Graphic Design Tools</p></div>
                        <div className='col-12 col-md-3 col-sm-6 graphic-list'><p>Timely Communication</p></div>
                        <div className='col-12 col-md-3 col-sm-6 graphic-list'><p>UI and UX Strategy</p></div>
                        <div className='col-12 col-md-3 col-sm-6 graphic-list'><p>Professional Approach</p></div>
                        <div className='col-12 col-md-3 col-sm-6 graphic-list'><p>Timely Delivery</p></div>
                        <div className='col-12 col-md-3 col-sm-6 graphic-list'><p>All-Time Support</p></div>
                    </div>
                </div>


            </div>
            <GraphicSolution />
            <Footer />

        </>
    )
}

export default GraphicDesign
