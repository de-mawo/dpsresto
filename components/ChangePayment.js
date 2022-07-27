import React from "react";


const ChangePayment = () => {

    return(
        <>

       <strong>  <a className="green-text" role="button" data-bs-toggle="modal" data-bs-target="#paymentModal">Change</a> </strong>

        {/* <!-- Change Payment Modal --> */}
            <div className="modal fade" id="paymentModal" tabIndex="-1" aria-labelledby="paymentModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="paymentModal">Payment</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-2">
                                    <i className="ri-bank-card-fill"></i> 
                                </div>
                                <div className="col-6"></div>
                                <div className="col-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="cardPayment" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <p><strong>Cash</strong></p>
                                </div>
                                <div className="col-6"></div>
                                <div className="col-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="cardPayment" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
        </>
    )
}

export default ChangePayment;