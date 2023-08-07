import React from 'react'
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function LandingContact() {
    const form = useRef();

    const Navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_hmnkl0m","template_512smz8", e.target, 'DaUmEfgqFFS3JD4_d').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
        Navigate('/thankyou')
    };

    return (
        <>
            <div>
                <form className='landing-form  p-3 ' ref={form}
                    onSubmit={sendEmail} autocomplete="off">
                    <div className='row justify-content-between '>
                        <div className="form-outline col-12 col-sm-6 mb-4">
                            <label className="form-label text-dark fw-bold" htmlFor="form4Example1">*Name</label>
                            <input type="text" name="name" id="form4Example1" required className="form-control" placeholder='Full Name' />
                        </div>

                        <div className="form-outline col-12 col-sm-6 mb-4">
                            <label className="form-label text-dark fw-bold" htmlFor="form4Example2">*Phone</label>
                            <input type="number" name="phone" id="form4Example2" required className="form-control" placeholder='Enter your Phone number' />
                        </div>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label text-dark fw-bold" htmlFor="form4Example2">*Email address</label>
                        <input type="email" name="email" id="form4Example2" required className="form-control" placeholder='Enter your Email ID' />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label text-dark fw-bold" htmlFor="form4Example2">Service</label>
                        <select required defaultValue='' name='service' className="form-select" aria-label="Default select example">
                            <option value="" disabled>Select the service</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Web Development">Web Development</option>
                            <option value="App Development">App Development</option>
                            <option value="Graphic Designing">Graphic Designing</option>
                        </select>

                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label text-dark fw-bold" htmlFor="form4Example2">Website</label>
                        <input type="url" name="website" id="form4Example2" className="form-control" placeholder='Optional' />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label text-dark fw-bold" htmlFor="form4Example3">*Message</label>
                        <textarea className="form-control" name="message" required id="form4Example3" rows="4" placeholder='Message...'></textarea>
                    </div>
                    <input className='form-Button' type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default LandingContact