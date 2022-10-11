import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Option from './Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SIngleQuiz = ({singleQuestion, index, checkAns}) => {
    const {question, correctAnswer, options, id} = singleQuestion;

    const seeAns = () => toast(correctAnswer);

    return (
        <div className='bg-cyan-600 rounded-lg text-left m-4 p-6'>
            <div className='flex justify-between  text-white items-center'>
                <div>
                    <h2 className='text-md md:text-xl lg:text-2xl my-2 font-semibold'>{index}. {question}</h2>
                </div>
                <div>
                    <button onClick={seeAns} className='text-slate-400 hover:text-white transition-all duration-500'>
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    </button>
                        <ToastContainer />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                
                    {
                        options.map((option, optionId) => <Option checkAns={checkAns} key={optionId} optionId={optionId} id={id} correctAnswer={correctAnswer} option={option}></Option>)
                    }
                
            </div>
            <div></div>
        </div>
    );
};

export default SIngleQuiz;