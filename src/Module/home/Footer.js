import React from 'react';
import PostFooter from '../../pages/PostFooter';

const Footer = () => {
    return (
        <div className='container'>
            <div className='mt-10'>
                <div className="w-10 h-2 bg-blue-300 mb-2"></div>
                <heading className=" text-blue-950 text-xl font-bold">
                    Phổ biến nhất
                </heading>
            </div>
            <div className=''>
                <PostFooter></PostFooter>
            </div>
        </div>
    );
};

export default Footer;