import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { data } from './BlogsData'



function BlogDetails() {
  const [recentPost, setRecentPost] = useState([])

  const blogDetails = data
  const { id } = useParams();
  const currentId = id

  const Navigate = useNavigate();

  function backWindow() {
    Navigate(-1)
  }


  const newblog = blogDetails[currentId - 1]


  useEffect(() => {
    const numElements = 3;
    const startIndex = data.length - numElements;
    const pickedData = data.slice(startIndex);
    setRecentPost(pickedData)

  }, [])

  console.log('Picked data:', recentPost);



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
          <div className='row justify-content-between'>
            <div className='col-lg-8'>
              <div className='row mb-3'>
                <div className='col'>
                  <img className='p-0 img-fluid' height={550} src={newblog.image} alt='' />
                </div>
              </div>

              <div className='row blog-detail'>
                {newblog && <h1 className='h3 mb-3' style={{ color: "#42ade4" }}>{newblog.title}?</h1>}
                {newblog && <p className='h6'> {newblog.description}</p>}
              </div>

            </div>
            <div className='col-lg-3'>
              <div className='row blog-detail-001'>
                <h1 className='h3 mb-3' style={{ color: "#42ade4" }}>Recent Posts</h1>
                {
                  recentPost.map((items) => {
                    const title = items.title.replace(/\s+/g, '-')
                    return (
                      <div key={items.id} className='blog-detail-001'>
                        <Link to={`/blog/${items.id}/${title}`}><h4>{items.title}</h4></Link>
                      </div>
                    )
                  })
                }
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default BlogDetails