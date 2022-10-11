import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const QuizItem = ({quizItem}) => {
    const {logo, name, total} = quizItem;
    return (
        <div className='shadow-md rounded-lg bg-cyan-100 '>
            <div className='m-4 rounded-lg bg-slate-500'>
                <img src={logo} alt="" />
            </div>
            <div className='m-4 flex justify-between items-center'>
                <div>
                    <h2 className='text-xl font-semibold text-cyan-900'>{name} </h2>
                    <small className='text-cyan-500 text-xs font-semibold'> {total} Questions.</small>
                </div>
                <button className='p-2 rounded-lg hover:bg-cyan-900 bg-cyan-800 text-white'>
                    <span className='mr-1'>Open Quiz</span>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default QuizItem;