"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';

const DashNav = () => {
    const pathName = usePathname()
    return (
        <div className='text-black bg-[#182237] flex justify-between items-center'>
            <h2 className='p-4 font-bold text-white uppercase '>&gt; {pathName.split("/").pop()}</h2>
            <div className='flex items-center p-3 rounded-xl bg-[#2e374a] '>
                <span className=''><MdSearch /></span>
                <input type="search" className='h-10 mr-3 p-4 border-none outline-none bg-transparent' name="" placeholder='Search here . . .' id="" />
                {/* <span className='relative'><FaSearch /></span> */}
            </div>
            
        </div>
    );
};

export default DashNav;