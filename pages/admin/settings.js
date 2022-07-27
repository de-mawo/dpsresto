import React, { useState } from "react";
import AdminSideBar from "../../components/Dashboard/AdminSideBar";
import DashHeader from "../../components/Dashboard/DashHeader";
import MetaSeo from "../../utils/MetaSeo";

const AdminSettings = () => {
    const [show, setShow] = useState(false);

    const showSideBar = () => {
        setShow(!show);
    };
    return (
        <>
            <MetaSeo title={`Admin Settings`} />
            <DashHeader show={show} showSideBar={showSideBar} />
            <AdminSideBar show={show} />
            <main className={`dash_container ${show ? "add_body_padding" : " "} `}>
                <h1> Settings</h1>
            </main>
        </>
    );
};

export default AdminSettings;
