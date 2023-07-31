import React from 'react'
import { Link } from 'react-router-dom'
import LandingContact from './LandingContact'


function LandingFooter() {
    
    return (
        <>
            <div className="footer wf-section">
                <div className="footer-wrapper row">

                    <div className='col-lg-5 col-md-6 footer-right-contain'>
                        <LandingContact />
                    </div>



                    <div className=" col-lg-7 col-md-6 footer-right-contain">
                        <div className="footer-column">
                            <h6 className="footer-column-heading">ADDRESS</h6>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="footer-links-contain">
                                        <p className="footer-link">
                                            <i className="fa-solid fa-location-dot"></i>  Bestech Business Tower<br /> Office No: 412 Tower-A, 4th Floor, Sahibzada Ajit Singh Nagar, Punjab 160066
                                        </p>
                                    </div>
                                    <div className="footer-links-contain">
                                        <Link to="tel:+1(877)966-2244" className="footer-link">
                                            <i className="fa-solid fa-phone"></i> +1(877)966-2244 (US, CA)</Link>
                                        <Link to="tel:+91 8427682603" className="footer-link">
                                            <i className="fa-solid fa-phone"></i>  +91 8427682603 (IN)</Link>
                                        <Link to="mailto:info@webtechsolutionsservice.com" className="footer-link">
                                            <i className="fa-solid fa-envelope"></i>  info@webtechsolutionsservice.com</Link>
                                    </div>
                                    <div className='d-flex gap-3 social-links'>
                                        <Link to="https://www.linkedin.com/company/webtechsolutionsservice/" target="_blank" className="footer-link"><i className="fa-brands fa-linkedin"></i></Link>
                                        <Link to="https://www.instagram.com/webtechsolutionsservice/" target="_blank" className="footer-link"><i className="fa-brands fa-instagram"></i></Link>
                                        <Link to="https://www.facebook.com/webtechsolutionsservice" target="_blank" className="footer-link"><i className="fa-brands fa-square-facebook"></i></Link>
                                        <Link to="https://twitter.com/webtechpvtltd" target="_blank" className="footer-link"><i className="fa-brands fa-twitter"></i></Link>
                                        <Link to="https://in.pinterest.com/webtechsolutionsservice/" target="_blank" className="footer-link"><i className="fa-brands fa-pinterest-p"></i></Link>
                                        <Link to="https://www.youtube.com/@webtechsolutionsservice" target="_blank" className="footer-link"><i className="fa-brands fa-youtube"></i></Link>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="footer-links-contain">
                                        <p className="footer-link">
                                            <i className="fa-solid fa-location-dot"></i> C 304 Asf Insigina Isle de Royale Residences Gwal Pharai – Gurugram -Haryana 122003
                                        </p>
                                    </div>
                                   
                                  
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default LandingFooter