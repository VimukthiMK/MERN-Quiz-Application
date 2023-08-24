import '../styles/App.css';
import React from 'react';


import {createBrowserRouter, RouterProvider} from 'react-router-dom'


/** Import Components */
import Main from './main';
import Quiz from './quiz';
import Results from './results';



 /**react routes*/
const router= createBrowserRouter([
  {
    path : '/',
    element: <Main></Main>

  },
  {
    path : '/quiz',
    element: <Quiz></Quiz>

  },
  {
    path : '/results',
    element: <Results></Results>

  },
])
function App() {
  return (
    <>
     <RouterProvider router={router}/>

    </>
  );
}

export default App;
