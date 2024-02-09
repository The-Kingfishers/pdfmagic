"use client"
import { usePathname } from 'next/navigation';
import React from 'react';

const DashNav = () => {
    const pathName = usePathname()
    return (
        <div className='text-black'>
            <h2 className='p-4 text-white uppercase bg-[#182237]'>{pathName.split("/").pop()}</h2>
        </div>
    );
};

export default DashNav;