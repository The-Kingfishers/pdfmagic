import React from 'react';

const Pagination = () => {
    return (
        <div className='flex justify-between mx-5 '>
           <button className='btn p-2 disabled:cursor-not-allowed'>Prev</button>
           <button className='btn p-2 '>Next</button> 
        </div>
    );
};

export default Pagination;