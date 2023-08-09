import React from 'react'
 import dm_rectangle from '../../Images/dm-rectangle 13.png'


function NewHeights() {
    return (
        <>
            <div className='container-fluid how-it-works-section'>
                <div className='container-lg py-5'>
                    <div className='row align-items-center'>
                            <div className='col-1 text-end'>
                                 <img loading="lazy" className='img-fluid' src={dm_rectangle} alt=''/>
                            </div>
                            <div className='col-11 new-height-content'>
                                <h1>Our Digital Marketing Services will take your<br/> business to new heights!</h1>
                            </div>
                    </div>
                    <div className='row new-height-content'>
                    <div className='col-1 text-end'>
                             </div>
                       <div className='col-11'>
                       <p>Ready to unlock the full potential of your brand's digital presence? Contact Web Tech Solutions Service today and let our digital marketing experts ignite your online success. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media management and content marketing, we have the expertise and experience to make your brand shine across all digital channels. Our data-driven approach ensures that every decision we make is backed by real insights, maximizing your return on investment and driving tangible results.</p>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewHeights