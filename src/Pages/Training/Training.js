import React from 'react'
 import TrainingDevelopment from '../../Images/training-banner-main.webp'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import trainingImg from '../../Images/training-img.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'
import TrainingCourses from './TrainingCourses'
 import Students from '../../Images/training-icon1.png'
import WorkingProfessionals from '../../Images/training-icon2.png'
import jobseeker from '../../Images/training-icon3.png'
import Entrepreneurs from '../../Images/training-icon4.png'
import TrainingForm from './TrainingForm'

function Training() {
    return (
        <>
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                        <img className='overflow-hidden px-0 img-fluid'
                            src={TrainingDevelopment}
                            alt='Training Company in Chandigarh' />
                    </div>
                </div>
            </div>
            <div className='container-fluid py-lg-5 py-3'>
                <div className='container-lg'>
                    <div className='row justify-content-center py-lg-5'>
                        <div className='col-lg-6 col-sm-8 col-md-8 align-self-center'>
                            <TrainingForm/>
                            {/* <img width="100%" height="100%" src={trainingImg} alt='Best Training Service' className='img-fluid' /> */}
                        </div>
                        <div className='col-lg-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                    <img width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 graphic-desg-heading align-self-center'>
                                    <h1>Digital Marketing Training & Development</h1>
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
            <div className='container-fluid'>
                <div className='container-lg'>
                    <div className='row training-heading text-center '>
                        <h1 className='p-3'>Who Can Join Our Digital Marketing Course Program</h1>
                        <p>Everyone who has an interest in Digital learning and desires to upgrade technical skills may enroll for the online and office batches of Digital marketing at their convenience.</p>
                    </div>
                    <div className='row py-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 training-program text-center'>
                            <div>
                                <img width={140} src={Students} alt='' className='img-fluid'/>
                                <h3>Students</h3>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 training-program text-center'>
                            <div>
                                <img width={140} src={WorkingProfessionals} alt='' className='img-fluid'/>
                                <h3>Working Professionals</h3>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 training-program text-center'>
                            <div>
                                <img width={140} src={jobseeker} alt='' className='img-fluid'/>
                                <h3>Jobseeker</h3>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 training-program text-center'>
                            <div>
                                <img width={140} src={Entrepreneurs} alt='' className='img-fluid'/>
                                <h3>Entrepreneurs</h3>
                            </div>
                        </div>
                    </div>

                    <div className='row training-lists py-3'>
                        <div className='col'>
                            <ol>
                                <li><strong>100% Satisfactory Classes:</strong> One-to-One sessions help you to clear your doubts and results in the successful implementation of tools & techniques covered under live classes.</li>
                                <li><strong>Money Back Guarantee:</strong> After 1 live class, If the course seems not valuable for you, You may ask for a complete refund. Offer Valid from 2nd live class only.</li>
                                <li><strong>Smooth Job Process:</strong> Get your resume Ready before completion of the course, Join In-house mock Sessions, Appear for Interviews & Get an Offer letter.</li>

                            </ol>
                        </div>

                    </div>

                </div>

            </div>
            <TrainingCourses />
             <Footer />
        </>
    )
}

export default Training