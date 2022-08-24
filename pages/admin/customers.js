import React, { useState } from "react";
import AdminSideBar from "../../components/Dashboard/AdminSideBar";
import CustomersTable from "../../components/Dashboard/CustomersTable";
import DashHeader from "../../components/Dashboard/DashHeader";
import Search from "../../components/Search";
import MetaSeo from "../../utils/MetaSeo";
import customerData from "../../data/customerData";
import Pagination from "../../components/Pagination";

const AdminCustomers = () => {
    const [show, setShow] = useState(false);

    const showSideBar = () => {
        setShow(!show);
    };
    const [query, setQuery] = useState("");

    const keys = ["name", "email"];

    const search = (customerData) => {
        return customerData.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)));
    };

    return (
        <>
            <MetaSeo title={`Admin Customers`} />
            <DashHeader show={show} showSideBar={showSideBar} />
            <AdminSideBar show={show} />
            <main className={`dash_container ${show ? "add_body_padding" : " "} `}>              
                <Search setQuery={setQuery} />  
                <CustomersTable data={search(customerData)} />
                {/* <Pagination/> */}
            </main>
        </>
    );
};

export default AdminCustomers;
