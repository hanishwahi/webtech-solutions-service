import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {data} from './BlogsData'
// import { useEffect } from 'react'



function BlogDetails() {
  const blogDetails= data
  const { id} = useParams();
   const currentId = id
 
  console.log(typeof currentId, currentId)


  // useEffect(() => {
  //   fetch('https://dummyjson.com/posts').then((res) => {
  //     res.json().then((result) => {
  //       setBlogDetails(result.posts)
  //     })
  //   })
  // }, [])

  const newblog = blogDetails[currentId - 1]
  console.log(typeof newblog, newblog)

  return (
    <>
      <Header />
      <div className='container-fluid py-5'>
        <div className='container-lg'>
        <div className='row'>
          {newblog && <h2 className='h5 mb-3'>{newblog.date}:</h2>}
          </div>
          <div className='row'>
          {newblog && <h2 className='h3 mb-3'><strong>Title:</strong> {newblog.title}</h2>}
          </div>
          
          <div className='row'>
          {newblog && <p className='h6'><strong>Description:</strong> {newblog.description}</p>}
          </div>

        </div>

      </div>

      <Footer />
    </>
  )
}

export default BlogDetails