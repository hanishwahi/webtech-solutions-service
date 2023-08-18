import React from 'react'
import { Link } from 'react-router-dom'

function RecentPost() {
    function scrollToHome() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return (
        <>
            <div >
                <div className='row blog-detail-001  ps-lg-5 py-3 mb-md-4'>
                    <h1 className='mb-3'>Recent Posts</h1>
                   
                            <div className='blog-detail-001 border-bottom mb-2'>
                                <Link onClick={scrollToHome} to={`/blogs/Golden-Rules-for-Elevating-Your-Creative-Vision`}>
                                    <h4> Golden Rules for Elevating Your Creative Vision </h4>
                                </Link>
                                <Link onClick={scrollToHome} to={`/blogs/How-to-Improve-Your-Website-Visibility`}>
                                    <h4> How to Improve Your Website's Visibility </h4>
                                </Link>
                                <Link onClick={scrollToHome} to={`/blogs/Exploring-the-Future-of-Website-Development`}>
                                    <h4> Exploring the Future of Website Development in 2023 and Beyond! </h4>
                                </Link>
                                
                            </div>
                        
                </div>
                <div className='row blog-detail-001  ps-lg-5 py-3 mb-md-4'>
                    <h1 className='mb-3'>Recent Comments</h1>
                    <div className='blog-detail-001'>
                        <Link> <h4 className=''>No comments to show</h4></Link>
                    </div>
                </div>
              
            </div>
        </>
    )
}

export default RecentPost