"use client"
import { FaGoogle } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const login = () => {
    const handelForm = () => {

    }
    const googleClick = () => {

    }
    return (
        <div className="hero  min-h-screen  ">
            <div className="max-w-7xl mx-auto  md:flex justify-center">
                <div className="hidden md:block">
                    <Image
                        src="https://i.ibb.co/8jFYK8c/Lovepik-com-450092341-Flat-illustration-of-secure-login-in-editable-design-removebg-preview.png"
                        alt="img"
                        height={500}
                        width={600}
                    />

                </div>
                <div className="hero-content flex-col ">

                    <div className=" rounded-none flex-shrink-0 w-full    ">
                        <form onSubmit={handelForm} className="card-body w-80 md:w-[400px]  lg:w-[500px]">
                            <h1 className="text-5xl font-bold  ">Login</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    className="input  input-bordered rounded-none"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered rounded-none"
                                    required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control ">
                                <button className="btn  text-white  bg-slate-800 dark:text-white border-none rounded-none">Login</button>
                                <div className="mt-3">
                                    <p>You do not have an Account Please
                                        <Link href="/register" className="text-sky-500 text-2xl">
                                            Register
                                        </Link>
                                    </p>
                                </div>
                                <div className="text-center">
                                    {/* <h1 className="text-red-500">{error}</h1> */}
                                </div>
                                <div className="divider">OR</div>
                                <div onClick={googleClick} className=" border-2 border-black p-4 rounded-xl mt-5">
                                    <p className="flex justify-center items-center gap-3 text-xl font-semibold ">
                                        <FaGoogle /> Continue With Google</p>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default login;