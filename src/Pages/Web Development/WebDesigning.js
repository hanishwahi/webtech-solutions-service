import React from 'react'
import dm_rectangle from '../../Images/dm-rectangle 13.png'
import web_design_img from '../../Images/web-design-img.webp'


function WebDesigning() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container-xxl'>
                    <div className='row mb-3'>
                        <div className='col-1 col-md-1 text-end align-self-lg-center'>
                            <img src={dm_rectangle} alt='' />
                        </div>
                        <div className='col-11 col-md-11 col-lg-11  web-devp-heading align-self-center'>
                            <h1>Get ready for a digital transformation that takes you to new heights. <br />
                                Let us assist your business to the next level of success.</h1>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container-fluid'>
                <div className='container-lg'>
                    <div className='row py-5 justify-content-center'>
                        <div className='col-lg-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                    <img width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 create-website-heading align-self-center'>
                                    <h1>Website Designing</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11'>
                                    <div className='web-devp-content'>
                                        <p>Transform your online presence with Web Tech Solutions Services, a leading web design agency. We create captivating websites that showcase your brand, boost conversions, and drive revenue.</p>
                                    </div>
                                    <div className='web-devp-content'>
                                        <h2>Launch your success story today!</h2>
                                        <p>From sleek and modern designs to elegant and artistic layouts, we bring your ideas to life with a touch of magic. Our websites are not only visually striking, but they are also highly functional and user-friendly, ensuring seamless navigation and an enjoyable browsing experience for your visitors.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-8 col-md-6'>
                            <img width="100%" height="100%" src={web_design_img} alt='' className='img-fluid' />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default WebDesigning