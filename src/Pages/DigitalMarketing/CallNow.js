import React from 'react'
import { Link } from 'react-router-dom'

function CallNow() {
    return (
        <>
            <div className='container-fluid call-now-bg mb-5 my-lg-5'>
                <div className='container-lg align-self-center'>
                    <div className='row call-now-content text-center justify-content-center '>
                        <h2>Boost your online presence and make marketing magic with our expert digital team. Let's elevate your business!</h2>
                        <Link to='tel:+91 8427682603' className='btn'>Call Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CallNow