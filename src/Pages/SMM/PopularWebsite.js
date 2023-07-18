import React from 'react'
import yoursocial from '../../Images/yourSocial.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'
import facebook_icon from '../../Images/facebook.png'
import Instagram_icon from '../../Images/instagram.png'
import YouTube_icon from '../../Images/youtube.png'

function PopularWebsite() {
    return (
        <>
 <div className='container-fluid how-it-works-section py-5'>
                <div className='container-lg'>
                    <div className='row smm-text text-center'>
                        <h1>Popular websites for social media marketing</h1>
                    </div>
                    <div className='row py-4'>
                        <div className='col-lg-4 col-sm-6 mb-3 '>
                            <div className='shadow p-4 text-center smm-box'>
                                <img className='mb-3' width={120} src={facebook_icon} alt='' />
                                <h2>Facebook</h2>
                                <p>Boasting a user count of 2.29 billion active users daily, Facebook cannot be ignored when it comes to social media marketing. A well-set-up Facebook page helps improve brand awareness and generates traffic to your website.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-3 '>
                            <div className='shadow p-4 text-center smm-box'>
                                <img className='mb-3' width={120} src={Instagram_icon} alt='' />
                                <h2>Instagram</h2>
                                <p>Instagram, the fifth most-visited website in the world, can be a great way to market your brand with the right strategy. The favorite platform for influencers comes with a multitude of ways to promote your brand.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-3 '>
                            <div className='shadow p-4 text-center smm-box'>
                                <img className='mb-3' width={120} src={YouTube_icon} alt='' />
                                <h2>Youtube</h2>
                                <p>The popular video-sharing platform, YouTube, has over 2.6 billion users as of 2023. With the right strategies, your brand can get maximum exposure when advertised on YouTube.</p>
                            </div>
                        </div>
                        
                     

                    </div>
                </div>

            </div>

            <div className='container-fluid py-lg-5 py-3'>
                <div className='container-lg'>
                    <div className='row justify-content-center py-lg-5'>
                        <div className='col-lg-6 align-self-center'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                    <img width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 smm-heading align-self-center'>
                                    <h1>Time to write yoursocial media success story</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11'>
                                    <div className='smm-content'>

                                        <p>Looking to stand out in a sea of competitors? You’re in the right place. Social media is a goldmine of opportunities. We’ll help you take full advantage of this lucrative concept by planning, building, and executing social media strategies that deliver. We’ll happily assist you in your social media marketing campaigns to improve brand awareness and make meaningful engagements and connections with your customers. Shoot us a text or an email to get started.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-8 col-md-8 align-self-center'>
                            <img width="100%" height="100%" src={yoursocial} alt='' className='img-fluid transform' />
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}

export default PopularWebsite