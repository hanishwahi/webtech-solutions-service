import React from 'react'
import dm_rectangle from '../../Images/dm-rectangle 13.png'


function AndroidIOS() {
    return (
        <div className='container-fluid py-5'>
            <div className='container-lg'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='androidIOS-bg'>
                            <div className='row'>
                                <div className='col-1'>
                                    <img src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 androidIOS'>
                                    <h1>Android App<br /> Development</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11 androidIOS'>
                                    <p>A well-known Android app development company,, Web Tech Solutions Services specialises in creating mobile apps with strong code, intuitive user interfaces, and seamless UX. Our Android app development services are focused on providing Android end customers with gorgeous designs and flawless UX. Modern Android technologies are used by our skilled team of Android app designers and developers to create cutting-edge Android app solutions.</p>
                                    <ul>
                                        <li>Android App Development</li>
                                        <li>Android UI/UX Design</li>
                                        <li>Android App Upgrade</li>
                                        <li>Support and Maintenance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='androidIOS-bg'>
                            <div className='row'>
                                <div className='col-1'>
                                    <img src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 androidIOS'>
                                    <h1>IOS App<br /> Development</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11 androidIOS'>
                                    <p>We offer a solution for every requirement you have, from creating an iOS application to hiring a team of developers to learning how to use a teaching assistant to completing projects on schedule and on budget. We are an iOS app development business that offers all of the services you want.
                                    </p>
                                    <ul>
                                        <li>iOS App Development</li>
                                        <li>iOS UI/UX Designing</li>
                                        <li>Migration to the iOS Platform</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AndroidIOS