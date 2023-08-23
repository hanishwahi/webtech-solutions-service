import React from 'react'
import NuCosmetic from './NuCosmetic'
import CarParts from './CarParts'

function PortfolioSlider() {
    return (
        <>
            <div className="container-fluid">
                <div className="container-xl">
                    <div className="row ">
                        <div className="col-lg-4 col-6 px-0">
                            <NuCosmetic />
                        </div>
                        <div className="col-lg-4 col-6 px-0">
                            <CarParts />
                        </div>
                        <div className="col-lg-4 col-6 px-0">
                            <NuCosmetic />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default PortfolioSlider