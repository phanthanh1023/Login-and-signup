import React from 'react';

const PosFeauterItem = () => {
    return (
        <div className='mt-10 relative '>
            <div className='overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg max-w-[300px]'></div>
            <img srcSet="/Feater.jpg 2x" className='rounded-xl object-cover ' alt="" />
            <div className='absolute flex items-center p-3 text-lg gap-32 top-[5px]'>
                <button className=' bg-white text-base px-2 py-2 rounded-lg'>Kiến Thức</button>
                <span className='text-sm text-white'>Andiez Le</span>
            </div>
            <p className='absolute font-semibold text-xl leading-7 top-[30%] p-3 text-white max-w-[300px] '>Hướng dẫn setup phòng cực chill cho người mới toàn tập</p>


        </div>
    );
};

export default PosFeauterItem;