import React from "react";
import { useRouter } from "next/router";

const AddButton = () => {
    const { asPath } = useRouter();
    return (
        <>
            <div className="container pt-3">
                <button className="toggle primary_btn" data-bs-toggle="modal" data-bs-target={asPath === "/admin/menus" ? "#addMenuModal" : ""}>
                    <i className="ri-add-fill"></i> Add Menu
                </button>
            </div>
        </>
    );
};

export default AddButton;
