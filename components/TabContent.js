import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import menu from "../data/food";

const meats = menu.filter((menu) => menu.category === "meat");
const seafoods = menu.filter((menu) => menu.category === "seafood");
const salads = menu.filter((menu) => menu.category === "salad");
const drinks = menu.filter((menu) => menu.category === "drinks");

const TabContent = () => {
    return (
        <>
            <section className="food_tabs_area pt-100 pb-70 container">
            <div className="pb-70 text-center">
                        <h2>Delicious Meals on Promo</h2>
                    </div>
                <div className="food_tabs">
                    <Tabs>
                        <TabList>
                            <Tab>Meat</Tab>
                            <Tab>Seafood</Tab>
                            <Tab>Salads</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="row  justify-content-center text-center">
                                {meats.map((meat) => (
                                    <div className="col-lg-3 col-md-6" key={meat.id}>
                                        <div className="image">
                                            <Image src={meat.image} width={460} height={330} alt={meat.title} />
                                        </div>

                                        <div className="content">
                                            <h3>{meat.title}</h3>
                                            <p>{meat.description}</p>
                                            <span>${meat.price}</span>
                                        </div>
                                        <ul className="list-inline list-unstyled">
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li>
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li> 
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li>
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li>
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="row  justify-content-center text-center">
                                {seafoods.map((seafood) => (
                                    <div className="col-lg-3 col-md-6" key={seafood.id}>
                                        <div className="image">
                                            <Image src={seafood.image} width={460} height={330} alt={seafood.title} />
                                        </div>

                                        <div className="content">
                                            <h3>{seafood.title}</h3>
                                            <p>{seafood.description}</p>
                                            <span>{seafood.price}</span>
                                        </div>
                                        <ul className="list-inline list-unstyled">
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li>
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li> 
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li>
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li>
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel> 
                        <div className="row  justify-content-center text-center">
                                {salads.map((salad) => (
                                    <div className="col-lg-3 col-md-6" key={salad.id}>
                                        <div className="image">
                                            <Image src={salad.image} width={460} height={330} alt={salad.title} />
                                        </div>

                                        <div className="content">
                                            <h3>{salad.title}</h3>
                                            <p>{salad.description}</p>
                                            <span>{salad.price}</span>
                                        </div>
                                        <ul className="list-inline list-unstyled">
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li>
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li> 
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li>
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li>
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="row  justify-content-center text-center">
                                {drinks.map((drink) => (
                                    <div className="col-lg-3 col-md-6" key={drink.id}>
                                        <div className="image">
                                            <Image src={drink.image} width={460} height={330} alt={drink.title} />
                                        </div>

                                        <div className="content">
                                            <h3>{drink.title}</h3>
                                            <p>{drink.description}</p>
                                            <span>{drink.price}</span>
                                        </div>
                                        <ul className="list-inline list-unstyled">
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li>
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li> 
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li>
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li>
                                          <li className="list-inline-item"> <i className="ri-star-fill"></i></li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                           </TabPanel>
                    </Tabs>
                </div>
            </section>
        </>
    );
};

export default TabContent;
