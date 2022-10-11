import React from 'react';

const Posts = ({blog}) => {
    const { name, about} = blog;
    return (
        <div className=''>
            <div className='p-2 bg-cyan-200 shadow-xl  md:m-10 rounded-lg'>
                <h2 className='text-sm md:text-lg lg:text-2xl font-semibold my-2'>{name}</h2>
                <p className='text-xs md:text-sm lg:text-xl'>
                    {about}
                </p>
            </div>
        </div>
    );
};

export default Posts;