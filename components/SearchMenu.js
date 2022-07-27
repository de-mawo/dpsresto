import React from "react";

const SearchMenu = () => {
    return (
        <div className="pt-100 pb-70 container ">
            <div className="search_menu">
                <span>
                    <i className="ri-search-line"></i>
                </span>

                <input className="form-control border-1 form-control-lg" type="search" placeholder="Search Menu" aria-label="Search" />
            </div>
        </div>
    );
};

export default SearchMenu;
