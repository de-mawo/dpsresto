import React from "react";
import Link from "next/link";
import MetaSeo from "../utils/MetaSeo";

const Year = new Date().getFullYear();

const Login = () => {
    return (
        <>
            <MetaSeo title={`Login`} />
            <div className=" d-flex justify-content-center pt-100">
                <main className="auth_form">
                    <form>
                        <div className="text-center">
                            <h3>Welcome Back!</h3>
                            <p>Please Sign In.</p>
                        </div>

                        <div className="form-floating mt-2 mb-3">
                            <input type="email" className="form-control" name="email" />
                            <label htmlFor="email">Email address</label>
                        </div>

                        <div className="form-floating mt-2 mb-3">
                            <input type="password" className="form-control" name="password" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 default_btn" type="submit">
                            Sign in
                        </button>

                        <p className="mt-5 mb-3 text-muted">
                            No Account as yet?
                            <Link href="/signup">
                                <a>
                                   
                                    <strong>Sign Up</strong>
                                </a>
                            </Link>
                        </p>

                        <p className="mt-3 mb-3 text-muted">
                            Forgot Password?
                            <Link href="/password-reset">
                                <a>
                                    <strong>Reset Password</strong>
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

export default Login;
