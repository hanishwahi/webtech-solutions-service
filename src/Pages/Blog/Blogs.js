import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { data } from './BlogsData'
 
// import { useEffect } from 'react'


function Blogs() {
    const items = data

    function scrollToHome() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    // useEffect(() => {
    //     fetch('https://dummyjson.com/posts').then((res) => {
    //         res.json().then((result) => {

    //             setItems(result.posts)
    //         })
    //     })
    // }, [])

 
    return (
        <>
            <Header />
            <div className='container-fluid py-3 py-lg-5'>
                <div className='container-lg'>
                    <h1 className='text-center h2 fw-bold py-4'>Blogs</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            items.map((item) => {
                                const title = item.title.replace(/\s+/g, '-')
                                return (

                                    <React.Fragment key={item.id}>

                                        <div className="col">
                                            <div className="card">
                                                <div className="card-body p-0 shadow blogs ">
                                                       <div className='row ratio ratio-16x9 object-fit m-0'>
                                                          <img className='img-fluid p-0'  src={item.image} alt=''/>
                                                        </div>  
                                                        
                                                    <div className='row px-4 py-3'>
                                                        {/* <div className='col-sm-1 col-2 col-md-2 pe-0'>
                                                             <h5 className="card-title mb-2">{item.id}.</h5>
                                                        </div> */}
                                                        <div className='col-sm-12 col-lg-12 col-12 col-md-12 px-0'>
                                                            <h5 className="card-title mb-2" >{item.title}</h5>

                                                        </div>
                                                    </div>
                                                    <div className='row px-4 py-3 align-items-center'>
                                                        {/* <div className='col-2 col-sm-1 col-md-1 col-lg-2'></div> */}
                                                        <div className='col-6 col-sm-7  col-md-12 col-lg-6 px-0 py-2'>
                                                            <Link onClick={scrollToHome} to={`/blog/${item.id}/${title}`}>Read More</Link>
                                                        </div>
                                                        <div className='col-6 col-sm-5 col-md-12 col-lg-6 text-end py-2'>
                                                            <p className='h6 mb-0' >  {item.date}</p>
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