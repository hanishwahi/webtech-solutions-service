import React from 'react';
import { Link } from 'react-router-dom';

function Jobs() {

    return (
        <>
            <div className='container-fluid my-5 px-0 py-lg-5 how-it-works-section'>
                <div className='container-lg'>
                    <div className='row py-3 mb-3 career-001 text-center'>
                        <h1>Career at Web tech Solution services</h1>
                        <p>We want to make agency life peasant, productive and empowering</p>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 mb-4'>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button shadow-none fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Business Development
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body pb-0">
                                            <div className='mb-3'>
                                                <h1 className='h4 '>Job description:</h1>
                                                We are seeking a highly motivated and results-driven Business Development Manager to join our team. The ideal candidate will be responsible for identifying new business opportunities, building and nurturing relationships with clients, and driving growth for our company. As a Business Development Manager, you will play a critical role in expanding our customer base and maximizing revenue generation. If you have a proven track record in sales, excellent communication skills, and a strategic mindset, we would love to hear from you.
                                            </div>
                                            <div className='mb-4'>
                                                <h1 className='h4'>Roles And Responsibility:</h1>Identify and research potential business opportunities conduct market research, analyse industry trends, and identify potential clients or target markets for the organization's products or services.<br /><br />

                                                Lead generation and prospecting proactively reach out to potential clients through various channels such as cold calling, emails, networking events, and social media to generate leads and establish initial contact.<br /><br />

                                                Relationship building Build and maintain strong relationships with clients, key decision-makers, and stakeholders. Understand their needs, requirements, and pain points to provide suitable solutions and position the organization's offerings effectively.<br /><br />

                                                Client management act as a point of contact for clients, ensuring high levels of customer satisfaction. Address client concerns, resolve issues, and provide ongoing support to build long-term relationships and foster repeat business.
                                            </div>
                                            <div className='mb-4'>
                                                <h1 className='h4'>Qualifications</h1>
                                                <ul>
                                                    <li>The ability to handle multiple projects in a fast-paced environment.</li>
                                                    <li>Effective communication and leadership skills.</li>
                                                    <li>Excellent problem-solving and analytical skills.</li>
                                                    <li>Client handling and conversions.</li>
                                                </ul>
                                            </div>
                                            <div class="">
                                                <p>
                                                    <strong>Required Skills And Abilities:</strong> Upwork, Freelancer, Proposal writing
                                                    <br />
                                                    <strong>Experience :</strong>  1- 3 year<br />
                                                    <strong>Location :</strong>  Mohali<br />
                                                    <strong>Interested Candidate call at :</strong> +91 8427682603
                                                </p>
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
            <div className='container-fluid my-5 py-lg-5 py-3' style={{
                backgroundColor: "#F3F3F3"}}>
                    < div className='container-lg' >
                    <div className='row career-001 text-center'>
                        <h1>Don’t see  a suitable position?</h1>
                        <p>We are for everyone. Write to us to  <Link className='text-decoration-none' to='mailto:career@webtechsolutionservices.com'>career@webtechsolutionservices.com</Link></p>
                    </div>

                </div >

            </div >
        </>
    )
}

export default Jobs