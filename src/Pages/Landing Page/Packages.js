import React from 'react'
import off from './../../Images/packageoff (1).png'
import off2 from './../../Images/packageoff (2).png'

function Packages() {
    return (
        <>
            <div className="container-fluid py-lg-5 py-3">
                <div className="container-xl pt-lg-5 pt-3">
                    <div className="row packages-main">
                        <h1>Packages we offer</h1>
                    </div>
                    <div className="row py-4">
                        <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
                            <div className='shadow package-plan'>
                                <div className='border-bottom'>
                                    <h3>Digital Marketing </h3>
                                </div>
                                <div>
                                    <ul>
                                        <li>SEO</li>
                                        <li>Technical SEO</li>
                                        <li>Google My Business </li>
                                        <li>Social Media Marketing</li>
                                        <li>Pay Per Click (PPC)</li>
                                        <li>E-Commerce Marketing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
                            <div className='shadow package-plan'>
                                <div className='border-bottom'>
                                    <h3>Web Development</h3>
                                </div>
                                <div>
                                    <ul>
                                        <li>UI/UX Designing</li>
                                        <li>Frontend Development</li>
                                        <li>Backend Development</li>
                                        <li>Wordpress/Shopify Development</li>
                                        <li>Maintenance & Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
                            <div className='shadow package-plan'>
                                <div className='row border-bottom'>
                                    <h3>COMBO</h3>
                                </div>
 
                                <div className="row p-5 justify-content-center">
                                        <img width={140} src={off} alt="" />
                                </div>

                                <div className="row align-items-center"> 
                                    <h3>  Digital Marketing <br /> + <br />Web Development</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Packages