import React from 'react'
import serviceListimg from '../../Images/service-list-img.webp'
import { Link} from 'react-router-dom'

function ServiceList() {

    const ScrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return (
        <>
            <div className='container-fluid py-5'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-5 col-md-6'>
                            <ol style={{ listStyleType: "none", padding:"0px" }} className='service-list-head'>
                                <div className='row'>
                                    <Link onClick={ScrollToTop} to="/digital-marketing" className='d-flex align-items-center'>
                                        <div className='col-md-9 col-9'>
                                            <li>Digital Marketing</li>
                                        </div>
                                        <div className=' col-md-3 col-3 text-end'>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </Link >
                                </div>
                                <div className='row'>
                                    <Link onClick={ScrollToTop} to="/web-development" className='d-flex align-items-center'>
                                        <div className='col-md-9 col-9'>
                                            <li>Web Development</li>
                                        </div>
                                        <div className=' col-md-3 col-3 text-end'>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </Link >
                                </div>
                                <div className='row'>
                                    <Link onClick={ScrollToTop} to='/app-development' className='d-flex align-items-center'>
                                        <div className='col-md-9 col-9'>
                                            <li>App Development</li>
                                        </div>
                                        <div className=' col-md-3 col-3 text-end'>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </Link >
                                </div>
                                <div className='row'>
                                    <Link onClick={ScrollToTop} to='/graphic-design' className='d-flex align-items-center'>
                                        <div className='col-md-9 col-9'>
                                            <li>Graphic Designing</li>
                                        </div>
                                        <div className=' col-md-3 col-3 text-end'>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </Link >
                                </div>
                                 

                            </ol>
                        </div>
                      
                        <div className='col-lg-7 col-md-6'>
                             <img loading="lazy" width="100%" height="100%" className='img-fluid' src={serviceListimg} alt='Web Tech Solutions Service' />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ServiceList