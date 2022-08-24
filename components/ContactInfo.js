import React from 'react'

const ContactInfo = () => {
  return (
    <>
    <div className="contact_info_area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="contact_address">
                                <h3>Contact Address:</h3>
                                <p>At DPS Resto we only offer the best yummy food.Visit our restaurant and enjoy more.</p>

                                <ul className="address-info">
                                    <li>
                                    <i className="ri-phone-line"></i>
                                        <a href="tel:3128959800">+44 (28) 523 1212</a>
                                    </li>

                                    <li>
                                        <i className="ri-global-line"></i>
                                        <a href="mailto:info@dpsresto.com">info@dpsresto.com</a>
                                    </li>

                                    <li>
                                        <i className="ri-map-pin-line"></i>
                                        15 Bertram Rd, Sea Point 8005, New York.
                                    </li>
                                </ul>

                                <ul className="address-social">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <i className="ri-facebook-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <i className="ri-twitter-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                            <i className="ri-linkedin-fill"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="map">
                                <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=new%20york+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ContactInfo