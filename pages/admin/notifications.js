import React, { useState } from "react";
import AdminSideBar from "../../components/Dashboard/AdminSideBar";
import DashHeader from "../../components/Dashboard/DashHeader";
import NotificationsTable from "../../components/Dashboard/NotificationsTable";
import Search from "../../components/Search";
import notifications from "../../data/notificationsData";
import MetaSeo from "../../utils/MetaSeo";

const Notifications = () => {
    const [show, setShow] = useState(false);

    const showSideBar = () => {
        setShow(!show);
    };

    const [query, setQuery] = useState("");

    const keys = ["notifier", "time"];

    const search = (notifications) => {
        return notifications.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)));
    };

    return (
        <>
            <MetaSeo title={`Admin Notifications`} />
            <DashHeader show={show} showSideBar={showSideBar} />
            <AdminSideBar show={show} />
            <main className={`dash_container ${show ? "add_body_padding" : " "} `}>
            <Search setQuery={setQuery} /> 
               <NotificationsTable notifications={search(notifications)}/>
            </main> 
        </>
    );
};

export default Notifications;
