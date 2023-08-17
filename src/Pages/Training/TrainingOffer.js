import React, { useState, useEffect } from 'react';
import trainingoffer from '../../Images/trainingoffer.webp';
import { Link } from 'react-router-dom';

function TrainingOffer() {
    const [show, setShow] = useState(true);
    const [timeline, setTimeline] = useState(5);

    useEffect(() => {
        

        const interval = setInterval(() => {
            if (timeline === 1) {
                setTimeline(timeline);
                setShow(false);
            } else {
                setTimeline((timeline) => timeline - 1);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [timeline]);

    const closeAd = () => {
        setShow(false);
    };

    return (
        <>
            {show && (
                <div className='container-fluid fixed-bottom'>
                    <div className='row'>
                        <Link>  
                            <div className='col-lg-7 border px-0 position-main'>
                                 <img loading="lazy" src={trainingoffer} alt='' className='img-fluid' />
                                <div className='border px-0'>
                                    <h1 className='training-offer'>{timeline}</h1>
                                    <h3 onClick={closeAd} className='training-cross'>
                                       
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
