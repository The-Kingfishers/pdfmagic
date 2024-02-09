"use client"
import Image from 'next/image';
import React from 'react';
import avatar from "../../../../../public/account_circle_FILL0_wght400_GRAD0_opsz24.svg"
import { useSession } from 'next-auth/react';
const AdminProfile = () => {
    const {data : session} = useSession()
    return (
        <div className='text-black w-11/12 mx-auto mt-10'>
            <div className=''>
                <Image width={50} height={20} alt='userAvatar' src={avatar}></Image>
                <h2 className='font-semibold text-3xl mb-3'>My Profile</h2>
                <h1 className='mt-6 text-xl font-medium mb-3'>Role: {session?.user.role === "Unverified email" ? "Registered User" : session?.user.role}</h1>
                <h1 className=' text-xl font-medium mb-3'>Name: {session?.user.name}</h1>
                <h1 className=' text-xl font-medium mb-3'>Email: {session?.user.email}</h1>
                </div>
        </div>
    );
};

export default AdminProfile;