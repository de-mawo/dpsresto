import React from "react";
import ChangePayment from ".././ChangePayment";
import ChangeAddressModal from ".././ChangeAddressModal";

const GeneralInfo = () => {
    return (
        <>
        <div className='pt-5 section_title text-center'>
        <h3>General Information</h3>
        </div>
            <section className="account_details_area  container">
            <div className='row'> 
                <div className="  col-lg-6">
                    <div className="py-3 text-center px-3">
                        <div className="avatar ">
                            <picture>
                                <img src="/img/people/avatar.png" alt="avatar" />
                            </picture>

                            <span>
                                {" "}
                                Change Pic
                                <input type="file" name="avatar-img-file" id="img-file-up" accept="image/*" />
                            </span>
                        </div>
                        <h1>{}</h1>
                        <div className="profile_form py-5">
                            <form>
                                <div className="row px-3">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                        <i className="ri-mail-line"></i>
                                            <input type="email" name="email" id="email" className="form-control" placeholder="catherinechucks@gmail.com" disabled={true} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                        <i className="ri-user-fill"></i>
                                            <input type="text" name="name" className="form-control" placeholder="Name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                        <i className="ri-phone-fill"></i>
                                            <input type="text" name="cell" className="form-control" placeholder="Cell Number" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                        <i className="ri-key-fill"></i>
                                            <input type="password" name="password" id="password" className="form-control" placeholder="New Password" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                        <i className="ri-key-fill"></i>
                                            <input type="password" name="cf_password" className="form-control" placeholder="Confirm New Password" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 text-start">
                                        <button type="submit" className="secondary_btn">
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className=" col-lg-6">
                    <h4 className="py-3 ps-2">Recent Delivery Address</h4>
                    <div className="row px-2">
                        <div className="col-2">
                            <i className="ri-map-pin-time-fill"></i>
                        </div>
                        <div className="col-2">
                            <p>Home</p>
                        </div>
                        <div className="col-6">
                            <p>77 Regent Road, Seapoint, 8005 </p>
                        </div>
                        <div className="col-2 ">
                            <i className="ri-pencil-fill " data-bs-toggle="modal" data-bs-target="#currentLocationModal"></i>
                        </div>
                    </div>

                    <hr className="my-4" />
                  
                    <h4 className="ps-2"> Payment Method</h4>
                    <ChangePayment />
                 
                    <hr className="my-4" />

                 <div className="mt-5 text-center"> 
                    <h4 className="ps-2"> Delete Account</h4>
                            <button className="secondary_btn" >
                             Delete
                            </button>
                            </div>
                   
                </div>
                </div>
            </section>

            <ChangeAddressModal />
        </>
    );
};

export default GeneralInfo;
