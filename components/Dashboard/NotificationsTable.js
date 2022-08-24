import React from "react";
// import notifications from '../../data/notificationsData'

const NotificationsTable = ({ notifications }) => {
    return (
        <>
            <div className="dashboard_table me-3">
                <div className="table-responsive text-nowrap notifications_table" data-simplebar>
                    <table className="table align-middle mb-0 ">
                        <thead className="sticky-top bg-white">
                            <tr>
                                <th className="col-1">
                                    <input className="form-check-input" type="checkbox" />
                                    <span className="ms-2"> All</span>
                                </th>
                                <th className="col-1 text-center"> NOTIFIER </th>
                                <th className="col-7">
                                    <div className="dropdown col-md-6 d-flex ">
                                        <button className="table_btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            MORE
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="sortBy">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="ri-pencil-fill"></i> <span>Mark as Read</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="ri-delete-bin-5-line"></i> <span> Delete</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </th>
                                <th className="col-3 text-end "> TIMESTAMP </th>
                            </tr>
                        </thead>
                        <tbody>
                            {notifications.map((notification) => (
                                <tr key={notification.id}>
                                    <td className="col-1">
                                        <input className="form-check-input" type="checkbox" />
                                    </td>
                                    <td className={notification.read ? "col-1 text-center" : "col-1 text-center fw-bold"}> {notification.notifier}</td>
                                    <td className={notification.read ? "col-7" : "col-7 fw-bold"}>{notification.message} </td>
                                    <td className={notification.read ? "col-3 text-end" : "col-3 text-end fw-bold"}>{notification.time} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default NotificationsTable;
