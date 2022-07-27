import React from "react";
import Link from "next/link";
import Image from "next/image";

const Year = new Date().getFullYear();

const Footer = () => {
    return (
        <>
            <footer className="footer_section">
                <div className=" pt-100 pb-70">
                    <div className="row">
                        <div className=" col-lg-3 col-md-6 col-sm-12 text-center">
                            <Image src="/img/logo.svg" alt="logo" width={110} height={36} />

                            <ul className="list-unstyled list-inline mt-3">
                                <li className="list-inline-item mt-2">
                                    <button type="button" className=" light_btn">
                                        {" "}
                                        <i className="ri-apple-fill"></i> IPhone
                                    </button>
                                </li>
                                <li className="list-inline-item mt-2">
                                    <button type="button" className="light_btn">
                                        <i className="ri-google-play-fill"></i> Android
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-menu col-lg-3 col-md-6 col-sm-12 text-center">
                            <h3 >Quick Links</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="/login">Login</Link>
                                </li>
                                <li>
                                    <Link href="/sign-up">Sign up</Link>
                                </li>
                            </ul>
                        </div>

                        <div className=" footer-menu col-lg-3 col-md-6 col-sm-12 text-center">
                            <h3 >Get Food</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="/track-order">Track Order</Link>
                                </li>
                                <li>
                                    <Link href="/locations">Our Locations</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-menu col-lg-3 col-md-6 col-sm-12 text-center">
                            <h3 >About DPS</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="/about-us">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="/support">Support</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="footer-horizontal-rule container" />

                <div className=" container-fluid row mt-5">
                    <div className="footer-socials col-md-6 col-sm-12">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <i className="ri-facebook-fill"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <i className="ri-twitter-fill"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <i className="ri-linkedin-fill"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                    <i className="ri-instagram-fill"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-policies col-md-6 col-sm-12 text-end">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                <Link href="/privacy-policy">Privacy Policy</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link href="/terms-of-service">Terms of Service</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link href="/pricing">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="copyright-area">
                    <p className="text-center">
                        <i className="bx bx-copyright"></i>
                        <span> &copy; {Year}</span> {"  "}
                        DPS Resto.
                    </p>
                </div>
            </footer>
        </>
    );
};


export default Footer;