import React from "react";
import Filter from "../components/Filters";
import Footer from "../components/Footer";
import MenuComponent from "../components/Menu/MenuComponent";
import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";
import SearchMenu from "../components/SearchMenu";
import MetaSeo from "../utils/MetaSeo";

const Menu = () => {
    return (
        <>
            <MetaSeo title={`Menu | Order Now`} />
            <NavBar />
            <SearchMenu />
            <Filter />
            <MenuComponent />
            <Pagination />
            <Footer />
        </>
    );
};

export default Menu;
