import React from 'react'
import Graphicdesigning from '../../Images/graphic-design-banner.webp'
import GraphicdesignImg from '../../Images/graphic-design-img.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'
import GraphicSolution from './GraphicSolution'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function GraphicDesign() {
    return (
        <>
<Header/>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                        <img className='overflow-hidden px-0 img-fluid'
                            src={Graphicdesigning}
                            alt='' />
                    </div>
                </div>
            </div>
            <div className='container-fluid py-lg-5 py-3'>
                <div className='container-lg'>
                    <div className='row justify-content-center py-lg-5'>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center'>
                            <img width="100%" height="100%" src={GraphicdesignImg} alt='' className='img-fluid' />
                        </div>
                        <div className='col-lg-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                    <img width={10} className='img-fluid' src={dm_rectangle} alt='' />
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
                                    <div className='graphic-desg-content'>
                                        <h2>What our graphic design services can do for you:</h2>
                                        <p>
                                            Our graphic design services are designed to bring your vision to life and take your brand to new heights. With many years of experience, we’ll help your business convert potential clients into paying customers with well designed, printed collateral.
                                        </p>
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
            <GraphicSolution/>
            <Footer/>

        </>
    )
}

export default GraphicDesign
