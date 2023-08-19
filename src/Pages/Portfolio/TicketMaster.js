import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import IMG1 from '../../Images/Expert Trainer.png'

function CarParts() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className="container-fluid portfolio-nu-main">
                <div className="container-lg">
                    <div className="row portfolio-nu">
                        <h1>Car Parts</h1>
                    </div>
                    <div className="row">
                        <Carousel responsive={responsive}>
                            <div className='p-3'>
                                <div className='border'>
                                    <img src={IMG1} alt="" className='img-fluid' />
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='border'>
                                    <img src={IMG1} alt="" className='img-fluid' />
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='border'>
                                    <img src={IMG1} alt="" className='img-fluid' />
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='border'>
                                    <img src={IMG1} alt="" className='img-fluid' />
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='border'>
                                    <img src={IMG1} alt="" className='img-fluid' />
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='border'>
                                    <img src={IMG1} alt="" className='img-fluid' />
                                </div>
                            </div>


                        </Carousel>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CarParts