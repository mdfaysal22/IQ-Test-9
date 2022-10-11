import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Option from './Option/Option';

const SIngleQuiz = ({singleQuestion, index}) => {
    const {question, correctAnswer, options} = singleQuestion;
    console.log(options)

    return (
        <div className='bg-cyan-600 rounded-lg text-left m-4 p-6'>
            <div className='flex justify-between  text-white items-center'>
                <div>
                    <h2 className='text-2xl my-2 font-semibold'>{index}. {question}</h2>
                </div>
                <div>
                    <button className='text-slate-400 hover:text-white transition-all duration-500'>
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                
                    {
                        options.map((option, id) => <Option key={id} id={id} correctAnswer={correctAnswer} option={option}></Option>)
                    }
                
            </div>
            <div></div>
        </div>
    );
};

export default SIngleQuiz;