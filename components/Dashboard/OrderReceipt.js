import React from "react";

const OrderReceipt = ({ order_number, date, customer, amount, card, card_number, items, quantity }) => {
    return (
        <>
            <div className="order_receipt mt-5">
                <h5> Hi {customer},</h5>
                <p>
                    Receipt for your purchase on {date} for Order {order_number}.{" "}
                </p>
                <p>
                    This purchase will appear as DPS Resto on your credit card statement for your
                    <strong>{card === "visa" ? <span className="visacard ms-2 me-2">Visa</span> : <span className="mastercard ms-2 me-2">MasterCard</span>} </strong>
                    card ending in <strong className="card_number">{card_number}</strong>.{" "}
                </p>
                <div className="row">
                    <hr />
                    <div className="col-8">
                        <h5> Items</h5>
                    </div>
                    <div className="col-4 text-end">
                        <h5> Quantity</h5>
                    </div>
                    <hr />
                    <div className="col-8">{items}</div>
                    <div className="col-4 text-end">{quantity}</div>
                    <div className="col-8 mt-5 amount text-end">Total Amount</div>
                    <div className="col-4  mt-5 amount text-end">${amount}</div>

                    <hr />
                </div>
                <br />
                <p>If you have any questions about this order, reach out to our support team for help. </p>
                <br />
            </div>
        </>
    );
};

export default OrderReceipt;
