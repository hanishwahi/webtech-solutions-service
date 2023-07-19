import React from 'react'
import PPCTeamimg from '../../Images/ppc-team-img.webp'

function PPCTeam() {
    return (
        <>
            <div className='container-fluid py-4 py-md-5'>
                <div className='container-lg'>
                    <div className='row ppc-content text-center'>
                        <h1>We Have an Expert and Specialized PPC Team</h1>
                    </div>
                    <div className='row py-5 justify-content-center'>
                        <div className='col-lg-6 align-self-center'>
                            <div className='ppc-content'>
                                <p> Our PPC team is not only another marketing team, but a bunch of experts who specialized in what they do and what market demands. Our dedicated team is the real backbone of the company and they are the reasons behind our countless success stories. Our market-focused and demanding PPC services are like icing on the cake for our valuable clients looking for instant results and high ROI.</p>
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-8 align-self-center'>
                            <img width="100%" height="100%" src={PPCTeamimg} alt='PPC Experts' className='img-fluid' />
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}

export default PPCTeam