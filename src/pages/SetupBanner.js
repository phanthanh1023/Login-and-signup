import React from 'react';
import { Link } from 'react-router-dom';

const SetupBanner = () => {
    return (
        <div>
            <div className='container flex items-center gap-10'>
                <div className='w-[600px] p-5'>
                    <img src="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className='object-cover rounded-xl h-full '
                        alt="" />
                </div>
                <div className=''>
                    <button className='bg-gray-300 text-base px-2 py-2 rounded-lg mb-5'>Kiến Thức</button>
                    <Link to="/">
                        <a href='#!' className='block font-semibold text-4xl leading-10 mt-3 top-[30%] w-[500px] cursor-pointer '>Hướng dẫn setup phòng cực chill dành cho người mới toàn tập</a>
                    </Link>
                    <div className=' flex gap-10 mt-5 text-base font-bold text-gray-700'>
                        <span>June 20</span>
                        <span>Andiez Le</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetupBanner;