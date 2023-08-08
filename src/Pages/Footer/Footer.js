import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (
        <>
            <div className="footer wf-section">
                <div className="footer-wrapper row">
                    <div className="col-lg-3 col-md-6 footer-left-contain">
                        <h6 className="footer-column-heading text-uppercase">webtech solutions</h6>
                        <div className="footer-right-text">
                            We specialize in creating custom websites that are fast, secure,
                            and optimized for SEO. Our team of experienced developers can also
                            help you with digital marketing services such as SEO, social media
                            management and more.
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-6 footer-right-contain'>
                        <div className="footer-column ">
                            <h6 className="footer-column-heading">QUICK LINKS</h6>
                            <div className="footer-links-contain">
                                <Link onClick={scrollToTop} to="/">HOME</Link>
                                <Link onClick={scrollToTop} to="/about-us">ABOUT US</Link>
                                <Link onClick={scrollToTop} to="/services">SERVICES</Link>
                                <Link onClick={scrollToTop} to="/clients">CLIENTS</Link>
                                <Link onClick={scrollToTop} to="/career">CAREERS</Link>
                                <Link onClick={scrollToTop} to="/contact-us">CONTACT</Link>
                                <Link onClick={scrollToTop} to="/privacy-policy">Privacy-Policy</Link>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 footer-right-contain'>
                        <div className="footer-column ">
                            <h6 className="footer-column-heading">SERVICES</h6>
                            <div className="footer-links-contain">
                                <Link onClick={scrollToTop} to="/digital-marketing">Digital Marketing</Link>
                                <Link onClick={scrollToTop} to="/web-development">Web Development</Link>
                                <Link onClick={scrollToTop} to="/app-development">App Development</Link>
                                <Link onClick={scrollToTop} to="/graphic-design">Graphic Design</Link>
                                <Link onClick={scrollToTop} to="/seo">SEO</Link>
                                <Link onClick={scrollToTop} to="/smo">SMM</Link>
                                <Link onClick={scrollToTop} to="/training-development">Training & Development</Link>
                            </div>
                             
                        </div>
                    </div>


                    <div className=" col-lg-4 col-md-6 footer-right-contain">
                        <div className="footer-column">
                            <h6 className="footer-column-heading">ADDRESS</h6>
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
                                <Link to="https://twitter.com/webtechpvtltd" target="_blank" className="footer-link"><i class="fa-brands fa-square-x-twitter"></i></Link>
                                <Link to="https://in.pinterest.com/webtechsolutionsservice/" target="_blank" className="footer-link"><i className="fa-brands fa-pinterest-p"></i></Link>
                                <Link to="https://www.youtube.com/@webtechsolutionsservice" target="_blank" className="footer-link"><i className="fa-brands fa-youtube"></i></Link>
                            </div>
                        </div>
                    </div>
                    


                </div>
            </div>
        </>
    )
}

export default Footer