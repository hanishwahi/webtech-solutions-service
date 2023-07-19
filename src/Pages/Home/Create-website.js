'use client'
import React from 'react'
 import createbanner from '../../Images/create-website-img.webp'
import Rectangle from '../../Images/Rectangle 7.png'


function CreateWebsite() {
    return (
        <>
            <div className='container-fluid py-lg-5 my-md-5 create-website-bg'>
                <div className='container-lg py-lg-5 py-3'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-lg-5 col-md-5 col-sm-8 p-0 mb-4 mb-md-0'>
                            <img width= "100%" height='100%' className='img-fluid create-website-banner' src={createbanner} alt='' />
                        </div>
                        <div className='col-lg-7 col-md-7 ps-md-4 mb-4 '>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                    <img width={10} className='img-fluid' src={Rectangle} alt='' />
                                </div>
                                <div className='col-11 create-website-heading align-self-center'>
                                    <h1>Create a Attractive Website with Stunning Themes and Cutting-Edge Solutions</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11 create-website-text'>
                                    <p>Welcome to Web Tech Solutions Service the leading web design, App & Software development, and digital marketing services, where we specialise in Developing a visually appealing websites or apps that are designed to attract and engage your target audience. Our team excels in offering a wide range of attractive website themes, including mobile web development solutions, responsive website designs, and custom E-commerce platforms.With our expertise, we bring your unique vision to life by leveraging the latest and most reliable web technologies. Our mission is to build a website that  captures your customers' attention.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateWebsite