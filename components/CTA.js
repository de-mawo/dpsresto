import React from 'react'
import Image from 'next/image'

const CTA = () => {
  return (
   <>
     <section className="cta_area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="delivery-content">
                            <span>Order Now</span>
                            <h3>Get order delivered or pick up from Restaurant</h3>

                            <div className="delivery-btn">
                                <a href="#" className="default_btn">
                                   Delivery
                                    <span></span>
                                    <i className="flaticon-play-button"></i>
                                </a>

                                <a href="#" className="light_btn">
                                   Pick Up
                                    <span></span>
                                    <i className="flaticon-play-button"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="delivery-image">
                            <Image src="/img/order.png" width={512} height={512}  alt="image"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="global-shape">
                <Image src="/img/world-map.png" width={1000} height={1000} alt="image"/>
            </div>
        </section>
   </>
  )
}

export default CTA