import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"
import ErrorPage from '../components/errorPage'
import { Home } from '../pages/Home'
import { Manager } from '../pages/Manager'
import { TestPage } from '../pages/TestPage'
import { Dell } from "../pages/Dell";

import { QueryClientProvider, QueryClient } from "react-query"
import { ThemeProvider } from "@mui/material"
import { theme } from "../themes/theme"
import { Allprojects } from '../pages/Allprojects'
import { Login } from '../pages/Login'
import { Profile } from '../pages/Profile'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />
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
    element: <Dell />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Manager",
        element: <Manager />,
      },
      {
        path: "AllProject",
        element: <Allprojects />
      },
      // {
      //   path: "Modal",
      //   element: <AlertDialogSlide/>
      // },
      {
        path: "Profile",
        element: <Profile />
      }
    ],
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
