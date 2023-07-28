import React, { useState, useEffect } from 'react';
import trainingoffer from '../../Images/trainingoffer.webp';
import { Link } from 'react-router-dom';

function TrainingOffer() {
    const [show, setShow] = useState(false);
    const [timeline, setTimeline] = useState(5);

    useEffect(() => {
        setShow(true);

        const interval = setInterval(() => {
            if (timeline === 1) {
                setTimeline(0); // Reset the timer when timeline reaches 1
                setShow(false);
            } else {
                setTimeline((prevTimeline) => prevTimeline - 1);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const closeAd = () => {
        setShow(false);
    };

    return (
        <>
            {show && (
                <div className='container-fluid fixed-bottom'>
                    <div className='row'>
                        <Link> {/* Specify the destination URL */}
                            <div className='col-lg-7 border px-0 position-main'>
                                <img src={trainingoffer} alt='' className='img-fluid' />
                                <div className='border px-0'>
                                    <h1 className='training-offer'>{timeline}</h1>
                                    <h3 onClick={closeAd} className='training-cross'>
                                        {/* Use className for applying classes */}
                                        <i className="fa-solid fa-xmark"></i>
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default TrainingOffer;
