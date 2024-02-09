"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import avatar from "../../../../public/account_circle_FILL0_wght400_GRAD0_opsz24.svg"
const ProfilePage = () => {
    const {data: session} = useSession()
    // console.log(session);
    return (
        <div className='text-black w-11/12 mx-auto mt-10'>
            <div className=''>
                <Image width={50} height={20} alt='userAvatar' src={avatar}></Image>
                <h2 className='font-semibold text-3xl '>My Profile</h2>
                <h1 className='mt-6 text-xl font-medium'>Role: {session?.user.role}</h1>
                <h1 className=' text-xl font-medium'>Name: {session?.user.name}</h1>
                <h1 className=' text-xl font-medium'>Email: {session?.user.email}</h1>
                </div>
        </div>
    );
};

export default ProfilePage;