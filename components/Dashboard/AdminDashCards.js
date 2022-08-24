import React from "react";

const AdminDashCards = () => {
    return (
        <>
            <div className="admin_cards_area ">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single_card d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <span className="today">Revenue</span>
                                    <h6>
                                        $63,000 <span>+55%</span>
                                    </h6>
                                </div>

                                <div className="flex-shrink-0 align-self-center">
                                    <i className="ri-exchange-dollar-line"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single_card d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <span className="today">Customers</span>
                                    <h6>
                                        2,300 <span>+3%</span>
                                    </h6>
                                </div>

                                <div className="flex-shrink-0 align-self-center">
                                    <i className="ri-user-follow-line"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single_card d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <span className="today">Deliveries</span>
                                    <h6>
                                        +3,462 <span className="hot">-2%</span>
                                    </h6>
                                </div>

                                <div className="flex-shrink-0 align-self-center">
                                    <i className="ri-e-bike-2-fill"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single_card d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <span className="today">Sales Of This Week</span>
                                    <h6>
                                        $103,450% <span>+5%</span>
                                    </h6>
                                </div>

                                <div className="flex-shrink-0 align-self-center">
                                    <i className="ri-line-chart-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashCards;
