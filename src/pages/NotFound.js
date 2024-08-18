import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <NavLink>
                <img srcSet="/logo.png 2x" className='mb-10' alt="Monkey-Blogging" />
            </NavLink>
            <h1 className=' mb-10 text-5xl font-semibold'>Opps! Page Not Found</h1>
            <NavLink to="/">
                <h2 className=' py-3 px-5 border border-gray-400 rounded-xl bg-blue-400 text-lg text-white font-medium'>Back To Home</h2>
            </NavLink>
        </div>

    );
};

export default NotFound;