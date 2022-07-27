import React from "react";
import ChangeAddressModal from "./ChangeAddressModal";
const address = `20 Wail Street, Suite 330, Boston, MA`;

const Filter = () => {
    return (
        <>
            <section className="filter_by_container container">
                <div className="row">
                    <div className=" col-md-6 ">
                        <button className="outline " data-bs-toggle="modal" data-bs-target="#currentLocationModal">
                            <i className="ri-map-pin-range-line"></i>
                            {address.substr(0, 20) + "..."} <strong>Change</strong>
                        </button>
                    </div>
                    <div className="dropdown col-md-6 d-flex ">
                        <button className="outline  dropdown-toggle" type="button" id="sortBy" data-bs-toggle="dropdown" aria-expanded="false">
                            Default Sorting
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="sortBy">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Sort by price: low to high
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Sort by popularity
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Sort by category
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Sort by price: high to low
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <ChangeAddressModal/>
        </>
    );
};

export default Filter;
