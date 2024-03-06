import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Function  from './components/Function.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path:"/function",
    element:<Function/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
