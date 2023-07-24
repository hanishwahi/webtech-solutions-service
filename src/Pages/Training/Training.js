import React from 'react'
// import TrainingDevelopment from '../../Images/TrainingDevelopment.webp'
import TrainingDevelopment from '../../Images/trainingDevelopment2.webp'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import trainingImg from '../../Images/training-img.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'
import { Link } from 'react-router-dom'
import TrainingCourses from './TrainingCourses'
import ContactForm from '../ContactForm/ContactForm'

function Training() {
    return (
        <>
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                        <img className='overflow-hidden px-0 img-fluid'
                            src={TrainingDevelopment}
                            alt='SEO Company in Chandigarh' />
                    </div>
                </div>
            </div>
            <div className='container-fluid py-lg-5 py-3'>
                <div className='container-lg'>
                    <div className='row justify-content-center py-lg-5'>
                        <div className='col-lg-6 col-sm-8 col-md-8 align-self-center'>
                            <img width="100%" height="100%" src={trainingImg} alt='Best SEO Service' className='img-fluid' />
                        </div>
                        <div className='col-lg-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                    <img width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 graphic-desg-heading align-self-center'>
                                    <h1>Training & Development</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11'>
                                    <div className='graphic-desg-content'>
                                        <h2>Online & Offline Digital Marketing Training Courses in Chandigarh/Mohali</h2>
                                        <p>WebTech Solutions is a perfect place for the greatest and highest-quality Digital Marketing Training in Chandigarh/Mohali. If this describes your needs, read on. Our highly-rated experienced instructors provide live training on real time projects.

                                            You can land a top position in an MNC, build a successful career, become a freelancer or promote your own business if you take advantage of WebTech Solutions comprehensive learning opportunities at the best digital marketing training institute in Chandigarh/Mohali.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <div className='container-fluid how-it-works-section'>
                <div className='container-lg'>
                    <div className='row py-5'>
                        <div className='col-lg-10 training-heading'>
                            <h1>Master your skills with our Best Digital Marketing Course in Chandigarh/Mohali</h1>
                        </div>
                        <div className='col-lg-2 blogs-button'>
                            <Link to='tel:+91 8427682603'>Call Now</Link>
                        </div>
                    </div>
                </div>

            </div>
            <TrainingCourses/>
            <ContactForm/>
            <Footer />
        </>
    )
}

export default Training