import React, { useEffect, useState } from 'react'
import data from '../database/data';

const Questions = () => {
    
    const [setChecked] = useState(false)

    function onSelect() {
        setChecked(true)
    }

    const questions = data[0]

    useEffect(()=>{
        console.log(questions)
    })
   

  return (
    <div className='questions'>
        <h2 className='text-light'>{questions.question}</h2>

        <ul key={Questions.id}>
           {
            questions.options.map((q,i)=>(
                <li key={i}>
                <input 
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-options`}
                            onChange={onSelect}
                />

                        <label className='text-primary' htmlFor={`q${i}-options`}>{q}</label>
                        <div className='check'></div>
            </li>
            ))
           }
            
            
              
        </ul>
    </div>
  )
  };
  
  export default Questions;