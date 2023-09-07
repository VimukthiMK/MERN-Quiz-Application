import React, { useState } from 'react'

const Questions = () => {
    
    const [setChecked] = useState(false)

    function onSelect() {
        setChecked(true)
    }
   

  return (
    <div className='questions'>
        <h2 className='text-light'>Simple Question</h2>

        <ul>
            <li>
                <input 
                            type="radio"
                            value={true}
                            name="options"
                            id={`q1-option`}
                            onChange={onSelect}
                />

                        <label className='text-primary' htmlFor="q1-option">Option</label>
                        <div className='check checked'></div>
            </li>
            
            
              
        </ul>
    </div>
  )
  };
  
  export default Questions;