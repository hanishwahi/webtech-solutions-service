import React from 'react'
 import banner1 from '../../Images/home -banner-2.webp'
 import banner2 from '../../Images/home-banner-new.webp'
 
function Banner() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img width="100%" height="100%" loading="lazy" src={banner1} className="d-block" alt="Web Tech Solutions Service" />
          </div>
          <div className="carousel-item">
            <img width="100%" height="100%" loading="lazy" src={banner2} className="d-block w-100" alt="Web Development Service" />
          </div>
          
        
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Banner