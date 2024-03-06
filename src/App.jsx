import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

// using react for fast loading and rendering

function App() {

  return (
    <div className='flex '>
     <SideBar/>
     <div className='w-full mr-2'>
     <Navbar/>
     <Dashboard/>
     </div>
    </div>
  )
}

export default App
