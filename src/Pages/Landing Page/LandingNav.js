import React from 'react'
import { Link } from 'react-router-dom'

import MainNewlogo from '../../Images/newlogo.webp'

function LandingNav() {
    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

    };
    return (
        <><div className="container-fluid border-bottom sticky-top bg-white py-2">
            <div className="container-xl">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-4 text-start px-0" style={{ transform: "scale(0.8" }}>
                        <Link onClick={scrollToHome}>
                            <img width="100%" height={50} className="img-fluid px-0" src={MainNewlogo} alt="" />

                        </Link>
                    </div>
                   
                    <div className="col-lg-10 col-lg-9 col-8 Landing-contact-button text-end  align-self-center">
                    <Link  to="tel:+91 8427682603"><i class="fa-solid fa-phone"></i>  +91 8427682603</Link>
                    </div>

                     

                    
                </div>
            </div>
        </div>

        </>
    )
}

export default LandingNav