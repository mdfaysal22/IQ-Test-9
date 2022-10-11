import React from 'react';

const Posts = ({blog}) => {
    const {picture, name, about} = blog;
    return (
        <div className='bg-cyan-200 shadow-xl my-6 rounded-lg'>
            <div className='p-2'>
                <div className='w-80 h-56'>
                    <img className='h-full w-full rounded-lg' src={picture} alt="" />
                </div>
                <h2 className='text-xl font-semibold my-2'>{name}</h2>
                <p>
                    {about.slice(0, 40)}...
                </p>
                <button className='bg-cyan-600 text-white my-2 p-2 rounded-lg hover:bg-cyan-700'>
                    <span>Read More</span>
                </button>
            </div>
        </div>
    );
};

export default Posts;