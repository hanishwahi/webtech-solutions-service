import React from 'react';
import { Link } from 'react-router-dom'; 

function Jobs() {
     return (
        <>
            <div className='container-fluid my-5 px-0 py-lg-5 how-it-works-section'>
                <div className='container-lg'>
                    <div className='row py-3 mb-3 career-001 text-center'>
                        <h1>Career at Web tech Solutions service</h1>
                        <p>We want to make agency life peasant, productive and empowering</p>
                    </div>
                    <div className='row'>

                        <div className='col-lg-12 mb-4'>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button shadow-none fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            SEO Executive - Immediate Joining
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body pb-0">
                                            <div className='mb-3'>
                                                <h1 className='h5'>Job description:</h1>
                                                <p>We are searching for a passionate SEO Executive to join our team. The SEO Executive responsibilities include analyzing and identifying gaps in website content, optimizing pages for improved search results, building links, and supervising content creation. You should be able to identify marketing opportunities and come up with strategies to increase website traffic.</p>
                                            </div>
                                            <div className='mb-4'>
                                                <h1 className='h5'>Roles And Responsibility:</h1>
                                                <p>Conducting keyword research using dedicated software, and generating new keyword ideas. Analyzing website and social media pages, then making recommendations for improvement. Monitoring website traffic, search results, and developing strategies. Generating content ideas and delegating these to the team. Overseeing content creation and offering suggestions. Updating outdated content. Optimizing pages for desktop, tablet, and mobile use. Developing link-building strategies. Managing paid search campaigns. Keeping up to date with new trends and best SEO practices.</p>
                                            </div>
                                            <div className='mb-4'>
                                                <h1 className='h5'>SEO Executive Requirements:</h1>
                                                <ul>
                                                    <li>Previous experience in a similar role would be advantageous.</li>
                                                    <li>Excellent written, verbal, and analytical skills.</li>
                                                    <li>Great customer service and interpersonal skills.</li>
                                                    <li>Ability to follow specifications.</li>
                                                    <li>Ability to work under pressure.</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-1'><strong>Experience :</strong>  0-1 year </p>
                                                <p className='mb-1'> <strong>Location :</strong>  Mohali</p>
                                                <p className='mb-1'><strong>Interested Candidate call at :</strong><Link to="tel:+91 8427682603"> +91 8427682603</Link></p>

                                            </div>
                                            
                                        </div>
                                        <div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='container-fluid my-5 py-lg-5 py-3'>
                < div className='container-lg' >
                    <div className='row career-001 text-center'>
                        <div className='col'>
                            <h1>Don’t see  a suitable position?</h1>
                            <p>We are for everyone. Write to us to  <Link className='text-decoration-none' to='mailto:career@webtechsolutionsservice.com'>career@webtechsolutionsservice.com</Link></p>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Jobs