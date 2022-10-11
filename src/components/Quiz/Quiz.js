import {faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SIngleQuiz from './SingleQuiz/SingleQuiz';

const Quiz = () => {
    const quiz = useLoaderData();
    const quizDetails = quiz.data;
    const {name, total, questions} = quizDetails;
    return (
        <section className='text-center my-6'>
            <div>
                <div className='bg-img py-6'>
                    <h1 className='text-cyan-600 text-3xl font-semibold'>Name of Quiz : {name}</h1>
                    <small className='text-cyan-800 font-semibold'>Total Questions {total}</small>
                </div>
                <div>
                   {
                    questions.map((singleQuestion, index) => <SIngleQuiz index={index} key={singleQuestion.id} singleQuestion={singleQuestion}></SIngleQuiz>)
                   }
                </div>

                <div>
                    <button className='bg-cyan-600 hover:bg-cyan-800 py-2 px-4 rounded-lg text-white font-semibold m-2 '>
                        submit 
                    </button>
                </div>
            </div>




            <Link to={'/home'}>
                <button className='bg-cyan-600 hover:bg-cyan-700 shadow-lg p-2 rounded-lg text-white mt-5'>
                    <span className='mr-2'>Back To Home Page</span>
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                </button>
            </Link>
        </section>
    );
};

export default Quiz;