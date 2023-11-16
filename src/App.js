import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Homepage';
import Todo from './exercicio1/todo';
import Todoex2 from './exercicio2/todoex2';
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

        <>
          <GlobalStyles />
          <Todoex2 />
        </>

      ),
    }
  ]);

  createRoot(document.getElementById('root')).render(


    <RouterProvider router={router} />

  );
};


export default App;