"use client"
import Link from 'next/link';
import React from 'react';

const Register = () => {
    const handelForm = () => {

    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content  flex-col w-80 md:w-[400px]  lg:w-[900px]">
                <div className="text-center lg:text-left">
                </div>
                <div className="card flex-shrink-0 w-full   ">
                    <h1 className="text-5xl font-bold my-6 ">Register</h1>

                    <form onSubmit={handelForm} className="card-body ">
                        <div className='lg:flex justify-between gap-3'>
                            <div className='lg:w-1/2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Name</span>
                                    </label>
                                    <input
                                        type="name"
                                        name="name"
                                        placeholder="Name"
                                        className="input  input-bordered rounded-none"
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        name="email"
                                        className="input  input-bordered rounded-none"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='lg:w-1/2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered rounded-none"
                                        required
                                    />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-white">imgUrl</span>
                                    </label>
                                    <input
                                        type="file"
                                        placeholder="imgUrl"
                                        name="imgUrl"
                                        className="file-input  input-bordered rounded-none "
                                        required />
                                </div>

                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn  text-white  bg-slate-800 dark:text-white border-none rounded-none">Register</button>
                            <div className="mt-3">
                                <p className="text-xl dark:text-white">you have Account  please
                                    <Link
                                        href="/login"
                                        className=" text-2xl ml-3 text-sky-500">
                                        login
                                    </Link>
                                </p>
                            </div>
                            <div className="text-center">
                                {/* <h1 className="text-red-500">{registerError}</h1> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;