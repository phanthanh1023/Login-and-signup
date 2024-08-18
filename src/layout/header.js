import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-app/firebase-config';
import { Link, NavLink } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";

const Header = () => {
    // const handleSingOut = () => {
    //     signOut(auth);
    // }
    const menuLinks = [
        {
            url: "/",
            title: "Home"
        },
        {
            url: "/blog",
            title: "Blog"
        },
        {
            url: "/contact",
            title: "Contact"
        },
    ]
    return (
        <div>
            <div className='container flex items-center justify-between'>
                <div className='flex items-center'>
                    <NavLink to="/">
                        <img srcSet="/logo.png 6x" className='p-5' alt="Monkey" />
                    </NavLink>
                    <div className='flex p-5 font-medium text-lg gap-10'>
                        {menuLinks.map((item) => (
                            <div key={item.title}>
                                <NavLink to={item.url} className=' no-underline'>
                                    {item.title}
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex items-center justify-center gap-5 p-10 ml-5'>
                    <div className='relative'>
                        <input type="text" className='p-4 pr-12 w-[300px] h-auto mx-auto border border-gray-400 bg-transparent rounded-xl'
                            placeholder='Search Poast....' />
                        <IoIosSearch className='absolute h-6 w-6 top-[16px] right-[25px]' />
                    </div>
                    <Link to="/signup" className='w-[150px] h-full p-4 border border-gray-200  bg-green-600 rounded-lg font-medium  text-white text-center'>Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;