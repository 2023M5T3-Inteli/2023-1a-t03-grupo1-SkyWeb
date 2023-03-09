import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"
import ErrorPage from '../components/errorPage'
import { Home } from '../pages/Home'
import { TestPage } from '../pages/TestPage'
import { QueryClientProvider, QueryClient } from "react-query"
import { Profile } from '../pages/Profile'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello
      <Link to="/home">home</Link>
    </div>
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/test",
    element: <TestPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "alo",
        element: <h1>children</h1>
      }
    ]
  },
  {
    path: "/profile",
    element: <Profile />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
