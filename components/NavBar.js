import React, { useEffect, useState } from "react";
import Link from "../utils/ActiveLink";
import Image from "next/image";
import SideBar from "./SideBar";

const NavBar = () => {
    const [menu, setMenu] = useState(true);

    const toggleNavbar = () => {
        setMenu(!menu);
    };

    useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    });

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="main-navbar">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <Image src="/img/logo.svg" alt="logo" width={110} height={36} />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={menu ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right"}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={menu ? "collapse navbar-collapse" : "collapse navbar-collapse show"} id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a className="nav-link">Home</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/menu">
                                            <a className="nav-link">Menu</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/track-order" activeClassName="active">
                                            <a className="nav-link">Track-Order</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/cart" activeClassName="active">
                                            <div className="cart_btn">
                                                <a className="nav-link ">
                                                    <i className="ri-shopping-cart-2-fill "></i>
                                                    {/* <span>0</span> */}
                                                </a>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="others-options d-flex align-items-center">
                                <div className="option-item">
                                    <div className="side-menu-btn">
                                        <i className="ri-menu-fold-line" data-bs-toggle="modal" data-bs-target="#mainSideBar"></i>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <SideBar />
        </>
    );
};

export default NavBar;
