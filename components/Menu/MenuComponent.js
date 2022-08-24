import React from "react";
import Image from "next/image";
import MenuModal from "./MenuModal";


const MenuComponent = ({data}) => {
    return (
        <>
            <main className="container mt-5 pb-70 ">
                <div className="row justify-content-center text-center">
                    {data.map((item) => (                       
                            <div className="col-lg-3 col-md-6" key={item.id}>
                                <div className="menu_card_item" data-bs-toggle="modal" data-bs-target={`#${item.title}`.replace(/ +/g, "")}>
                                    <div className="image">
                                        <Image src={item.image} width={1000} height={667} alt={item.title} />
                                    </div>

                                    <div className="menu_card_content">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <span>${item.price}</span>
                                    </div>
                                </div>
                            </div>
                        
                    ))}
                </div>
            </main>
            <MenuModal data={data} /> 
        </>
    );
};

export default MenuComponent;
