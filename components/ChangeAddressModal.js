import React from 'react'
import EnterAddress from './EnterAddress'

const ChangeAddressModal = () => {
  return (
    <>
    {/* <!-- Current Location Modal --> */}
    <div className="modal fade" id="currentLocationModal" tabIndex="-1" aria-labelledby="currentLocationModal" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="currentLocationModal">
                                Delivery Address
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <EnterAddress />
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ChangeAddressModal