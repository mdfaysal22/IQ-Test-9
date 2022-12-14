import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import QuizItem from './QuizItem/QuizItem';

const Home = () => {
    const quizData = useLoaderData();
    const quizs = quizData.data;
   
    return (
        <div>
            <div className='w-full p-16 -z-10 text-center bg-img'>
                    <h1 className='text-md md:text-xl lg:text-3xl uppercase font-semibold'>Welcome TO Our IQ Test Site.</h1>
            </div>
            <div className='m-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between items-center'>
                    {
                        quizs.map(quizItem => <QuizItem key={quizItem.id} quizItem= {quizItem}></QuizItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;