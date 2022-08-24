import React, { useState } from "react";
import AddButton from "../../components/Dashboard/AddButton";
import AdminSideBar from "../../components/Dashboard/AdminSideBar";
import DashHeader from "../../components/Dashboard/DashHeader";
import MenusTable from "../../components/Dashboard/MenusTable";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import MetaSeo from "../../utils/MetaSeo";
import adminMenu from "../.././data/adminMenu";
import AddMenuModal from "../../components/Dashboard/AddMenuModal";

const AdminMenus = () => {
    const [show, setShow] = useState(false);

    const showSideBar = () => {
        setShow(!show);
    };

    const [query, setQuery] = useState("");

    const keys = ["title", "category", "description"];

    const search = (adminMenu) => {
        return adminMenu.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)));
    };

    return (
        <>
            <MetaSeo title={`Admin Menus`} />
            <DashHeader show={show} showSideBar={showSideBar} />
            <AdminSideBar show={show} />
            <main className={`dash_container ${show ? "add_body_padding" : " "} `}>
                <AddButton />
                <Search setQuery={setQuery} /> 
                <MenusTable data={search(adminMenu)} />
                {/* <Pagination /> */}
            </main>
            <AddMenuModal />
        </>
    );
};

export default AdminMenus;
