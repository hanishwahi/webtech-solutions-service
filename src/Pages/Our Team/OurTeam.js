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
import deepak_sharma from '../../Images/deepak-sharma.webp'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function OurTeam() {

    return (
        <>
            <Header />
            <div className='container-fluid'>
                <div className='row our-team-main'>
                    <div className='col px-0'>
                        <img className='img-fluid px-0'
                            src={Teambanner}
                            alt='' />
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
                                <img src={Ankit_Mishra}
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
                                <img src={Simar}
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
                                <img src={Kuldeep}
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
                                <img src={Hanish}
                                    className="card-img-top"
                                    alt="Los Angeles Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">Hanish Wahi</h5>
                                    <p className="card-text">React Developer</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <img src={Param}
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
                                <img src={Nidhi}
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
                                <img src={Anuj}
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
                                <img src={Shamse}
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

                        
                        <div className="col">
                            <div className="card">
                                <img src={deepak_sharma}
                                    className="card-img-top"
                                    alt="Skyscrapers" />
                                <div className="card-body">
                                    <h5 className="card-title">Deepak Sharma</h5>
                                    <p className="card-text">
                                    Multimedia Designer
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
