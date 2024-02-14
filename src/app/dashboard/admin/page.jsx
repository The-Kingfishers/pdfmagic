import Card from '@/app/components/ui/dashboard/card/Card';
import React from 'react';

const AdminDashboardPage = () => {
    return (
        <div className='text-black grid grid-cols-3 '>
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default AdminDashboardPage;