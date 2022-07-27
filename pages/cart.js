import React from "react";
import CartItem from "../components/CartItem";
import ChangeAddressModal from "../components/ChangeAddressModal";
import MetaSeo from "../utils/MetaSeo";
import cart from "../data/cart-data";
import ChangePayment from "../components/ChangePayment";
import Link from "next/link";

const address = `20 Wail Street, Suite 330, Boston, MA`;

const Cart = () => {
    return (
        <>
            <MetaSeo title={`Cart`} />

            <div className="container d-flex justify-content-center pb-70">
                <main className="cart_area">
                    <div className="py-5 text-center">
                        <Link href='/menu'> 
                        <button className="w-100 main_btn text-center">
                            <i className="ri-arrow-go-back-fill me-2"></i> Go Back to Add more{" "}
                        </button>
                        </Link>
                        <h2 className="mt-5">Cart</h2>
                    </div>
                    <hr className="my-2" />
                    <h6 className="py-3">Your items Summary</h6>

                    {cart.map((item) => (
                        <section key={item.id}>
                            <CartItem item={item} />
                        </section>
                    ))}

                    <hr className="my-4" />
                    <p>Delivery Address</p>
                    <button className="outline w-100" data-bs-toggle="modal" data-bs-target="#currentLocationModal">
                        <i className="ri-map-pin-range-line"></i>
                        {address.substr(0, 20) + "..."} <strong>Change</strong>
                    </button>

                    <hr className="my-4" />

                    <div className="row">
                        <div className="col-8 ">
                            <span className="fw-bolder">Subtotal</span>
                        </div>
                        <div className="col-4">
                            <span className="fw-bolder">$15.44</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-8">
                            <p>
                                <a href="/fees" className="fw-bold">
                                    Fees <i className="ri-information-fill"></i>
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-8">
                            <p>Service</p>
                        </div>
                        <div className="col-4">
                            <p>$2</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <p>Delivery</p>
                        </div>
                        <div className="col-4">
                            <p>$3</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-8">
                            <span className="fw-bolder">Total</span>
                        </div>
                        <div className="col-4">
                            <span className="fw-bold">$20.44</span>
                        </div>
                    </div>

                    <hr className="my-3" />

                    <div className="row">
                        <div className="col-2">
                                <i className="ri-bank-card-fill"></i>
                        </div>
                        <div className="col-6"></div>
                        <div className="col-2">
                            {" "}
                            <ChangePayment />{" "}
                        </div>
                    </div>

                    <hr className="my-3" />
                    <form>
                        <div className="form-floating mt-2 mb-3">
                            <input type="text" className="form-control" name="note" />
                            <label htmlFor="address">Add delivery note</label>
                        </div>
                    </form>
                    <hr className="my-3" />
                    <button className="w-100 main_btn text-center ">
                        Pay Now <i className="ri-wallet-3-fill"></i>
                    </button>
                </main>
            </div>

            <ChangeAddressModal />
        </>
    );
};

export default Cart;
