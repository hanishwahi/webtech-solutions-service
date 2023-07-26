import React, { useState } from 'react';
import trainingoffer from '../../Images/trainingoffer.webp'

function TrainingOffer() {
    const [show, setShow] = useState(true);
    const [timeline, setTimeline] = useState(5);


    useEffect(() => {
        setShow(true);

        const interval = setInterval(() => {
            if (timeline === 1) {
                setTimeline(timeline);
                setShow(false);
            }
            else {
                setTimeline((timeline) => timeline - 1);
            }

        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [timeline]);






    return (
        <>


            {show && (
                <div className='container-fluid fixed-bottom'>
                    <div className='row'>
                        <div className='col-lg-4 border px-0'>
                            <img src={trainingoffer} alt='' className='img-fluid' />
                            <h1 className='training-offer'>{timeline}</h1>
                        </div>
                    </div>
                </div>


            )}
        </>
    );
}

export default TrainingOffer;
