import {faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleQuiz from './SingleQuiz/SingleQuiz';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = () => {
    const quiz = useLoaderData();
    const quizDetails = quiz.data;
    const {name, total, questions} = quizDetails;

    // State For Correct Answer: 
    const [right, setRight] = useState([]);
    const [wrong, setWrong] = useState([]);
    const [exist, setExist] = useState([]);
    
    const notify = () => toast(`
        Your Right Answer ${right.length} 
        and
        Your Wrong Answer ${wrong.length}
    `);

    const checkAns = (correct, submit, id) => {
        const existed = exist.find(existed_id => existed_id === id);
        if(existed){
            alert('Already Clicked');
        }else{
            const newExist = [...exist, id];
            setExist(newExist);
            if(correct === submit){
                const NewRightAns = [...right, correct];
                setRight(NewRightAns);
                toast(`Your Answer is Right.`)
            }else{
                const newWrongAns = [...wrong, submit];
                setWrong(newWrongAns);
                toast(`Your Answer is Wrong. Right answer is ${correct}`)
            }
        }
    }



    return (
        <section className='text-center my-6'>
            <div>
                <div className='bg-img py-6'>
                    <h1 className='text-cyan-600 text-3xl font-semibold'>Name of Quiz : {name}</h1>
                    <small className='text-cyan-800 font-semibold'>Total Questions {total}</small>
                </div>
                <div>
                   {
                    questions.map((singleQuestion, index) => <SingleQuiz checkAns={checkAns} index={index} key={singleQuestion.id} singleQuestion={singleQuestion}></SingleQuiz>)
                   }
                </div>

                <div>
                    <button onClick={notify} className='bg-cyan-600 hover:bg-cyan-800 py-2 px-4 rounded-lg text-white font-semibold m-2 '>
                        submit and See Result
                    </button>
                    <ToastContainer />
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