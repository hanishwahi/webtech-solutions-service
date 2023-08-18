import React from 'react'
import Blogs from './Blogs'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function BlogPage() {
    return (
        <>
            <Header />
            <div className='container-fluid py-3 py-lg-5'>
                <div className='container-lg'>
                    <h1 className='py-4 blog-heading'>Blogs</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <Blogs />
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default BlogPage