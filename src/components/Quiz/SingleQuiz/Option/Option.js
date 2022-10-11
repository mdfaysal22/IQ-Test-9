import React from 'react';

const Option = ({option, correctAnswer, id}) => {
    console.log(id);
    return (
        <button className='bg-gradient-to-l from-cyan-50 to-cyan-300  rounded-lg text-left p-4 m-2'>
            <input type="radio" name={correctAnswer} id={id} />
            <label htmlFor={id}>{option}</label>
        </button>
    );
};

export default Option;