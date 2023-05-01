import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './Pages/Home/Home'
import RootLayout from './Routes/RootLayout'
import About from './Pages/About/About'
import Profile from './Pages/Profile/Profile'
import Login from './Pages/Login/Login'
import './App.css'

const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout />,
    children:[
      
      {
        path:"/",
        element:<Home />
      },
   
      {
        path:"/profile",
        element:<Profile />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/login",
        element:<Login />
      },
   
    ]
  }
  
])


export default function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
