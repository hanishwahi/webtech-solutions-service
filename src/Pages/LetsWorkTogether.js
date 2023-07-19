import React from 'react'
import { Link } from 'react-router-dom'
import whatsApp from '../Images/whatsapp.webp'


function LetsWorkTogether() {
    const scrollToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='call-mail'>
                        <div className=" call-fix">
                            <Link to="tel:+91 8427682603"><i className="fa-sharp fa-solid fa-phone  "></i></Link>
                        </div>

                        <div className='work-together'>
                            <Link to='/contact-us' onClick={scrollToHome} >Let's work Together</Link>
                        </div>
                        <div className='mail-fix'>
                        <Link to='https://wa.me/+918427682603?text=Welcome to webtech solutions' target='_blank'> <img width={40} src={whatsApp} alt='' className='img-fluid' /></Link> 
                        </div>
                    </div>
                    <div className='call-mail-2 fixed-bottom border-top'>
                        <div className='d-flex gap-4 justify-content-center align-items-center call-mail-2-content'>
                            <div className='whatsapp'>
                                <Link to="tel:+91 8427682603"><i className="fa-sharp fa-solid fa-phone  "></i></Link>
                            </div>
                            <div className='letSwork'>
                                <Link to='/contact-us' onClick={scrollToHome}>CONTACT US</Link>
                            </div>
                            <div className='emailid'>
                            <Link to='https://wa.me/+918427682603?text=Welcome to webtech solutions' target='_blank'> <img width={35} src={whatsApp} alt='' className='img-fluid' /></Link> 
                            </div>
                        </div>
                    </div>



                </div>


            </div>
        </>
    )
}

export default LetsWorkTogether