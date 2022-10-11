import React from 'react';

const Option = ({option,checkAns, correctAnswer,id, optionId}) => {



    return (
        <button onClick={() => {checkAns(correctAnswer, option, id)}} className='bg-gradient-to-l from-cyan-50 to-cyan-300  rounded-lg text-left p-4 m-2'>
            <input className='mr-2' type="radio" name={correctAnswer} id={optionId} />
            <label className='text-xs md:text-md lg:text-lg' htmlFor={optionId}>{option}</label>
        </button>
    );
};

export default Option;