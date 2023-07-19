import React from 'react'
import Tabburajput from '../../Images/tabbu-rajput.webp'
import Nucosmetic from '../../Images/nucosmetic.webp'
import Rapidtax from '../../Images/rapidtax.webp'

function Testmonial() {
    return (
        <>


            <div className='container-fluid py-lg-5 py-3'>
                <div className='container-lg'>
                    <div className='row career-001 text-center mb-3'>
                        <h1>Our Clients</h1>
                        <p>We want to enhance our clients with most creative get together arrangements and assist them with utilising less while achieving more. Our specialised architects can help with complete gathering applications. We are perceived as specialised specialists for get together arrangements across India. At Thavertech, our central goal is to give great gathering arrangements and a serious level of responsiveness to engage our clients to be more useful, form a superior quality item, and keep a protected climate for their labourers. Our clients value our endeavours and furnish us with positive input..</p>
                    </div>
                </div>

                <div id="carouselExampleControls" className="carousel slide text-center carousel-dark" data-mdb-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img width="100%" height='100%' className="rounded-circle border shadow-1-strong mb-4"
                                src={Tabburajput} alt="Client Reviews"
                                style={{ width: "150px" }} />
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8 col-8 col-sm-9">
                                    <h5 className="mb-3">Tabbu Rajput</h5>
                                    <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2"></i>
                                        "Working with Webtech Solutions has been an incredible experience. From start to finish, they demonstrated professionalism, expertise, and a genuine commitment to delivering exceptional service.
                                    </p>
                                </div>
                            </div>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="far fa-star fa-sm"></i></li>
                            </ul>
                        </div>
                        <div className="carousel-item">
                            <img className="rounded-circle border shadow-1-strong mb-4"
                                src={Nucosmetic} alt="Client Reviews"
                                style={{ width: "150px" }} />
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8 col-8 col-sm-9">
                                    <h5 className="mb-3">NU Cosmetics</h5>

                                    <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2"></i>
                                        WebTech Solutions deserves every bit of praise for the outstanding service they provided. From start to finish, they exceeded my expectations in every aspect.
                                    </p>
                                </div>
                            </div>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                            </ul>
                        </div>
                        <div className="carousel-item">
                            <img className="rounded-circle border shadow-1-strong mb-4"
                                src={Rapidtax} alt="Client Reviews"
                                style={{ width: "150px" }} />
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8 col-8 col-sm-9">
                                    <h5 className="mb-3">Rapid Tax</h5>

                                    <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2"></i>
                                        The level of professionalism displayed by WebTech Solutions was truly remarkable. They were punctual, reliable, and demonstrated a deep understanding of their field. Their passion for their work shone through in every interaction we had.
                                    </p>
                                </div>
                            </div>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                            </ul>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>



        </>
    )
}

export default Testmonial