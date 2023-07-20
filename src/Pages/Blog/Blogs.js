import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { data } from './BlogsData'


function Blogs() {
  
     
    // const items = data.reverse()
     
         const items=data.reverse()
        
   
    function scrollToHome() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }


    return (
        <>
            <Header />
            <div className='container-fluid py-3 py-lg-5'>
                <div className='container-lg'>
                    <h1 className='py-4 blog-heading'>Blogs</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            items.map((item) => {
                                const title = item.title.replace(/\s+/g, '-')
                                return (

                                    <React.Fragment key={item.id}>

                                        <div className="col">
                                            <div className="card">
                                                <div className="card-body p-0 shadow blog-box">
                                                    <div className='row ratio ratio-16x9 object-fit m-0'>
                                                        <img className='img-fluid p-0' src={item.image} alt={item.title} />
                                                    </div>

                                                    <div className='row px-4 py-3'>
                                                        <div className='col-sm-12 col-lg-12 col-12 col-md-12 px-0 blog-content'>
                                                            <Link onClick={scrollToHome} to={`/blog/${title}`}>
                                                                <h5 className="card-title mb-2" >{item.title}</h5>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className='row px-4'>
                                                        <div className='col-sm-12 col-lg-12 col-12 col-md-12 px-0 blog-content'>
                                                            <Link onClick={scrollToHome} to={`/blog/${title}`}>
                                                                <p className="card-title mb-2" >{item.description.slice(0,100)}...</p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className='row px-4 py-3 align-items-center'>
                                                         <div className='col-6 col-sm-7  col-md-12 col-lg-6 px-0 py-2 blogs-button'>
                                                            <Link onClick={scrollToHome} to={`/blog/${title}`}>Read More</Link>
                                                        </div>
                                                        <div className='col-6 col-sm-5 col-md-12 col-lg-6 text-end py-2 blog-content'>
                                                            <h6 className='h6 mb-0' >  {item.date}</h6>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>

                                )
                            })
                        }
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Blogs