import React from 'react'
import bt_nav_digital_marketing from '../../Images/bt-nav-digital-marketing-icon.png'
import SEO from '../../Images/SEO.png'
 import PPC from '../../Images/PPC1.png'
import Web_development from '../../Images/WEBDEVELOPMENT.png'
import App_development from '../../Images/AppDevelopment.png'
import Graphicdesign from '../../Images/GraphicDesgining-icon.png'

import { Link } from 'react-router-dom'


function BottomNavbar() {
    return (
        <>
            <div className='container-fluid bt-nav-hide border-bottom'>
                <div className='container-lg'>
                    <div className='row justify-content-around'>
                        <div className='col-lg-3 bt-nav-main'>
                            <Link to='/digital-marketing'>
                            <div className='d-flex gap-2 justify-content-center align-items-center'>
                              <img height={45}  src={bt_nav_digital_marketing} alt=''/>
                               <h6>Digital<br/> Marketing</h6> 
                            </div>
                            </Link>
                        </div>
                        {/* <div className='col-lg-3 bt-nav-main'>
                            <Link to='/seo-service'>
                            <div className='d-flex gap-2 justify-content-center align-items-center'>
                              <img height={45}  src={SEO} alt=''/>
                               <h6>SEO</h6> 
                            </div>
                            </Link>
                        </div>
                       
                        <div className='col-lg-3 bt-nav-main'>
                            <Link to='/ppc-service'>
                            <div className='d-flex gap-2 justify-content-center align-items-center'>
                              <img height={45}  src={PPC} alt=''/>
                               <h6>PPC</h6> 
                            </div>
                            </Link>
                        </div> */}
                        <div className='col-lg-3 bt-nav-main'>
                            <Link to='/graphic-design'>
                            <div className='d-flex gap-2 justify-content-center align-items-center'>
                              <img height={45}  src={Graphicdesign} alt=''/>
                               <h6>Graphic<br/> Design</h6> 
                            </div>
                            </Link>
                        </div>
                        <div className='col-lg-3 bt-nav-main'>
                            <Link to='/web-development'>
                            <div className='d-flex gap-2 justify-content-center align-items-center'>
                              <img height={45}  src={Web_development} alt=''/>
                               <h6>Web <br/> Development</h6> 
                            </div>
                            </Link>
                        </div>
                        <div className='col-lg-3 bt-nav-main'>
                            <Link to='/app-development'>
                            <div className='d-flex gap-2 justify-content-center align-items-center'>
                              <img height={45}  src={App_development} alt=''/>
                               <h6>App <br/> Development</h6> 
                            </div>
                            </Link>
                        </div>
                         
                         
                    </div>
                </div>

            </div>
        </>
    )
}

export default BottomNavbar