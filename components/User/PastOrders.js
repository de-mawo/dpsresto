import React from 'react'
import customerOrdersData from '../../data/customerOrdersData'
import CustomerReceiptModal from './CustomerReceiptModal'

const PastOrders = () => {
    const orders = customerOrdersData
  return (
    <>
    <section className='orders_area pb-70'>
        <div className="section_title mt-5 mb-3 text-center">
            <h3>My Orders</h3>
            </div>
            <div className="dashboard_table  container">

                <div className="table-responsive text-nowrap" >
                    <table className="table  align-middle mb-0 text-center">
                        <thead className='sticky-top bg-white'>
                            <tr>
                                <th scope="col">ORDER #</th>
                                <th scope="col">DATE</th>
                                <th scope="col">AMOUNT PAID</th>
                                <th scope="col">DELIVERY ADDRESS</th>
                                <th scope="col">TOTAL PAID</th>
                                <th scope="col">DELIVERED</th>
                                <th scope="col">RECEIPT</th>
                            </tr>
                        </thead>
                        <tbody >
                            {orders.map((order) => (
                                <tr key={order.order_number} >
                                    <td>{order.order_number}</td>
                                    <td>
                                        {order.date}
                                    </td>
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
                                    <i className="ri-eye-line" data-bs-toggle="modal" data-bs-target={`  #${order.customer}`.replace(/ +/g, "").concat(order.order_number)   }></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                   
                </div>
            </div>
        
    </section>

    <CustomerReceiptModal orders={orders}/>
    </>
  )
}

export default PastOrders