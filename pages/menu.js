import React, { useState } from "react";
import Filter from "../components/Filters";
import Footer from "../components/Footer";
import MenuComponent from "../components/Menu/MenuComponent";
import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import MetaSeo from "../utils/MetaSeo";
import menu from ".././data/food"

const Menu = () => {
    const [query, setQuery] = useState("");

    const keys = ["title","category", "description"]

    const search = (menu) => {
        return menu.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query) ))
    }
    return (
        <>
            <MetaSeo title={`Menu | Order Now`} />
            <NavBar />
            <Search setQuery={setQuery}/>
            <Filter />
            <MenuComponent data={search(menu)}/>
            <Pagination />
            <Footer />
        </>
    );
};

export default Menu;
