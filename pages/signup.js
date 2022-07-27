import React from "react";
import MetaSeo from "../utils/MetaSeo";
import Link from "next/link";

const Year = new Date().getFullYear();

const SignUp = () => {
    return (
        <>
            <MetaSeo title={`Sign Up`} />
            <div className=" d-flex justify-content-center pt-100">
                <main className="auth_form">
                    <form>
                        <div className="text-center">
                            <h3>Create Your Account</h3>
                        </div>

                        <div className="form-floating mt-2 mb-3">
                            <input type="email" className="form-control" name="email" />
                            <label htmlFor="email">Email address</label>
                        </div>

                        <div className="form-floating mt-2 mb-3">
                            <input type="name" className="form-control" name="name" />
                            <label htmlFor="name">Full Name</label>
                        </div>

                        <div className="form-floating mt-2 mb-3">
                            <input type="mobile" className="form-control" name="mobile" />
                            <label htmlFor="mobile">Mobile Number</label>
                        </div>

                        <div className="form-floating mt-2 mb-3">
                            <input type="password" className="form-control" name="password" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="form-floating mt-2 mb-3">
                            <input type="password" className="form-control" name="conf_password" />
                            <label htmlFor="conf_password">Confirm Password</label>
                        </div>
                        <button className="w-100 default_btn" type="submit">
                            SignUp
                        </button>

                        <p className="mt-5 mb-3 text-muted">
                            Got an account?
                            <Link href="/login">
                                <a>
                                    
                                    <strong>Login</strong>
                                </a>
                            </Link>
                        </p>

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
                    </form>
                </main>
            </div>
        </>
    );
};

export default SignUp;
