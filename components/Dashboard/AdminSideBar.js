import React from "react";
import Link from "next/link";
import Adminlinks from "../../data/admin-dash-links";

const AdminSideBar = ({ show }) => {
    return (
        <>
            <div className={`dash_sidebar ${show ? "review" : " "} `}>
                <nav className="dash_nav">
                    <div className="main_links">
                        <Link href="/">
                            <a className="nav_logo">
                                <span className="nav_logo_name">DPS </span>
                            </a>
                        </Link>

                        <div className="nav_list mt-5">
                            {Adminlinks.map((link) => (
                                <Link href={link.url} key={link.id}>
                                    <a className="nav_link">
                                        <i className={link.i_class}></i> <span>{link.title}</span>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <a href="#" className="nav_link">
                        {" "}
                        <i className="ri-logout-circle-line"></i> <span className="dash_nav_name">Logout</span>{" "}
                    </a>
                </nav>
            </div>
        </>
    );
};

export default AdminSideBar;
