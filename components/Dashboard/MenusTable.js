import React from "react";
import { DeleteAlert } from "../../utils/Alert";
import EditMenuModal from "./EditMenuModal";


const MenusTable = ({data}) => {

   

    return (
        <>
            <div className="dashboard_table  container">
                <div className="table-responsive text-nowrap" >
                    <table className="table align-middle mb-0 text-center">
                        <thead className="sticky-top bg-white">
                            <tr>
                                <th scope="col">SKU</th>
                                <th scope="col">THUMBNAIL</th>
                                <th scope="col">TITLE</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">CATEGORY</th>
                                <th scope="col">DESCRIPTION</th>
                                <th scope="col">EDIT</th>
                                <th scope="col">DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>
                                        <picture>
                                            <img src={item.image} width={50} height={50} className="avatar rounded-circle" alt="avatar" />
                                        </picture>
                                    </td>
                                    <td>{item.title}</td>
                                    <td>${item.price}</td>
                                    <td>{item.category}</td>
                                    <td>{item.description}</td> 
                                    <td>
                                        <i className="ri-edit-line" data-bs-toggle="modal" data-bs-target={`#${item.title}`.replace(/ +/g, "")}></i>
                                    </td>
                                    <td>
                                        <i className="ri-delete-bin-line" onClick={() => DeleteAlert("Menu")}></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <EditMenuModal data={data}/>
        </>
    );
};

export default MenusTable;
