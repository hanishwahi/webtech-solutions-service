import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function PrivacyPolicy() {
    return (
        <>
            <Header />
            <div className='container-fluid py-5'>
                <div className='container-lg'>
                    <div className='row'>
                        <ul>
                            <div className='privacy-policy'>
                                <li>Privacy Policy:</li>
                                <p>At Web Tech Solutions Service, accessible from <Link to="https://webtechsolutionsservice.com/">https://webtechsolutionsservice.com/</Link>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Web Tech Solutions Service and how we use it.<br /><br />

                                    If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.<br /><br />

                                    This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Web Tech Solutions Service. This policy is not applicable to any information collected offline or via channels other than this website</p>
                            </div>
                            <div className='privacy-policy'>
                                <li>Consent</li>
                                <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                            </div>
                            <div className='privacy-policy'>
                                <li>Information we collect</li>
                                <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.<br /><br />

                                    If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.<br /><br />

                                    When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
                            </div>
                            <div className='privacy-policy'>
                                <li>How we use your information</li>
                                <p>We use the information we collect in various ways, including to:</p>
                            </div>
                            <div>
                                <ul style={{ listStyleType: "disc" }}>
                                    <li>Provide, operate, and maintain our website
                                    </li>
                                    <li>Improve, personalize, and expand our website
                                    </li>
                                    <li>Understand and analyze how you use our website
                                    </li>
                                    <li>Develop new products, services, features, and functionality
                                    </li>
                                    <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
                                    </li>
                                    <li>Send you emails</li>
                                    <li>Find and prevent fraud</li>

                                </ul>
                            </div>
                            <div className='privacy-policy'>
                                <li>Log Files</li>
                                <p>Web Tech Solutions Service follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
                            </div>
                            <div className='privacy-policy'>
                                <li>Advertising Partners Privacy Policies</li>
                                <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Web Tech Solutions Service. <br /><br />
                                    Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Web Tech Solutions Service, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.<br /><br />

                                    Note that Web Tech Solutions Service has no access to or control over these cookies that are used by third-party advertisers.</p>
                            </div>
                            <div className='privacy-policy'>
                                <li>Third Party Privacy Policies</li>
                                <p>Web Tech Solutions Service's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.<br /><br />
                                    You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.

                                </p>
                            </div>
                            <div className='privacy-policy'>
                                <li>CCPA Privacy Rights (Do Not Sell My Personal Information)
                                </li>
                                <p>Under the CCPA, among other rights, California consumers have the right to:<br /><br />Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.<br /><br />
                                    Request that a business delete any personal data about the consumer that a business has collected.<br /><br />Request that a business that sells a consumer's personal data, not sell the consumer's personal data.<br /><br />If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
                            </div>
                            <div className='privacy-policy'>
                                <li>Children's Information
                                </li>
                                <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.<br /><br />Web Tech Solutions Service does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                            </div>
                            
                            <div className='privacy-policy'>
                                <li>Contact Us                                </li>
                                <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us. </p>
                            </div>
                        </ul>
                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default PrivacyPolicy