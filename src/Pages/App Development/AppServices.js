import React from 'react'
import app_service_img from '../../Images/app-services.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'


function AppServices() {
    return (
        <>
            <div className='container-fluid py-5'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='row'>
                                <div className='col-1'>
                                    <img className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 androidIOS'>
                                    <h1>Mobile Application <br />Development Services</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11 androidIOS'>
                                    <ul>
                                        <li>Start-ups Mobile App</li>
                                        <li>Cross-platform mobile app </li>
                                        <li>Native iOS and Android App</li>
                                        <li>Mobile App Design</li>
                                        <li> Product Development</li>
                                        <li> Workflow Management App</li>
                                        <li> On-Boarding Mobile App</li>
                                        <li> On-Going Support and Maintenance</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <img width="100%" height="100%" className='img-fluid' src={app_service_img} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppServices