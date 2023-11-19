import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Homepage';
import Todo from './exercicio1/todo';
import Todoex2 from './exercicio2/todoex2';
import Bank from './exercicio3/bank';
import GlobalStyles from './GlobalStyles';

const App = () => {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Homepage />,

    },
    {
      path: 'exercicio1',
      element: <Todo />,
    },
    {

      path: 'exercicio2',
      element: (

        <div>
          <GlobalStyles />
          <Todoex2 />
        </div>

      ),
    },
    {
      path: 'exercicio3',
      element: <Bank />,
    },
  ]);
  return <RouterProvider router={router} />;
};


export default App;