import React, { useState, useEffect } from 'react'

function CounterRecord() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
 

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter1 === 95) {
                setCounter1(counter1);
            }
            else {
                setCounter1((counter1) => counter1 + 1);
            }
        }, 50);

        return () => {
            clearInterval(interval);
        };
    }, [counter1]);



    useEffect(() => {
        const interval2 = setInterval(() => {
            if (counter2 === 130) {
                setCounter2(counter2)
            }
            else {
                setCounter2((counter2) => counter2 + 1);

            }
        }, 40);

        return () => {
            clearInterval(interval2);
        };
    }, [counter2])

    useEffect(() => {
        const interval3 = setInterval(() => {
            if (counter3 === 100) {
                setCounter3(counter3)
            }
            else {
                setCounter3((counter3) => counter3 + 1);
            }
        }, 47);

        return () => {
            clearInterval(interval3);
        };
    }, [counter3])

    return (
        <>
            <div className='container-fluid my-md-5 my-3 py-md-5 py-3 counter-bg'>
                <div className='container'>
                    <div className='row justify-content-lg-center'>
                        <div className='col-lg-4 col-sm-6 mb-3 mb-md-0 '>
                            <div className='counter-box'>
                                <div className="col-lg-12 col-sm-12 col-12 Counter-1">{counter1}%</div>
                                <div className='col-lg-12 col-sm-12 col-12 record-004'>
                                    <h2>Increase your clients retention rates</h2></div>
                                    </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-3 mb-md-0'>
                        <div className='counter-box'>
                                <div className="col-lg-12 col-sm-12 col-12 Counter-1">{counter2}+</div>
                                <div className='col-lg-12 col-sm-12 col-12 record-004'>
                                    <h2>WebTech <br/>employees</h2></div>
                                    </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-3 mb-md-0'>
                        <div className='counter-box'>
                                <div className="col-lg-12 col-sm-12 col-12 Counter-1">{counter3}%</div>
                                <div className='col-lg-12 col-sm-12 col-12 record-004'><h2>Tested and proven concepts</h2></div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterRecord