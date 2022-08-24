import React from "react";

const AddMenuModal = () => {
    return (
        <>
            <div className="modal fade" id="addMenuModal" tabIndex="-1" aria-labelledby="addMenuModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bold" id="addMenuModal">
                                Add Menu Item
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="py-3 text-center px-3">
                                <div className="add_item_form py-5">
                                    <form id="addMenuForm">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <i className="ri-price-tag-2-line"></i>
                                                    <input type="text" name="title" id="title" className="form-control" placeholder="Add Title" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <i className="ri-money-dollar-circle-line"></i>
                                                    <input type="number" name="price" id="price" className="form-control" placeholder="Add Price" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <h5 className="fw-bold">Add Menu Image</h5>
                                                <div className="form-group">
                                                    <i className="ri-image-line"></i>
                                                    <input type="file" name="menuImage" id="menuImage" accept="image/*" className="form-control" placeholder="Menu Image" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <i className="ri-file-copy-2-line"></i>
                                                    <input type="text" name="category" id="category" className="form-control" placeholder="Add Category" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <i className="ri-booklet-line"></i>
                                                    <input type="text" name="description" id="description" className="form-control" placeholder="Add Description" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <i className="ri-check-double-line"></i>
                                                    <div className=" mb-3">
                                                        <input type="text" className="form-control" name="foodMenuChoice" placeholder=" Add Food Menu Choice" />
                                                        <button className="outline_btn" type="button">
                                                            Add Choice
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <h5 className=" fw-bold">Add Menu Extra Option Title & Price</h5>
                                            <div className="col-4">
                                                <div className="form-group">
                                                    <div className=" mb-3">
                                                        <input type="text" className="form-control" name="extraTitle" placeholder="Extra Title" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-group">
                                                    <div className=" mb-3">
                                                        <input type="number" className="form-control" name="extraOptionPrice" placeholder="Price" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-group">
                                                    <button className="outline_btn" type="button">
                                                        + Extra
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className=" mb-3">
                                                        <input type="text" className="form-control" name="preparation" placeholder=" Add Preparation Type eg Well-done" />
                                                        <button className="outline_btn" type="button">
                                                            Add Prep Type
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 mt-5">
                                                <button type="submit" className="outline_btn m-2">
                                                    Add
                                                </button>

                                                <button type="button" className="outline_btn m-2" data-bs-dismiss="modal">
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddMenuModal;
