import React from 'react'
import ReceiptModal from './ReceiptModal'

const OrdersTable = ({orders}) => {
  return (
    <>
    <div className="dashboard_table  container">
                <div className="table-responsive text-nowrap">
                    <table className="table align-middle mb-0 text-center">
                        <thead className="sticky-top bg-white">
                            <tr>
                                <th scope="col">ORDER #</th>
                                <th scope="col">DATE</th>
                                <th scope="col">CUSTOMER</th>
                                <th scope="col">AMOUNT PAID</th>
                                <th scope="col">DELIVERY ADDRESS</th>
                                <th scope="col">TOTAL PAID</th>
                                <th scope="col">DELIVERED</th>
                                <th scope="col">RECEIPT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.order_number}>
                                    <td>{order.order_number}</td>
                                    <td>
                                        {order.date}
                                    </td>
                                    <td>{order.customer}</td>
                                    <td>${order.amount}</td>
                                    <td>{order.address}</td>
                                    <td>${order.amount}</td>
                                    <td>
                                        {
                                        order.delivered ? <i className="ri-check-double-line"></i>
                                    : <span className="mark_badge"> Mark as Delivered</span>
                                    }
                                    </td>
                                    <td>
                                    <i className="ri-eye-line" data-bs-toggle="modal" data-bs-target={`  #${order.customer}`.replace(/ +/g, "").concat(order.order_number) }></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ReceiptModal orders={orders}/>                        
    </>
  )
}

export default OrdersTable