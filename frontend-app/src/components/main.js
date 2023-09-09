import React, { useRef } from 'react'
import '../styles/main.css'
import {Link} from 'react-router-dom'

const Main = () => {
    const inputRef=useRef(null)
    return (
        
        <div className='container'>
            <div className='header'>
                <h1>Quiz app</h1>
            </div>

            <div className='instructions'>
                <ol>
                    <li>This lines contain app instructions.</li>
                    <li>This lines contain app instructions.</li>
                    <li>This lines contain app instructions.</li>
                    <li>Th is lines contain app instructions.</li>
                </ol>
            </div>

            <div className='form-container'>
                <form id='form'>
                    <input className='userid' ref={inputRef} type='text' placeholder='Username' required/>
                </form>
            </div>
            
            <div className='start-container'>
                <Link className='btn' to={'quiz'}>Start quiz</Link>
            </div>
        </div>
    
     )
  };
  
  export default Main;
