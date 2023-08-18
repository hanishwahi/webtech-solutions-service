import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import RecentPost from '../RecentPost'

function Blog3() {
    return (
        <>
            <Header />
            <div className='container-fluid py-md-5'>
                <div className='container-lg'>
                    <div className='row align-items-center py-3'>
                        <div className='col-lg-6 col-8 text-start blog-detail'>
                            <h2><span>Posted on: </span> 20-07-2023 </h2>
                        </div>
                    </div>
                    <div className='row justify-content-between'>
                        <div className='col-lg-8 col-md-8'>
                            <div className='row mb-3'>
                                <div className='col border px-0'>
                                    <img className='p-0 img-fluid' width="100%" src="https://www.appsdevpro.com/blog/wp-content/uploads/2022/09/Top-Web-Design-Development-Trends-You-Need-to-Know-in-2023.png" alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4'>
                            <RecentPost/>
                        </div>
                    </div>
                    <div className='row blog-detail'>
                        <h1 className='mb-3' style={{ color: '#42ade4' }}> Exploring the Future of Website Development in 2023 and Beyond!
                        </h1>
                        <p className='text-decoration-none h6'>Websites have developed into potent tools that shape our online experiences as the internet has become an essential part of our daily lives. The options for website development are endless as we move into 2023 and beyond, and they promise to radically alter the internet world. Therefore, , hold on tight as we take you on an exciting journey through the future of web development!</p>
                    </div>
                    <div>
                        <div className='row blog-list'>
                            <li><strong> AI-Driven Websites :</strong></li>
                            <p>Consider websites that comprehend your choices and instantly adjust to meet your wants. The way we interact with the web is about to undergo a transformation thanks to artificial intelligence (AI). Websites will become simpler and user-friendly than ever thanks to AI, which will enable chatbots to offer immediate support and personalised content recommendations.</p>
                            <li><strong> Immersive User Experiences :</strong></li>
                            <p>Get ready for a wave of compelling virtual worlds that will be accessed through immersive user experiences. Web development will increasingly rely on virtual and augmented reality, which will enable businesses to offer interactive virtual tours and present their items in 3D, giving users unique experiences.</p>
                            <li><strong> Voice-Activated Interfaces :</strong></li>
                            <p>Users won't only be able to interact with websites using keyboards and touchscreens any longer. Advanced voice recognition technology will enable voice-activated interfaces to go commonplace, allowing users to navigate webpages, conduct searches, and even make transactions using only their voice.</p>
                            <li><strong> Lightning-Fast Load Times :</strong></li>
                            <p>Waiting for webpages to load is a test of patience. Web developers are concentrating on optimising website speed to achieve blazing-fast load times in response to the increased desire for instant gratification. Quickly loading websites will benefit from greater user engagement and improved search engine positioning.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog3