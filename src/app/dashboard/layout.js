import React from 'react';
import DashNav from '../components/ui/dashboard/DashNav/DashNav';
import Sidebar from '../components/ui/dashboard/Sidebar/Sidebar';

const DashboardLayout = ({children}) => {
    return (
        <div className='grid max-w-7xl mx-auto min-h-screen grid-cols-5 text-white '>
            {/* container */}
            <div className='col-span-1 bg-[#182237]' >
                {/* menu */}
            <Sidebar />
            </div>
            <div className='content col-span-4'>
                <DashNav />
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;