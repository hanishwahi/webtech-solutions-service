import React from 'react'
// import Whyus from '../../Images/why-us-img.webp'
import Whyus from '../../Images/Why Choose Us.webp'

function WhyUs() {
  return (
     <div className='container-fluid why-us-bg py-5 mb-5'>
        <div className='container-lg'>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-lg-7 col-md-7'>
                    <div className='row why-us-heading' >
                        <h1>Why Choose Us?</h1>
                    </div>
                    <div className='row why-us-list px-3'>
                        <ol>
                            <li>Skilled with appropriate knowledge of numerous technologies.</li>
                            <li>Quick action on the project in accordance.</li>
                            <li>Give additional white label services on demand. </li>
                            <li>Dedicated Development Resources (DDR).</li>
                            <li>Exceptional Customer Service. </li>
                            <li>High Performance Web Solutions.</li>
                            <li>Competitive Prices.</li>
                            <li>Proven Track Record</li>
                        </ol>

                    </div>
                </div>
                <div className='col-lg-5 col-md-4 col-sm-7 '> 
                    <img loading="lazy" src={Whyus} alt='' className='img-fluid'/> 
                </div>
            </div>
        </div>
     </div>
  )
}

export default WhyUs