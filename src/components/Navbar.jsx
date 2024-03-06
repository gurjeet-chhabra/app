import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import { TbFolders } from "react-icons/tb";

function Navbar() {

  return (
    <div className=' sm:flex lg:flex w-full sidebar h-10 rounded mt-2 mr-2 flex justify-between items-center'>
      <h2 className='ml-2 font-semibold text-gray-600'> Products</h2>
      <div className='flex gap-1 mr-2'>
        <div className='flex sidebar rounded items-center gap-2'>
        <CiSearch /> 
        <input className=' w-32 h-7 rounded font-normal text-gray-600 text-sm flex items-center gap-2 justify-start' placeholder='search for..'/>
        </div>
        <div className='w-8 h-7 sidebar rounded  bg-slate-100 font-normal text-gray-600  flex items-center justify-center  hover:bg-slate-200 active:bg-slate-100'>
        <TbFolders />
        </div>
        <div className='w-8 h-7 sidebar bg-slate-100 rounded font-normal text-gray-600  flex items-center justify-center  hover:bg-slate-200 active:bg-slate-100'><IoSettingsSharp /></div>
      </div>
    </div>
  )
}

export default Navbar