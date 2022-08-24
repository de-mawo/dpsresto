import React from "react";
import Link from "next/link";
import MetaSeo from "../utils/MetaSeo";
const Year = new Date().getFullYear();

const PasswordReset = () => {
    return (
        <>
        <MetaSeo title={`Password Reset`} />
            <section className=" email-body">
                <div className="d-flex justify-content-center pt-100">
                    <div className="auth_form">
                        <h2>Password Reset </h2>
                        <p>Enter Your Email to receive a password reset link.</p>

                        <form>
                            <div className="form-floating mt-2 mb-3 reset-pass">
                                <input type="email" className="form-control" name="email" />
                                <label htmlFor="email">Enter Your Email</label>
                            </div>
                            <button className="w-100 primary_btn" type="submit">
                                Submit
                            </button>
                        </form>

                        <div className="mt-5 mb-3 text-center">
                            <p className="text-muted">
                                &copy; {Year}
                                <Link href="/">
                                    <a>
                                        <strong>DPS Resto: Home </strong>
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PasswordReset;
