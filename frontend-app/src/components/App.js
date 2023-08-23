import '../styles/App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

/** Import Components */
import main from './main';
import quiz from './quiz';
import results from './results';



 /**react routes*/
const router= createBrowserRouter([
  {
    path : '/',
    element: <main></main>

  },
  {
    path : '/quiz',
    element: <quiz></quiz>

  },
  {
    path : '/result',
    element: <results></results>

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
