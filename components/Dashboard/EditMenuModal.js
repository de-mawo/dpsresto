import React from "react";

const EditMenuModal = ({data}) => {

    return (
        <>
{data.map((item) => (
       
            <div className="modal fade" id={item.title.replace(/ +/g, "")} tabIndex="-1" aria-labelledby="editMenuModal" aria-hidden="true" key={item.id}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bold" id="editMenuModal">
                                Edit Menu Item
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
                                                    <input type="text" name="title" id="title" className="form-control" value={item.title} readOnly/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <i className="ri-money-dollar-circle-line"></i>
                                                    <input type="number" name="price" id="price" className="form-control"  value={item.price} readOnly/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <h5 className="fw-bold">Edit Menu Image</h5>
                                                <picture> 
                                                <img src={item.image} width={100} height={100} alt={item.title} className="rounded-circle" />
                                                </picture>
                                                <div className="form-group">
                                                    <i className="ri-image-line"></i>
                                                    <input type="file" name="menuImage" id="menuImage" accept="image/*" className="form-control" placeholder="Menu Image" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <i className="ri-file-copy-2-line"></i>
                                                    <input type="text" name="category" id="category" className="form-control" value={item.category} readOnly/>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <i className="ri-booklet-line"></i>
                                                    <input type="text" name="description" id="description" className="form-control" value={item.description} readOnly/>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <i className="ri-check-double-line"></i>
                                                    <div className=" mb-3">
                                                        <input type="text" className="form-control" name="foodMenuChoice" placeholder=" Edit Food Menu Choice" />
                                                        <button className="outline_btn" type="button">
                                                           Edit Choice
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <h5 className=" fw-bold">Edit Menu Extra Option Title & Price</h5>
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
                                                        <input type="text" className="form-control" name="preparation" placeholder="Edit Preparation Type e.g Well-done" />
                                                        <button className="outline_btn" type="button">
                                                            Edit Prep Type
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 mt-5">
                                                <button type="submit" className="outline_btn m-2">
                                                    Save
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
            ))}
        </>
    );
};

export default EditMenuModal;
