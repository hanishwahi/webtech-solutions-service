import React from 'react'
import SMMbanner from '../../Images/smm-banner.webp'
import smmImg from '../../Images/smm-img.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'
 import ContactForm from '../ContactForm/ContactForm'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PopularWebsite from './PopularWebsite'

function SMM() {
    return (
        <>
        <Header/>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                         <img loading="lazy" className='overflow-hidden px-0'
                            src={SMMbanner}
                            width="100%"
                            alt='' />
                    </div>
                </div>
            </div>
            <div className='container-fluid py-lg-5 py-3'>
                <div className='container-lg'>
                    <div className='row justify-content-center py-lg-5'>
                        <div className='col-lg-6 col-sm-8 col-md-8 align-self-center'>
                             <img loading="lazy" width="100%" height="100%" src={smmImg} alt='' className='img-fluid transform' />
                        </div>
                        <div className='col-lg-6 align-self-center'>
                            <div className='row mb-2'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                     <img loading="lazy" width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 smm-heading align-self-center'>
                                    <h1>Social Media Strategy Development</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11'>
                                    <div className='smm-content'>
                                        
                                        <p> Every marketing campaign needs a strategy. Web Tech Solutions Services will devise an effective plan that covers all facets of social media marketing, irrespective of platform. From researching audiences and competitors to creating content based on the platform to community engagement, our social media experts don’t leave anything out.
                                        </p>
                                    </div>
                                    <div className='smm-content'>
                                        <h2>Content Creation:</h2>
                                        <p> Content creation is complicated, as there are lots of nuances involved. We offer assistance not just in planning a strategy but also in creating content. Whether it’s writing informative blogs, developing attractive graphics, recording well-planned video stories, or drafting testimonials, our experts create engaging content that reaches your target audience and gains the best results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
             <PopularWebsite/>
            <ContactForm />
            <Footer/>
        </>
    )
}

export default SMM