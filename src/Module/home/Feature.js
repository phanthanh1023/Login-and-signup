import React from 'react';
import PosFeauterItem from '../../pages/PosFeauterItem';

const Feature = () => {
    return (
        <div className='container'>
            <div>
                <div className="w-10 h-2 bg-blue-300 mb-2"></div>
                <heading className=" text-blue-950 text-xl font-bold">
                    Bài Viết Nổi Bật
                </heading>
            </div>
            <div className='grid grid-cols-3 gap-14'>
                <PosFeauterItem></PosFeauterItem>
                <PosFeauterItem></PosFeauterItem>
                <PosFeauterItem></PosFeauterItem>
            </div>
        </div>
    );
};

export default Feature;