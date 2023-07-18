import React from 'react'

function Faq() {
    return (
        <>
            <div className="faq-section wf-section my-5">
                <div className="faq-main-wrapper">
                    <h3 className="faq-heading">FAQ's</h3>
                </div>

                <div className='container pb-5'>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What services does a digital marketing agency provide?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Digital Marketing Agencies</strong>  offer a range of services, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, web design and development, analytics and reporting, online reputation management, and digital strategy consulting  card.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How can a digital marketing agency help my business?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>A Digital Marketing Agency</strong>   can help your business by creating and implementing effective marketing strategies tailored to your specific goals and target audience. They can increase your online visibility, drive website traffic, generate leads, improve brand awareness, engage with customers on social media, and optimize your digital presence for better performance and results.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How do I choose the right digital marketing agency for my business?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    When choosing a
                                    <strong> Digital Marketing Agency,</strong>   consider factors such as their experience and expertise in your industry, the services they offer, their track record of success, client testimonials and case studies, the team's qualifications, communication and reporting processes, and their understanding of your business goals and objectives.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    How long does it take to see results from digital marketing efforts?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    The timeline for seeing results from
                                    <strong> Digital Marketing</strong>   efforts can vary depending on factors such as the competitiveness of your industry, the specific strategies implemented, the budget allocated, and the current state of your digital presence. While some tactics may yield immediate results, such as paid advertising, others like SEO and content marketing may require several months to see significant impact.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    How much does digital marketing agency services cost?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    The cost of
                                    <strong> Digital Marketing</strong> agency services can vary widely depending on factors such as the scope of services the size of your business the competitiveness of your industry and the higher level of customization required. Some agencies offer packaged services with fixed pricing, while others provide custom quotes based on individual business needs.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSix">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    How can I measure the effectiveness of my digital marketing campaigns?
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong> Digital Marketing Agencies</strong> typically use various metrics and tools to measure the effectiveness of campaigns. These can include website analytics (traffic, conversions, bounce rate), social media engagement metrics (likes, shares, comments), email open rates and click-through rates, search engine rankings, lead generation and conversion rates, and return on investment (ROI) calculations.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq