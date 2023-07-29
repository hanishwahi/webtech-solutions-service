import React from 'react'
import { Link } from 'react-router-dom'
// import TrainingOffer from './TrainingOffer'

function TrainingCourses() {
    
    return (
        <>
            <div className='container-fluid training-bg py-5'>
                <div className='container-lg py-lg-5'>
                    <div className='row training-callnow text-center py-3'>
                        <h1 className='py-3'>Flexi Training Sessions Available!!</h1>
                        <p>Batch starts from 10th August 2023 (Monday to Friday)</p>
                    </div>
                    <div className='row py-3 training-callnow text-center'>
                        <h1>Master your skills with our Best Digital Marketing Course in Chandigarh/Mohali</h1>
                    </div>
                    <div className='row text-center py-2'>
                        <div className='col blogs-button'>
                            <Link to='tel:+91 8427682603'>Enroll Now</Link>
                        </div>
                    </div>
                </div>

            </div>


            <div className='container-fluid mt-5'>
                <div className='container-lg'>
                    <div className='row training-heading-main-002 text-center py-lg-5 py-3'>
                        <h1>Why Learn Digital Marketing Course with WebTech Solutions</h1>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-sm-6 col-md-4 mb-3'>
                            <div className='training-box'>
                                <i className="fa-solid fa-user"
                                    style={
                                        { color: "#37a7e1" }
                                    }></i>
                                <h2>Expert Trainer</h2>
                                <p>Our expert trainers are experienced professionals who are passionate about teaching and will provide you with in-depth knowledge of digital marketing.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 col-md-4 mb-3'>
                            <div className='training-box'>
                                <i className="fa-solid fa-headphones"
                                    style={
                                        { color: "red" }
                                    }></i>
                                <h2>Doubt- Clearing Sessions</h2>
                                <p>Doubt-clearing sessions ensure that you have a thorough understanding of the material and can confidently apply it in real-world situations.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 col-md-4 mb-3'>
                            <div className='training-box'>
                                <i className="fa-solid fa-video"
                                    style={
                                        { color: "#06c506" }
                                    }></i>
                                <h2>Interactive Live Classes</h2>
                                <p>Our interactive live classes provide a collaborative learning experience, allowing you to engage with the material and your classmates in real-time.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 col-md-4 mb-3'>
                            <div className='training-box'>
                                <i className="fa-solid fa-laptop"
                                    style={
                                        { color: "orange" }
                                    }></i>
                                <h2>Completely Practical</h2>
                                <p>Our courses are completely practical, giving you hands-on experience with digital marketing tools and techniques to prepare you for real-world scenarios.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 col-md-4 mb-3'>
                            <div className='training-box'>
                                <i className="fa-solid fa-graduation-cap"
                                    style={
                                        { color: "purple" }
                                    }></i>
                                <h2>100% Job Assistance</h2>
                                <p>We provide 100% job assistance to
                                    help you find the right job or
                                    advance in your current
                                    career</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 col-md-4 mb-3'>
                            <div className='training-box'>
                                <i className="fa-solid fa-certificate"
                                    style={
                                        { color: "#fdfd0e" }
                                    }></i>
                                <h2>Digital Marketing Certificate</h2>
                                <p>You will receive a digital marketing certificate upon completion of our course, which will validate your skills and make you stand out in the job market.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row py-3 justify-content-center'>
                        <div className='col'>
                            <p className='training-box-para'>Our mentor, with a wealth of hands-on experience, has navigated the ever-changing tides of digital marketing, achieving remarkable success for numerous businesses. They are now eager to share their profound insights with you, providing personalized guidance to suit your unique goals and challenges.<br /><br />

                                From mastering the art of social media marketing to optimizing search engine visibility and crafting captivating email campaigns, our mentor will equip you with the tools to thrive in the digital realm. As the digital landscape evolves, our mentor remains at the forefront of industry trends, ensuring you stay ahead of the competition.<br /><br />

                                Discover the true potential of digital marketing and its profound impact on your brand's growth. With our experienced digital marketing mentor by your side, you'll gain the confidence to navigate the complexities of the digital world, unlocking limitless opportunities for success. Embrace the future of marketing with us, and together, let's revolutionize your business through the power of digital marketing.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid py-5'>
                <div className='container-lg'>
                    <div className='row training-faq-heading text-center py-4'>
                        <h1>Exams & Certifications</h1>
                    </div>
                    <div className='row'>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h2 className='h5 m-0 training-faq-content'>
                                            Exam & certification on digital marketing</h2>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className='h6 training-faq-para'>We offer digital marketing courses and placement with certificates issued by Apponix Technologies.Being one of the leading providers of guidance for digital marketing certificate Google, we will also help you get your hands on several other globally recognized certifications from tech-giants like –

                                            <li>Google Analytics</li>
                                            <li>Inbound marketing from HubSpot</li>
                                            <li>Email marketing from HubSpot</li>
                                            <li>Content marketing from HubSpot</li>
                                            <li>Facebook blueprint</li>
                                            <li>SEO Fundamentals certification from SEMRUSH</li>
                                            <li>Google Ads certification</li>
                                            For more details, please refer to the FAQ section below –</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed h3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <h2 className='h5 m-0 training-faq-content'>Should a person know to code if they want to learn SEO?</h2>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                        <p className='h6 training-faq-para'>
                                            No, you do not need to know to code when you want to learn SEO.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <h2 className='h5 m-0 training-faq-content'>What is the scope in India after learning Digital Marketing?</h2>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className='h6 training-faq-para'>There is a huge demand for digital marketers. It creates the right opportunity for you to make a name for yourself in the sector by learning Digital Marketing today.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <h2 className='h5 m-0 training-faq-content'>Who is my instructor?</h2>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className='h6 training-faq-para'>All our trainers are working professional having more than 6 years of relevant industry experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <h2 className='h5 m-0 training-faq-content'>Can you provide guaranteed placement after the course?</h2>
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className='h6 training-faq-para'>
                                            Yes, we provide you the assured placement. we have a dedicated team for placement assistance</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        <h2 className='h5 m-0 training-faq-content'>Can I get certification after completing the course?</h2>
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className='h6 training-faq-para'>Yes, We provide a course completion certificate in web design & development. apart from this, there is 1 more certificate called “ Apponix Certified Professional in Digital marketing”
                                            If you score more than 80% in the exam you will be awarded an “Apponix Certified Professional”</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        <h2 className='h5 m-0 training-faq-content'>Will I get a job after doing this course?</h2>
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className='h6 training-faq-para'>Yes, you surely will as our Digital Marketing Training course covers all aspects of Digital Marketing that will allow you to have the skills needed to secure a job in marketing firms, tech giants as well as SMEs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/* <TrainingOffer/>  */}
            </>
    )
}

export default TrainingCourses
