import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=' relative'>
            <div className='py-10 '>
                <img srcSet="/banner.jpg 2x"
                    className='w-full h-auto object-cover rounded-lg '
                    style={{ filter: 'blur(2px)' }}
                    alt="" />
            </div>
            <div className='absolute left-16 bottom-48 w-full text-white p-5 max-w-[600px] '>
                <h1 className='text-5xl font-bold '>Monkey Blogging</h1>
                <p className='mt-10 w-full leading-10 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi non deserunt iure dolorem commodi ad modi,
                    voluptatem doloribus maxime iste illo iusto quia error!
                    Impedit quas veritatis repudiandae necessitatibus nihil beatae non aliquid.</p>
                <Link to="/login" className='inline-block mt-10 px-5 py-3 text-center bg-white text-green-700 text-xl rounded-xl'>Get Started</Link>
            </div>
        </div>
    );
};

export default Banner;