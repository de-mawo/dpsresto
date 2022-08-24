import React from "react";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
    return (
        <>
            <section className="cta_area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="delivery-content">
                                <Link href="/menu">Order Now</Link>

                                <h3>Get your order delivered or pick it up from our Restaurant</h3>

                                <div className="delivery-btn">
                                    <button className="primary_btn">Delivery</button>

                                    <button className="outline_btn">Pick Up</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="delivery-image">
                                <Image src="/img/deliver.png" width={800} height={450} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CTA;
