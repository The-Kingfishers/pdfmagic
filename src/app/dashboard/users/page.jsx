import Search from '@/app/components/ui/dashboard/Search/Search';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UsersPage = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center mx-5'>
                <Search placeholder="Search for a User..." />
                <Link href="/dashboard/users/add">
                <button className="btn bg-[#5d57c9] text-white font-medium">Add New</button>
            </Link>
            </div>

            <table className='w-full mx-5 mt-5'>
                <thead>
                <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Created At</td>
                <td>Role</td>
                <td>Action</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <Image src="/account_circle_FILL0_wght400_GRAD0_opsz24.svg" width={40} height={40} alt='UserImg'/>
                        Jahid Hasan
                    </td>
                    <td>jahidhasan20u@gmail.com</td>
                    <td>12.02.2024</td>
                    <td>Admin</td>
                    <td>
                        <button className='btn'>Upgrade Role</button>
                        <button className='btn bg-red-600 text-white font-medium'>Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );
};

export default UsersPage;