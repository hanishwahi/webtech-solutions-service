import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { data } from './BlogsData'
 


function BlogDetails() {
  const blogDetails = data
  const { id } = useParams();
  const currentId = id

  const Navigate= useNavigate();
  
  function backWindow(){
    Navigate(-1)
  }
 

  const newblog = blogDetails[currentId - 1]
  // console.log(typeof newblog, newblog)

  return (
    <>
      <Header />
      <div className='container-fluid py-5'>
        <div className='container-lg'>
          <div className='row align-items-center  mb-3'>
            <div className='col-lg-6 col-8 blog-detail'>
              {newblog && <h2><span >Posted on: </span>  {newblog.date}</h2>}
            </div>
            <div className='col-lg-6 col-4 text-end blog-detail'>
               <Link onClick={backWindow}>Back</Link>
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col'>
              <img className='img-fluid p-0' width={500} src={newblog.image} alt='' />
            </div>
          </div>


          <div className='row'>
            {newblog && <h2 className='h3 mb-3' style={{ color: "#42ade4" }}>{newblog.title}?</h2>}
          </div>

          <div className='row blog-detail'>
            {newblog && <p className='h6'> {newblog.description}</p>}
          </div>

        </div>

      </div>

      <Footer />
    </>
  )
}

export default BlogDetails