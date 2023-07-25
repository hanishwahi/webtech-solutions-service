import React from 'react'
import { Link } from 'react-router-dom';
import InputForm from './InputForm';


function ContactForm() {

    return (
        <>
            <div className='container-fluid mb-lg-5 mb-3 py-lg-5 py-3 how-it-works-section'>
                <div className='container-lg'>
                    <div className='row '>
                        <div className='col-md-6 mb-4'>
                            <div className='row contact-us'>
                                <h1>Feel Free to talk to us</h1>
                            </div>
                            <div className='row contact-us'>
                                <p>At Webtech Solutions, we are always ready for new collaborations and opportunities. Our response team is available 24*7 to answer all your digital marketing and related queries. Get in touch with us as we would be more than happy to help you!!</p>
                            </div>

                            <div className='d-flex  gap-2 contact-us'>
                                <i className="fa-solid fa-location-dot"></i>
                                <Link to='mailto:info@webtechsolutionsservice.com'>Bestech Business Tower<br />
                                    Office No: 412 Tower-A, 4th Floor, Sahibzada Ajit Singh Nagar, Punjab 160066</Link>
                            </div>


                            <div className='d-flex align-items-center gap-2 contact-us'>
                                <i className="fa-solid fa-envelope"></i>
                                <Link to='mailto:info@webtechsolutionsservice.com'>info@webtechsolutionsservice.com</Link>
                            </div>
                            <div className='d-flex align-items-center gap-2 contact-us'>
                            <i className="fa-solid fa-phone"></i>
                            <Link to='tel:+1(877)966-2244' target='_blank'>+1(877)966-2244 </Link>
                            <strong>(US, CANADA)</strong>
                            </div>

                            <div className='d-flex align-items-center gap-2 contact-us'>
                                <i className="fa-brands fa-whatsapp" style={{ color: "green" }}></i>
                                <Link to='https://wa.me/+918427682603?text=Welcome to webtech solutions' target='_blank'>+91 8427682603 </Link>
                                <strong>(INDIA)</strong>
                            </div>

                            
                            
                        </div>
                        <div className='col-md-6 mb-4'>
                            <InputForm/>
                        </div>

                    </div>

                </div>
                {/* <ToastContainer /> */}
            </div>

        </>
    )
}

export default ContactForm