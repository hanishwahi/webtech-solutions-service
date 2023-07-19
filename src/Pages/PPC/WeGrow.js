import React from 'react'
import more_leads_icon from '../../Images/more_leads_icon.png'
import boost_traffic from '../../Images/boost_traffic.png'
import target_audience from '../../Images/target_audience.png'
import Increase_Sale from '../../Images/Increase_Sale.png'


function WeGrow() {
    return (
        <>
            <div className='container-fluid how-it-works-section'>
                <div className='container-lg'>
                    <div className='row text-center py-5 we-grow-content'>
                        <h1>How Can We Help You Grow?</h1>
                        <p>Web tech solutions services is an elite PPC management company and we recommend PPC solutions as the one yet crucial digital marketing move to get maximum brand exposure within the fastest possible timeline. We pack a ‘POWERFUL PUNCH’ when we boost our PPC services with your exclusively customized campaigns. For the PPC budget that you set, we prepare campaigns that can bump up your advertisements on different search engines that precisely cater to your targeted customer base.</p>
                    </div>
                    <div className='row pb-5'>
                        <div className='col-lg-3 col-sm-6 mb-3 '>
                            <div className='shadow bg-white p-4 text-center we-grow-content'>
                                <img className='mb-3'  width={80} src={more_leads_icon} alt='Lead Generation Service' />
                                <h2>More Leads</h2>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 mb-3 '>
                            <div className='shadow bg-white p-4 text-center we-grow-content'>
                                <img className='mb-3'  width={80} src={boost_traffic} alt='Boost Your Traffic Advice' />
                                <h2>Boost Traffic</h2>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 mb-3 '>
                            <div className='shadow bg-white p-4 text-center we-grow-content'>
                                <img className='mb-3'  width={80} src={target_audience} alt='Best Target Audience Strategy' />
                                <h2>Target Audience</h2>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 mb-3 '>
                            <div className='shadow bg-white p-4 text-center we-grow-content'>
                                <img className='mb-3'  width={80} src={Increase_Sale} alt='Increase your sale' />
                                <h2>Increase Sale</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default WeGrow