import React from 'react'
import Questions from './questions'


const Quiz = () => {
    
    // Next button event handler
        const onNext = () => {
        alert('next');
        };

// Prev button event handler
        const onPrev = () => {
        alert('prev');
        };

    return (
        
        <div className='container'>
        <h1 className='title text-light'>Quiz App</h1>

         {/* Display questions Here */}
         <Questions/>
        <div className='grid'>
           <button className='btn prev' onClick={onPrev}>Prev</button> 
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
    
    
    )
};
  export default Quiz;
