import React, { useState } from 'react'
import TrainingDevelopment from '../../Images/training-banner-main.webp'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import dm_rectangle from '../../Images/dm-rectangle 13.png'
import TrainingCourses from './TrainingCourses'
import Students from '../../Images/training-icon1.png'
import WorkingProfessionals from '../../Images/training-icon2.png'
import jobseeker from '../../Images/training-icon3.png'
import Entrepreneurs from '../../Images/training-icon4.png'
import TrainingForm from './TrainingForm'
import pdf from '../../Images/DIGITALMARKETINGCOURSE.pdf'
import emailjs from 'emailjs-com';
import { useRef } from 'react';
 
function Training() {
    const [pdfForm, setPdfForm] = useState(false)
    const [pdfDownload, setPdfDownload] = useState(false)

    const downloadPdf = () => {
        setPdfForm(true)
    }
    const hidePDFDownload = () => {
        setPdfDownload(false)
    }


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_hmnkl0m', 'template_x63rd3m', e.target, 'DaUmEfgqFFS3JD4_d')
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }

            );
        setPdfForm(false)
        setPdfDownload(true)
        e.target.reset();
    };



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
                    <div className='row justify-content-center'>
                        <div className='col-lg-6 col-sm-8 col-md-8 align-self-center py-3'>
                            <TrainingForm />
                        </div>
                        <div className='col-lg-6 py-3'>
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
            <div className='container-fluid py-4'>
                <div className='container-lg'>
                    <div className='row training-heading text-center '>
                        <h1 className='p-3'>Who Can Join Our Digital Marketing Course Program</h1>
                        <p>Everyone who has an interest in Digital learning and desires to upgrade technical skills may enroll for the online and office batches of Digital marketing at their convenience.</p>
                    </div>

                    <div className='row py-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 training-program text-center'>
                            <div>
                                <img width={140} src={Students} alt='' className='img-fluid' download />
                                <h3>Students</h3>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 training-program text-center'>
                            <div>
                                <img width={140} src={WorkingProfessionals} alt='' className='img-fluid' />
                                <h3>Working Professionals</h3>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 training-program text-center'>
                            <div>
                                <img width={140} src={jobseeker} alt='' className='img-fluid' />
                                <h3>Jobseeker</h3>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 training-program text-center'>
                            <div>
                                <img width={140} src={Entrepreneurs} alt='' className='img-fluid' />
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
                    <div className='row py-3'>
                        <div className='col'>
                            <div className='text-center'> <button onClick={downloadPdf} className='training-button'>Download Brochure</button></div>
                            {
                                pdfForm &&
                                <div className='row py-3'>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className='row justify-content-between'>
                                            <div className="form-outline col-12 col-sm-6 mb-4">
                                                <label className="form-label fw-bold" htmlFor="form4Example1">*Name</label>
                                                <input type="text" name="name" id="form4Example1" required className="form-control" placeholder='Full Name' />
                                            </div>

                                            <div className="form-outline col-12 col-sm-6 mb-4">
                                                <label className="form-label fw-bold" htmlFor="form4Example2">*Phone</label>
                                                <input type="number" name="phone" id="form4Example2" required className="form-control" placeholder='Enter your Phone number' />
                                            </div>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label fw-bold" htmlFor="form4Example2">*Email address</label>
                                            <input type="email" name="email" id="form4Example2" required className="form-control" placeholder='Enter your Email ID' />
                                        </div>


                                        <input className='form-Button' type="submit" value="Submit" />
                                        
                                    </form>
                                </div>
                            }

                            {pdfDownload && <div className='downloadPDF'> <a onClick={hidePDFDownload} href={pdf} download >
                                Download File
                            </a> </div>

                            }
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