import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { data } from './BlogsData';

function BlogDetails() {
  const [recentPost, setRecentPost] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categorizedData, setCategorizedData] = useState({});


  const { title } = useParams();
  const currentTitle = title.replace(/-/g, ' ');



  useEffect(() => {
    // Extract unique categories from JSON data
    const uniqueTitle = [...new Set(data.map(item => item.title))];
    // console.log("uniqueTitle", uniqueTitle)

    const categorized = {};

    // Categorize the data based on categories
    uniqueTitle.forEach(title => {
      categorized[title] = data.filter(item => item.title === title);
    });
    setCategorizedData(categorized);
  }, []);


  const latestUniqueTitle = categorizedData[currentTitle] || [];
  const latestUniqueTitle1 = latestUniqueTitle[0]



  // back button 
  const Navigate = useNavigate();
  function backWindow() {
    Navigate(-1);
  }

  // to show the recent post 
  useEffect(() => {
    const pickedData = data.slice(-4);
    const pickedDataReverse = pickedData.reverse()
    setRecentPost(pickedDataReverse);
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
      <div className='container-fluid py-md-5'>
        <div className='container-lg'>
          <div className='row align-items-center py-3'>
            
            <div className='col-lg-6 col-4 blog-detail-back-button'>
              <Link onClick={backWindow}><i class="fa-solid fa-arrow-left"></i></Link>
            </div>
            <div className='col-lg-6 col-8 text-end blog-detail'>
              {latestUniqueTitle1 && <h2><span>Posted on: </span> {latestUniqueTitle1.date}</h2>}
            </div>
          </div>
          <div className='row justify-content-between'>
            <div className='col-lg-8 col-md-8'>
              <div className='row mb-3'>
                <div className='col border px-0'>
                  {latestUniqueTitle1 && <img className='p-0 img-fluid' width="100%" src={latestUniqueTitle1.image} alt='' />}
                </div>
              </div>
              <div className='row blog-detail'>
                {latestUniqueTitle1 && <h1 className='mb-3' style={{ color: '#42ade4' }}>{latestUniqueTitle1.title}?
                </h1>}
                {latestUniqueTitle1 && <p className='h6'> {latestUniqueTitle1.description}</p>}
              </div>
            </div>
            <div className='col-lg-4 col-md-4 ps-lg-3'>
              <div className='row blog-detail-001  ps-lg-5 py-3 mb-md-4'>
                <h1 className='mb-3'>Recent Posts</h1>
                {recentPost.map((item) => {
                  const title = item.title.replace(/\s+/g, '-');
                  return (
                    <div key={item.id} className='blog-detail-001'>
                      <Link onClick={scrollToHome} to={`/blog/${title}`}>
                        <h4>{item.title}</h4>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className='row blog-detail-001  ps-lg-5 py-3 mb-md-4'>
                <h1 className='mb-3'>Recent Comments</h1>
                <div className='blog-detail-001'>
                 <Link> <h4 className=''>No comments to show</h4></Link>
                </div>
              </div>
              <div className='row blog-detail-001  ps-lg-5 py-3'>
                <h1 className='mb-3'>Categories</h1>
                <div className='blog-detail-001'>
                  {categories.map((categories) => {
                    const category = categories.replace(/\s+/g, '-');
                    return (
                      <div key={category} className='blog-detail-001'>
                        <Link onClick={scrollToHome} to={`/blog/category/${category}`}>
                          <li>{categories}</li>
                        </Link>
                      </div>
                    );
                  })}
                </div>

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
