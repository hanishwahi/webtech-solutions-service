import React from 'react'
import content_marketing from '../../Images/content-marketing-img.webp'
import dm_rectangle from '../../Images/dm-rectangle 13.png'

function ContentWorld() {
    return (
        <>
            <div className='container-fluid py-4 py-lg-5'>
                <div className='container-lg'>
                    <div className='row text-center content-marketing-text'>
                        <h1>latest Talks, Thoughts & Twists From The Content World</h1>
                    </div>
                    <div className='row py-3 py-lg-5 justify-content-center'>
                        <div className='col-lg-6 col-sm-8 col-md-8 align-self-center mb-3'>
                            <img width="100%" height="100%" src={content_marketing} alt='' className='img-fluid' />
                        </div>
                        <div className='col-lg-6'>
                            <div className='row mb-3'>
                                <div className='col-lg-1 col-1 text-end align-self-center'>
                                    <img width={10} className='img-fluid' src={dm_rectangle} alt='' />
                                </div>
                                <div className='col-11 ppc-heading align-self-center'>
                                    <h1>Why Content Marketing Needs
                                        To Be A Priority For Your
                                        Business?</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-11'>
                                    <div className='ppc-content'>
                                        <p>Content marketing has emerged as the new normal in the digital marketing landscape. It is one of the strongest digital marketing solutions being embraced by businesses to earn traffic, connect to its audience and generate ROI. Why so? Well, no one basically likes being sold a product or service in the old pushy way. Pull marketing is the way to go – the more natural way of marketing. And that lies at the heart of content marketing for businesses. It answers why content marketing for small businesses is important. That is because content pulls the customer to a product/service by consistently answering the customer’s pain points and educating him/her, then...
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default ContentWorld