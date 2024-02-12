import React from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';

const Card = () => {
    return (
        <div className='text-black hover:shadow-2xl flex items-start dark:text-white p-10 card shadow-xl w-11/12 mx-auto mt-10'>
            <span className='text-2xl'><MdSupervisedUserCircle /></span>
            <div className='flex flex-col'>
                <span>Total Users</span>
                <span className='text-2xl font-medium'>10,252</span>
                <span><span className='text-customOrange '>12%</span> more than previous week</span>
            </div>
        </div>
    );
};

export default Card;