import React from 'react';
import Link from '../utils/ActiveLink';
import Image from 'next/image'

const SideBar = () => {
  return (
    <>
    {/* Sidebar Modal */}
    <div className='sidebarModal modal left'  id='mainSideBar'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="close" data-bs-dismiss="modal">
                            <i className='ri-close-line'></i>
                        </button>

                        <div className="modal-body">
                            <div className="title">
                                <Link href="/">
                                    <a className="d-inline-block">
                                    <Image src="/img/logo.svg" alt="logo" width={110} height={36} />
                                    </a>
                                </Link>
                            </div>

                            <div className="sidebar-content text-center">
                            <div className="sidebar-btn">
                                    <Link href="/signup">
                                        <button className="default_btn" data-bs-dismiss="modal">
                                            Sign up
                                        </button>
                                    </Link>
                                </div>

                                <div className="sidebar-btn">
                                    <Link href="/login" >
                                        <button className="light_btn" data-bs-dismiss="modal">
                                            Login
                                        </button>
                                    </Link>
                                </div>     

                                 <div className="sidebar-btn mt-5"> 
                            <Link href="/admin">
                                        <span className="admin_link" data-bs-dismiss="modal">
                                            Admin Portal
                                        </span>
                                    </Link>
                                    </div>                           

                            </div>

                           

                            <div className="sidebar-contact-info">
                                <h3>DPS Resto</h3>

                                <ul className="info-list">
                                    <li>
                                        <i className="ri-phone-fill"></i> 
                                        <a href="tel:+11234567890">+44 (28) 523 1212</a>
                                    </li>
                                    
                                    <li>
                                        <i className="ri-mail-line"></i> 
                                        <a href="mailto:hello@ozen.com">info@dpsresto.com</a>
                                    </li>

                                    <li>
                                        <i className="ri-map-pin-line"></i> 
                                        15 Bertram Road, Sea Point <br /> 8005, New York.
                                    </li>
                                </ul>
                            </div>

                            <ul className="sidebar-social-list">
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
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                        <i className="ri-instagram-fill"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Sidebar Modal */}
    
    </>
  )
}

export default SideBar