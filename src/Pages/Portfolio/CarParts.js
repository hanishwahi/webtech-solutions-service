import React from 'react'
import CarParts from '../../Images/carsPartPortfolio.webp'
import carsPartsCaraouselWal from '../../Images/carsPartsCaraouselWall.webp'

function NuCosmetic() {

    return (
        <>
            <button type="button" class="btn shadow-none position-rel" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="viewMoreButton">
                    <h1>Car Parts</h1>
                </div>
                <div className=''>
                    <img src={CarParts} alt="" className='img-fluid' />
                </div>
                <div className="viewMoreButton">
                    <h1>View More</h1>
                </div>
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Car Parts</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col">
                                    <img width="100%" src={carsPartsCaraouselWal} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NuCosmetic