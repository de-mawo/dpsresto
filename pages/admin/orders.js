import React, { useState } from "react";
import AdminSideBar from "../../components/Dashboard/AdminSideBar";
import DashHeader from "../../components/Dashboard/DashHeader";
import OrdersTable from "../../components/Dashboard/OrdersTable";
import MetaSeo from "../../utils/MetaSeo";
import Search from "../../components/Search";
import orderData from "../../data/adminOrdersData";

const AdminOrders = () => {
    const [show, setShow] = useState(false);

    const showSideBar = () => {
        setShow(!show);
    };
    const [query, setQuery] = useState("");

    const keys = ["order_number", "customer"];

    const search = (orderData) => {
        return orderData.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)));
    };

    return (
        <>
            <MetaSeo title={`Admin Orders`} />
            <DashHeader show={show} showSideBar={showSideBar} />
            <AdminSideBar show={show} />
            <main className={`dash_container ${show ? "add_body_padding" : " "} `}>
                <Search setQuery={setQuery} />
                <OrdersTable orders={search(orderData)} />
            </main>
        </>
    );
};

export default AdminOrders;
