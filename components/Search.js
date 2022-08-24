import React from "react";
import { useRouter } from "next/router";

const Search = ({ setQuery }) => {
    const { asPath } = useRouter();

    return (
        <>
            <div className={asPath === "/menu" ? "pt-100 pb-70 container" : "pt-3 mb-3 container"}>
                <div className="search_menu">
                    <span>
                        <i className="ri-search-line"></i>
                    </span>

                    <input
                        className="form-control border-1 form-control-lg"
                        type="search"
                        placeholder={
                        (asPath === "/menu" && "Search By Title") || 
                        (asPath === "/admin/menus" && "Search by Title") || 
                        (asPath === "/admin/orders" && "Search by Order Number or Customer Name") ||
                        (asPath === "/admin/customers" && "Search by Email or Customer Name") ||
                        (asPath === "/admin/notifications" && "Search by Notifier or Timestamp") 
                    
                    }
                        aria-label="Search"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>
        </>
    );
};

export default Search;
