import React from 'react'
import Google_Advertising_icon from '../../Images/Google-Advertising-icon.png'
import Bing_Advertising_icon from '../../Images/Bing-Advertising-icon.png'
import ECommerce_Ads_icon from '../../Images/E-Commerce Ads-icon.png'
import FacebookAdvertising_icon from '../../Images/FacebookAdvertising-icon.png'
import Remarketing from '../../Images/Remarketing.png'
import AmazonAdvertisingicon from '../../Images/AmazonAdvertising.png'

function PPCMarketing() {
    return (
        <>
            <div className='container-fluid how-it-works-section'>
                <div className='container-lg'>
                    <div className='row ppc-marketing text-center'>
                        <h1>Garner Quality Traffic With Our PPC Marketing Services</h1>
                    </div>
                </div>
            </div>
            <div className='container-fluid py-5' >
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-4 col-sm-6 mb-3'>
                            <div className='shadow p-4 text-center ppc-marketing-box'>
                                  <img loading="lazy" className='mb-3'width={140} src={Google_Advertising_icon} alt='Google Ads Agency' /> 
                                <h2>Google Advertising</h2>
                                <p>Google Ads is a product that you can use to promote your business, help sell products or services, raise awareness, and increase traffic to your website.</p>
                            </div>
                            
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-3'>
                            <div className='shadow p-4 text-center ppc-marketing-box'>
                                  <img loading="lazy" className='mb-3'width={140} src={Bing_Advertising_icon} alt='Bing Ads Agency' /> 
                                <h2>Bing Advertising</h2>
                                <p>It is a system that enables conducting PPC campaigns in the Bing search engine owned by Microsoft. Simply put, it is equivalent to Google Ads just for another search engine.</p>
                            </div>
                            
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-3'>
                            <div className='shadow p-4 text-center ppc-marketing-box'>
                                  <img loading="lazy" className='mb-3'width={140} src={ECommerce_Ads_icon} alt='E-commerce Ads Agency in Chandigarh' /> 
                                <h2>E-Commerce Ads</h2>
                                <p>Ecommerce is the trading of goods and services on the internet. It is your bustling city center or brick-and-mortar shop translated into zeroes and ones on the internet superhighway.</p>
                            </div>
                            
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-3'>
                            <div className='shadow p-4 text-center ppc-marketing-box'>
                                  <img loading="lazy" className='mb-3'width={140} src={FacebookAdvertising_icon} alt='SMO Services in Chandigarh' /> 
                                <h2>Facebook Advertising</h2>
                                <p>Facebook ads are paid messages that businesses place on Facebook. This gives you the flexibility to write in your own voice. Plus, you can reach the people who matter most to you.</p>
                            </div>
                            
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-3'>
                            <div className='shadow p-4 text-center ppc-marketing-box'>
                                  <img loading="lazy" className='mb-3'width={140} src={Remarketing} alt='Remarketing Specialist' /> 
                                <h2>Remarketing</h2>
                                <p>Remarketing refers to engaging audiences who have already interacted with your brand, to encourage them to take a desired action that may interest them.</p>
                            </div>
                            
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-3'>
                            <div className='shadow p-4 text-center ppc-marketing-box'>
                                  <img loading="lazy" className='mb-3'width={140} src={AmazonAdvertisingicon} alt='Amazon Ads Expert' /> 
                                <h2>Amazon Advertising</h2>
                                <p>Amazon Advertising is a service that works in a similar way to pay-per-click ads on Google: sellers only pay when shoppers click on ads  (regardless of whether or not the item sells).</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PPCMarketing