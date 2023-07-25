import React from 'react'
import { Link } from 'react-router-dom'

function TrainingCourses() {
    return (
        <>

            <div className='container-fluid training-bg py-5'>
                <div className='container-lg py-lg-5'>
                    <div className='row training-callnow text-center py-3'>
                        <h1 className='py-3'>Flexi Training Sessions Available!!</h1>
                        <p>Batch starts from 10th August 2023 (Monday to Friday)</p>
                    </div>
                    <div className='row py-3 training-callnow text-center'>
                        <h1>Master your skills with our Best Digital Marketing Course in Chandigarh/Mohali</h1>
                    </div>
                    <div className='row text-center py-2'>
                        <div className='col blogs-button'>
                            <Link to='tel:+91 8427682603'>Enroll Now</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container-fluid my-5'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-4 col-sm-6 col-md-4 mb-3'>
                            <div className='training-box'>
                            <i class="fa-solid fa-user"></i>
                                <h2>Expert Trainer</h2>
                                <p>Our expert trainers are experienced professionals who are passionate about teaching and will provide you with in-depth knowledge of digital marketing.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 col-md-4 mb-3'>
                            <div className='training-box'>
                            <i class="fa-solid fa-headphones"></i>
                                <h2>Doubt- Clearing Sessions</h2>
                                <p>Doubt-clearing sessions ensure that you have a thorough understanding of the material and can confidently apply it in real-world situations.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 col-md-4 mb-3'>
                            <div className='training-box'>
                            <i class="fa-solid fa-video"></i>
                                <h2>Interactive Live Classes</h2>
                                <p>Our interactive live classes provide a collaborative learning experience, allowing you to engage with the material and your classmates in real-time.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 col-md-4 mb-3'>
                            <div className='training-box'>
                                <i class="fa-solid fa-laptop"></i>
                                <h2>Completely Practical</h2>
                                <p>Our courses are completely practical, giving you hands-on experience with digital marketing tools and techniques to prepare you for real-world scenarios.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 col-md-4 mb-3'>
                            <div className='training-box'>
                            <i class="fa-solid fa-graduation-cap"></i>
                                <h2>100% Job Assistance</h2>
                                <p>We provide 100% job assistance to
                                    help you find the right job or
                                    advance in your current
                                    career</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 col-md-4 mb-3'>
                            <div className='training-box'>
                            <i class="fa-solid fa-certificate"></i>
                                <h2>Digital Marketing Certificate</h2>
                                <p>You will receive a digital marketing certificate upon completion of our course, which will validate your skills and make you stand out in the job market.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrainingCourses