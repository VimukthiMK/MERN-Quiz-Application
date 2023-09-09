import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/results.css'

const Results = () => {

    function onRestart(){
        console.log("Restrat")
    }
    return (

        <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        <div className='result flex-center'>
            <div className='flex'>
                <span>Username :</span>
                <span className='bold'>Amila</span>
            </div>
            <div className='flex'>
                <span>Total Quiz Points : </span>
                <span className='bold'>50</span>
            </div>
            <div className='flex'>
                <span>Total Questions : </span>
                <span className='bold'>10</span>
            </div>
            <div className='flex'>
                <span>Total Attempts : </span>
                <span className='bold'>2</span>
            </div>
            <div className='flex'>
                <span>Total Earn Points : </span>
                <span className='bold'>50</span>
            </div>
            <div className='flex'>
                <span>Quiz Result :</span>
                <span className='bold'>Passed</span>
            </div>
        </div>

        <div className="start">
            <Link className='res-btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div>
    </div>

    ) 
  };
  
  export default Results;

