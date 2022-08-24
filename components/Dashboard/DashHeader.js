import React from "react";
import Image from "next/image";
import Link from "next/link";

const DashHeader = ({ show, showSideBar }) => {
    return (
        <>
            <section className={`dash_header  ${show ? "add_body_padding" : " "}  `}>
                <div className="dash_header_toggle">
                    <i className={`ri-menu-line ${show ? "bx-x" : " "}`} onClick={showSideBar}></i>
                </div>

                <div></div>

                <div className="dropdown ">
                    <a href="#" className="d-flex align-items-center justify-content-center p-3 link-light text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                        <Image src="/img/people/avatar.png" width={50} height={50} className="avatar rounded-circle" alt="avatar" />
                    </a>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                        <li className="text-center">
                            <Image src="/img/people/avatar.png" width={40} height={40} className="avatar rounded-circle" alt="avatar" />
                            <p className="dropdown-item   p-2">Anne Van Schalk</p>
                        </li>
                        <li>
                            <Link  href="/my-account">
                            <a className="dropdown-item">
                                <i className="ri-user-line"></i> <span>Profile </span>
                            </a>
                            </Link>
                            
                        </li>
                        <hr />
                        <li>
                            <a className="dropdown-item" href="#">
                                <i className="ri-logout-circle-line"></i> <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default DashHeader;
