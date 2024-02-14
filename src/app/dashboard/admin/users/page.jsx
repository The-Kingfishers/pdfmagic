import Pagination from '@/app/components/ui/dashboard/Pagination/Pagination';
import Search from '@/app/components/ui/dashboard/Search/Search';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UsersPage = () => {
    return (
        <div className='w-full pt-5 bg-customDarkBlue text-white'>
            <div className='flex justify-between items-center mx-5'>
                <Search placeholder="Search for a User..." />
                <Link href="/dashboard/users/add">
                <button className="btn border-none bg-customOrange text-white font-medium">Add New</button>
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
                    <td className='flex items-center mt-1'>
                        <Image className='rounded-full object-cover' src="/account_circle_FILL0_wght400_GRAD0_opsz24.svg" width={40} height={40} alt='UserImg'/>
                        Jahid Hasan
                    </td>
                    <td>jahidhasan20u@gmail.com</td>
                    <td>12.02.2024</td>
                    <td>Admin</td>
                    <td>
                        {/* <button className='p-3 m-1 btn-outline text-white border rounded-xl'>Change Role</button> */}
                        <select className='text-black' name="role" id="role">
                            <option value="normal">Change Role</option>
                            <option value="user">User</option>
                            <option value="moderator">Moderator</option>
                            <option value="admin">Admin</option>
                        </select>
                        <button className='btn border-none bg-red-600 text-white font-medium'>Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <Pagination />

        </div>
    );
};

export default UsersPage;