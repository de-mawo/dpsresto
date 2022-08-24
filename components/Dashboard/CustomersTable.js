import React from 'react'
import { DeleteAlert } from '../../utils/Alert'

const CustomersTable = ({data}) => {
  return (
    <>
    <div className="dashboard_table  container">
                <div className="table-responsive text-nowrap"> 
                    <table className="table align-middle mb-0 text-center">
                        <thead className="sticky-top bg-white">
                            <tr>
                                <th scope="col">System ID</th>
                                <th scope="col">AVATAR</th>
                                <th scope="col">NAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">PHONE</th>
                                <th scope="col">ADDRESS</th>
                                <th scope="col">REMOVE </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((customer) => (
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>
                                        <picture> 
                                      <img src={customer.image} alt={customer.name} width={50} height={50}   className="rounded-circle" />
                                        </picture>

                                    </td>
                                    <td>
                                        {customer.name}
                                    </td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.address}</td>
                                    <td>
                                        <i className="ri-delete-bin-line" onClick={() => DeleteAlert("User")}></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    
    </>
  )
}

export default CustomersTable