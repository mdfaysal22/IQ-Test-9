import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Posts from './Posts/Posts';

const Blog = () => {
    const blogs = useLoaderData();
    return (
        <div>
            <div className='bg-img text-center py-10'>
                <h1 className='text-md md:text-xl lg:text-3xl font-semibold uppercase'>WelCome To Our Blog Page.</h1>
                <small className='text-xs text-cyan-700 font-semibold'>Available Blog {blogs.length}</small>
            </div>
            <div>
                {
                    blogs.map(blog => <Posts key={blog.id} blog={blog}></Posts>)
                }
            </div>
        </div>
    );
};

export default Blog;