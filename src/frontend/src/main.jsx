import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"
import ErrorPage from '../components/errorPage'
import { Home } from '../pages/Home'
import { Manager } from '../pages/Manager'
import { TestPage } from '../pages/TestPage'
import { Dell } from "../pages/Dell";
import {Menu} from "../components/menu/menu";
import { Allprojects } from '../pages/Allprojects';
import { QueryClientProvider, QueryClient } from "react-query"

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Hello
        <Link to="/home">home</Link>
      </div>
    ),
  },
  {
    path: "/home",
    element: <Home />,
  }, 
  {
    path: "/Allprojects",
    element: <Allprojects />
  },
  {
    path: "/Manager",
    element: <Manager />,
  },
  {
    path: "/test",
    element: <TestPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "alo",
        element: <h1>children</h1>,
      },
    ],
  },
  {
    path: "/Dell",
    element: <Dell/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Manager",
        element: <Manager/>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
