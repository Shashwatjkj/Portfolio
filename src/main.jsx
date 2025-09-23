import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from "react-dom/client"

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/home'
import About from './components/about'
import Product from './components/product'
import Contact from './components/contact'
import App from './App'


const maping=createBrowserRouter([
  {
    path : '/',
    element: <App />,
    children:[
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "projects",
        element: <Product/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={maping} />  
)
