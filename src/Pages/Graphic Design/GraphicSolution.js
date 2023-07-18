import React from 'react'
import graphicDsign1 from '../../Images/graphic-designing.webp'
import ContactForm from '../ContactForm/ContactForm'

function GraphicSolution() {
    return (
        <>
            <div className='containerfluid how-it-works-section mt-lg-5 py-5'>
                <div className='container-lg'>
                    <div className='row GraphicSolution-content mb-4'>
                        <h1>One-Stop Graphic Solution on Marketing Materials and <br />
                            Digital Creatives for All Niche.</h1>
                    </div>
                    <div className='row GraphicSolution-content mb-4'>
                        <h3>Discover the power of innovation and high-performance website development with our exceptional team of web designers. We possess the skills and expertise to create dynamic and captivating websites of any complexity level.</h3>
                    </div>
                    <div className='row GraphicSolution-content'>
                        <ul>
                            <li>Experience outstanding and attention grabbing visuals for your business.</li>
                            <li>Develop a great impression on your prospects mind.</li>
                            <li>Establish a bright profile for your business online.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container-fluid my-3 my-lg-5'>
                <div className='row'>
                    <div className='col px-0'>
                        <img className='overflow-hidden px-0 img-fluid'
                            src={graphicDsign1}
                            alt='' />
                    </div>
                </div>
            </div>
            <ContactForm/>
        </>
    )
}

export default GraphicSolution