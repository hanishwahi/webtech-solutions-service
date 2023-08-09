import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import smo_banner from '../../Images/smo-banner.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'
import smo_img from '../../Images/smo-img.webp'
import Account_Management from '../../Images/Account_Management.png'
import Content_Strategy from '../../Images/Content_Strategy.png'
import Profile_Optimization from '../../Images/Profile_Optimization.png'
import Trending_Copywriting from '../../Images/Trending_Copywriting.png'
import Identifying_hashtags from '../../Images/Identifying_hashtags.png'
import Social_Media from '../../Images/Social_Media.png'
import SMOService from './SMOService'
import ContactForm from '../ContactForm/ContactForm'



function SMO() {
    return (
        <>
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col px-0'>
                         <img loading="lazy" className='overflow-hidden px-0 img-fluid'
                            src={smo_banner}
                            alt='' />
                    </div>
                </div>
            </div>
            <div className='container-fluid pt-4'>
                <div className='container-lg'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-lg-6 col-sm-8 col-md-6 align-self-center mb-3'>
                             <img loading="lazy" width="100%" height="100%" src={smo_img} alt='' className='img-fluid' />
                        </div>
                        <div className='col-lg-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                     <img loading="lazy" width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 smo-heading align-self-center'>
                                    <h1>A glimpse of your SMO agency</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11'>
                                    <div className='smo-content'>
                                        <p>Social Media Optimization puts the brand’s image in limelight, making it the center of attention. Web tech solutions Services aids the brand to get audience exposure by strategically planned social media posts. Our phenomenal strategies and methodological approach in Social Media Optimization propels the brand’s image in reaching more customers. A business doesn’t have to worry about online visibility with Web Tech Solutions services</p>
                                        <ol>
                                            <li>Get illustrated optimized post to connect with right audience.</li>
                                            <li>Social media profile reflects a brand’s success.</li>
                                            <li>Everyday posting has its own value and contributes in growth.</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <div className='container-fluid how-it-works-section py-5'>
                <div className='container-lg'>
                    <div className='row smo-text text-center'>
                        <h1>How SMO services can create a difference in brand’s image</h1>
                    </div>
                    <div className='row py-4'>
                        <div className='col-lg-4 col-sm-6 mb-3 '>
                            <div className='shadow bg-white p-4 text-center smo-box'>
                                 <img loading="lazy" className='mb-3' width={120} src={Account_Management} alt='' />
                                <h2>Account Management</h2>
                                <p>We manage all your social media accounts to reach niche target audience.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-3 '>
                            <div className='shadow bg-white p-4 text-center smo-box'>
                                 <img loading="lazy" className='mb-3' width={120} src={Content_Strategy} alt='' />
                                <h2>Content Strategy</h2>
                                <p>Web Tech Solutions Services creates content unique content strategies for brand.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-3 '>
                            <div className='shadow bg-white p-4 text-center smo-box'>
                                 <img loading="lazy" className='mb-3' width={120} src={Profile_Optimization} alt='' />
                                <h2>Profile Optimization</h2>
                                <p>We optimize social media profiles to create powerful impact on the visitors.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-3 '>
                            <div className='shadow bg-white p-4 text-center smo-box'>
                                 <img loading="lazy" className='mb-3' width={120} src={Trending_Copywriting} alt='' />
                                <h2>Trending Copywriting</h2>
                                <p>Our expert team makes sure all business’s social media profile are safe from compromising.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-3 '>
                            <div className='shadow bg-white p-4 text-center smo-box'>
                                 <img loading="lazy" className='mb-3' width={120} src={Identifying_hashtags} alt='' />
                                <h2>Identifying hashtags</h2>
                                <p>Web tech Solutions Services makes perfect use of analyzing and using hashtags to get exposure.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-3 '>
                            <div className='shadow bg-white p-4 text-center smo-box'>
                                 <img loading="lazy" className='mb-3' width={120} src={Social_Media} alt='' />
                                <h2>Social Media Marketing</h2>
                                <p>Web tech provides social media marketing services across all leading social media platforms.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <SMOService/>
            <ContactForm/>
            <Footer />
        </>
    )
}

export default SMO