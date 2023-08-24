import React from 'react'
import BusinessSolution from './../../Images/businessSolution.webp'

function BusinessSolutions() {
    return (
        <>

            <div className="container-fluid">
                <div className="container-xl pt-lg-5 pt-3">
                    <div className="row packages-main">
                            <h1>All major Business Solution</h1> 
                    </div>
                    <div className="row">
                        <img src={BusinessSolution} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusinessSolutions