import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { data } from './BlogsData';

function BlogDetails() {
  const [recentPost, setRecentPost] = useState([]);
  const [categories, setCategories] = useState([]);

  const blogDetails = data;
  const { id } = useParams();
  const currentId = id;
   // new blog with key 
   const newblog = blogDetails[currentId - 1];

  // back button 
  const Navigate = useNavigate();
  function backWindow() {
    Navigate(-1);
  }

 

  // to show the recent post 
  useEffect(() => {
    // to show the recent post 
    const numElements = 4;
    const startIndex = data.length - numElements;
    const pickedData = data.slice(startIndex);
    setRecentPost(pickedData);

    // Extract unique categories from JSON data
    const uniqueCategories = [...new Set(data.map(item => item.category))];
    setCategories(uniqueCategories);
  }, []);

  
  function scrollToHome() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

 
  return (
    <>
      <Header />
      <div className='container-fluid py-5'>
        <div className='container-lg'>
          <div className='row align-items-center py-3'>
            <div className='col-lg-6 col-8 blog-detail'>
              {newblog && <h2><span>Posted on: </span> {newblog.date}</h2>}
            </div>
            <div className='col-lg-6 col-4 text-end blog-detail'>
              <Link onClick={backWindow}><i className='fa-solid fa-rotate-left'></i></Link>
            </div>
          </div>
          <div className='row justify-content-between'>
            <div className='col-lg-9 col-md-8'>
              <div className='row mb-3'>
                <div className='col border px-0'>
                  <img className='p-0 img-fluid' width="100%" src={newblog.image} alt='' />
                </div>
              </div>
              <div className='row blog-detail'>
                {newblog && <h1 className='mb-3' style={{ color: '#42ade4' }}>{newblog.title}?</h1>}
                {newblog && <p className='h6'> {newblog.description}</p>}
              </div>
            </div>
            <div className='col-lg-3 col-md-4 ps-lg-3'>
              <div className='row blog-detail-001 border-bottom py-3'>
                <h1 className='mb-3' style={{ color: '#42ade4' }}>Recent Posts</h1>
                {recentPost.map((item) => {
                  const title = item.title.replace(/\s+/g, '-');
                  return (
                    <div key={item.id} className='blog-detail-001'>
                      <Link to={`/blog/${item.id}/${title}`}>
                        <h4>{item.title}</h4>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className='row blog-detail-001 border-bottom py-3'>
                <h1 className='mb-3' style={{ color: '#42ade4' }}>Recent Comments</h1>
                <div className='blog-detail-001'>
                  <h4 className='h5'>No Comments to show</h4>
                </div>
              </div>
              <div className='row blog-detail-001 border-bottom py-3'>
                <h1 className='mb-3' style={{ color: '#42ade4' }}>Categories</h1>
               <div className='blog-detail-001'>
               
               </div>
                {categories.map((categories) => {
                  const category = categories.replace(/\s+/g, '-');
                  return (
                    <div key={category} className='blog-detail-001'>
                      <Link onClick={scrollToHome} to={`/blog/category/${category}`}>
                        <h4>{category}</h4>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogDetails;
