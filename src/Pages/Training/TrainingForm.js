import React from 'react'
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TrainingForm() {
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

        e.target.reset();
        toast.success('Message sent Successfully!');
    };
    return (
        <>
            <div>
                <div className='row graphic-desg-heading pb-lg-4 pb-2 border-new'>
                    <h1 className='px-0'>Book Your Seat</h1>
                </div>
                <div className='row'>
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
                        <div className="form-outline mb-4">
                            <label className="form-label fw-bold" htmlFor="form4Example2">Service</label>
                            <select required defaultValue='' name='service' className="form-select" aria-label="Default select example">
                                <option value="" disabled>Select the course</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Web Development">Web Development</option>
                            </select>

                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label fw-bold" htmlFor="form4Example3">*Message</label>
                            <textarea className="form-control" name="message" required id="form4Example3" rows="4" placeholder='Message...'></textarea>
                        </div>


                        <input className='form-Button' type="submit" value="Submit" />
                    </form>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default TrainingForm