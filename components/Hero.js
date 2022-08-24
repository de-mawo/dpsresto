import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <>
            <section className="hero_area ">
                <div className="hero-graphics">
                    <picture>
                        <img src="/img/graphics/1.png" alt="hero_img" className="bgi hg-1" />
                        <img src="/img/graphics/2.png" alt="hero_img" className="bgi hg-3" />
                        <img src="/img/graphics/4.png" alt="hero_img" className="bgi hg-4" />
                        <img src="/img/graphics/5.png" alt="hero_img" className="bgi hg-5" />
                        <img src="/img/graphics/6.png" alt="hero_img" className="bgi hg-6" />
                        <img src="/img/graphics/3.png" alt="hero_img" className="bgi hg-7" />
                    </picture>
                </div>

                <div className="container">
                    <div className="hero-content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="hero-img">
                                    <Image src="/img/hero_img.png" width={509} height={490} alt="hero-img" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="hero-text">
                                    <h6>... choose the best</h6>
                                    <h2>Yummy Food</h2>
                                </div>
                                <Link href="/menu">
                                    <a className="primary_btn">Get Food Now</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
