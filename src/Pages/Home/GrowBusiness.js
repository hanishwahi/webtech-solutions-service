import React from 'react'
import Projectcomp from '../../Images/project-completed.webp'
import Happyclient from '../../Images/happy-clients.webp'
import Result from '../../Images/amazing-result.webp'

function GrowBusiness() {
  return (
    <>
     <div className='container-fluid '>
        <div className="tools-section wf-section grow-business-bg">
          <div className="tools-header">
            <h3 className="features-tools-heading">Sparkling Brands: Grow Your Business with Unforgettable Impact!</h3>
            <p className="features-tools-header-text">Digital marketing is essential to define your brand values create a captivating website</p>
          </div>
          <div className="features-tools-grid">
            <div className="features-tools-grid-contain row shadow">
              <div className="features-tools-grid-cell col-lg-3 col-md-4 col-sm-6 ">
                <div className='py-5 px-3 ' >
                  <div className='tool-images mb-3'>
                  <img 
                    width={140}
                    src={Projectcomp}
                    loading="lazy" alt="" className="tools-grid-image mb-0" />
                  </div>
                  <h5 className="tools-grid-heading">100+ Projects Completed</h5>
                  <div className="tools-grid-text">Till now we have completed 100+ Projects</div>
                </div>
              </div>
              <div className="features-tools-grid-cell  col-lg-3 col-sm-6 col-md-4">
                <div className='py-5 px-3' >
                <div className='tool-images mb-3'>
                  <img
                    width={140}
                    src={Happyclient}
                    loading="lazy" alt="" className="tools-grid-image mb-0" />
                    </div>
                  <h5 className="tools-grid-heading">90+ Happy Clients</h5>
                  <div className="tools-grid-text">Satisfied clients from various industries</div>
                </div>
              </div>
              <div className="features-tools-grid-cell col-lg-3 col-sm-6 col-md-4">
                <div className='py-5 px-3' >
                <div className='tool-images mb-3'>
                  <img
                    width={140}
                    src={Result}
                    loading="lazy" alt="" className="tools-grid-image mb-0" />
                    </div>
                  <h5 className="tools-grid-heading">55+ Amazing Result</h5>
                  <div className="tools-grid-text">Delivering amazing results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GrowBusiness