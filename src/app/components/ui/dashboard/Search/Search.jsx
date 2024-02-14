import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({placeholder}) => {
    return (
        <div className='flex focus-within:border focus-within:border-customOrange w-max mt-4 items-center p-3 rounded-xl bg-[#2e374a] '>
            <MdSearch />
            <input type="text" className='h-10 mr-3 p-4 border-none outline-none bg-transparent' placeholder={placeholder} />
        </div>
    );
};

export default Search;