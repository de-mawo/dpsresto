import React, { useState } from "react";
import AdminDashCards from "../../components/Dashboard/AdminDashCards";
import AdminSideBar from "../../components/Dashboard/AdminSideBar";
import Charts from "../../components/Dashboard/Charts";
import DashHeader from "../../components/Dashboard/DashHeader";
import MetaSeo from "../../utils/MetaSeo";

const AdminDashboard = () => {
    const [show, setShow] = useState(false);

    const showSideBar = () => {
        setShow(!show);
    };
    return (
        <>
            <MetaSeo title={`Admin Dashboard`} />
            <DashHeader show={show} showSideBar={showSideBar} />
            <AdminSideBar show={show} />
            <main className={`dash_container ${show ? "add_body_padding" : " "} `}>
                <AdminDashCards />
                <Charts />
            </main>
        </>
    );
};

export default AdminDashboard;
