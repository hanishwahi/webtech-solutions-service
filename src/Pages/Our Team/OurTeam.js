import React from 'react'
import Hanish from '../../Images/hanish-wahi.webp'
import Param from '../../Images/param.jpg'
import Shamse from '../../Images/shamse.jpg'
import Nidhi from '../../Images/nidhi.jpg'
import Kuldeep from '../../Images/kuldeep.jpg'
import Simar from '../../Images/simar.jpg'
import Anuj from '../../Images/anuj.jpg'
import Teambanner from '../../Images/our-team-banner.webp'
import Ankit_Mishra from '../../Images/ankit_mishra.webp'
 import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet'


function OurTeam() {

    return (
        <>
            <Helmet>
                <title>Meet Our Skilled IT Professionals | WebTech Solutions</title>
                <meta name="description" content="Get to know the talented individuals behind WebTech Solutions. Our skilled team of IT professionals is dedicated to delivering top-notch solutions and exceptional customer service. Meet our experts today." />

                {/* - Open Graph (OG) tags  */}
                <meta property="og:title" content="Meet Our Skilled IT Professionals | WebTech Solutions" />
                <meta property="og:description" content="Get to know the talented individuals behind WebTech Solutions. Our skilled team of IT professionals is dedicated to delivering top-notch solutions and exceptional customer service. Meet our experts today." />
                <meta property="og:url" content="https://webtechsolutionsservice.com/our-team" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

                {/* - Twitter Card tags  */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Meet Our Skilled IT Professionals | WebTech Solutions" />
                <meta name="twitter:description" content="Get to know the talented individuals behind WebTech Solutions. Our skilled team of IT professionals is dedicated to delivering top-notch solutions and exceptional customer service. Meet our experts today." />
                <meta name="twitter:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />
                {/* - Canonical tag  */}
                <link rel="canonical" href="https://webtechsolutionsservice.com/our-team" />
            </Helmet>
            <Header />
            <div className='container-fluid'>
                <div className='row our-team-main'>
                    <div className='col px-0'>
                         <img loading="lazy" className='px-0'
                            src={Teambanner}
                            width="100%"
                            alt='Hire + Service Name + Expert or Specialist' />
                    </div>

                </div>
                <div className='container-lg'>
                    <div className='row py-md-5 pt-4 OurTeam-inner-heading '>
                        <p>"We are good at what we do."Love for our work and a resulting passion exhibits itself in the quality of services and products that we offer. Across all services, a similar commitment binds us together. Here are some very young people who script our success story, as they work together with numerous other faujis.
                        </p>
                    </div>


                    <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
                        <div className="col">
                            <div className="card">
                                 <img loading="lazy" src={Ankit_Mishra}
                                    className="card-img-top"
                                    alt="Hollywood Sign on The Hill" />
                                <div className="card-body">
                                    <h5 className="card-title">Ankit Mishra
                                    </h5>
                                    <p className="card-text">
                                        Digital Marketing Manager
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                 <img loading="lazy" src={Simar}
                                    className="card-img-top"
                                    alt="Hollywood Sign on The Hill" />
                                <div className="card-body">
                                    <h5 className="card-title">Simarjit Kaur
                                    </h5>
                                    <p className="card-text">
                                        Sr. HR Executive
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                 <img loading="lazy" src={Kuldeep}
                                    className="card-img-top"
                                    alt="Palm Springs Road" />
                                <div className="card-body">
                                    <h5 className="card-title">Kuldeep Singh</h5>
                                    <p className="card-text">
                                        Sr. Digital Marketing Expert
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                 <img loading="lazy" src={Hanish}
                                    className="card-img-top"
                                    alt="Los Angeles Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">Hanish Wahi</h5>
                                    <p className="card-text">Web Developer</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                 <img loading="lazy" src={Param}
                                    className="card-img-top"
                                    alt="Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">Parampreet kaur</h5>
                                    <p className="card-text">
                                        SMM (Social Media Marketer)
                                    </p>
                                </div>
                            </div>
                        </div>



                        <div className="col">
                            <div className="card">
                                 <img loading="lazy" src={Nidhi}
                                    className="card-img-top"
                                    alt="Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">Nidhi Jaswal</h5>
                                    <p className="card-text">
                                        SMO (Social Media Optimization)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                 <img loading="lazy" src={Anuj}
                                    className="card-img-top"
                                    alt="Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">Anuj Thakur</h5>
                                    <p className="card-text">
                                        Sr. SEO Executive
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                 <img loading="lazy" src={Shamse}
                                    className="card-img-top"
                                    alt="Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">Shamse Alam</h5>
                                    <p className="card-text">
                                        Wordpress Developer
                                    </p>
                                </div>
                            </div>
                        </div>
                       

                    </div>
                </div>

            </div>
            <Footer />


        </>
    )
}

export default OurTeam
