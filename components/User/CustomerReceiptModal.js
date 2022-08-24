import React from 'react'
import OrderReceipt from '../Dashboard/OrderReceipt'

const CustomerReceiptModal = ({orders}) => {

  
  return (
    <>
    {orders.map((order) => (
                <div className="modal fade receipt_modal" id={  order.customer.replace(/ +/g, "").concat(order.order_number)   } tabIndex="-1" aria-labelledby="receiptModal" aria-hidden="true" key={order.order_number}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fw-bold" id="receiptModal">
                                    Receipt for Order {order.order_number}
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="text-end">
                                    <button className="primary_btn">
                                        Download Slip <i className="ri-download-cloud-2-line"></i>
                                    </button>
                                </div>

                                <OrderReceipt
                                    order_number={order.order_number}
                                    date={order.date}
                                    customer={order.customer}
                                    amount={order.amount}
                                    card={order.card}
                                    card_number={order.card_number}
                                    items={order.items}
                                    quantity={order.quantity}
                                />
                            </div>
                            <div className=" modal-footer">
                                <ul className="list-unstyled">
                                    <li>
                                        <picture>
                                            <img src="/img/logo.png" width={50} height={50} className="avatar rounded-circle" alt="avatar" />
                                        </picture>
                                    </li>
                                    <li>
                                        <h3>DPS Resto</h3>
                                    </li>
                                    <li>
                                        <i className="ri-phone-fill"></i>
                                       +44 (28) 523 1212
                                    </li>

                                    <li>
                                        <i className="ri-mail-line"></i>
                                        info@dpsresto.com
                                    </li>

                                    <li>
                                        <i className="ri-map-pin-line"></i>
                                        15 Bertram Road, Sea Point <br /> 8005, New York.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
    </>
  )
}

export default CustomerReceiptModal