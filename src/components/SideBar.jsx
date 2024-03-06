import React from 'react'
import { FaPenNib } from "react-icons/fa";
import { PiMicrosoftTeamsLogoLight } from "react-icons/pi";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { CiFolderOn } from "react-icons/ci";
import { IoPersonAdd } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { GiLoincloth } from "react-icons/gi";

function SideBar() {
  return (
    <div className='sidebar rounded h-full flex-col flex m-2 sm:flex'>
      <div className='w-52 items-center justify-between flex mt-2 ml-2'>
        <div className='ml-1 flex items-center justify-start gap-3'>
          <div> <GiLoincloth /></div>
        <div>  <p className='font-semibold text-sm text-gray-600'>INC</p>
        <h2 className='font-semibold'>InnovateHub</h2></div>
        <div className=' rounded-full bg-pink-400 w-8 h-8 ml-6'></div>
        </div>
      </div>
      <div className=' w-52 mt-4 ml-2'>
      <div className=' flex flex-col'>
        <p className=' font-semibold text-base text-gray-600 h-8 flex items-center justify-start gap-2 hover:bg-slate-200 active:bg-slate-100'>
        <FaPenNib /> Design Team <div className='w-12 rounded h-4 bg-slate-200 ml-8 text-xs text-slate-500 flex items-center justify-center'>x+1</div></p>
       <p className=' font-semibold text-base text-gray-600  h-8 flex items-center justify-start gap-2  hover:bg-slate-200 active:bg-slate-100'>
       <PiMicrosoftTeamsLogoLight /> Marketing Team <div className='w-12 rounded h-4 bg-slate-200 ml-2 text-xs text-slate-500 flex items-center justify-center'>x+1</div></p>
       <p className=' font-semibold text-gray-600 text-base gap-2 h-8 flex items-center justify-start  hover:bg-slate-200 active:bg-slate-100'>
       <MdOutlineCreateNewFolder /> Development Team</p>
         <p className=' text-gray-600 font-semibold text-base h-8 flex items-center justify-start gap-2  hover:bg-slate-200 active:bg-slate-100'>
         <MdOutlineCreateNewFolder />Create a team </p>
         </div>
      </div>
      <div className='w-52 ml-2'>
      <h2 className=' font-semibold text-base text-gray-400 h-8 flex items-center justify-start '> Folders <p className='ml-32'>+</p></h2>
      <h2 className=' font-semibold  text-base text-gray-600 h-8 gap-2 flex items-center  hover:bg-slate-200 active:bg-slate-100'>
      <CiFolderOn /> Products</h2>
      <div className='flex flex-col items-center justify-center'>
      <ul className='flex flex-col'>
                <li className=' font-semibold  text-gray-600 h-8  hover:bg-slate-200 active:bg-slate-100'> Roadmap </li>
               <li className=' font-semibold  text-gray-600 h-8  hover:bg-slate-200 active:bg-slate-100'> Feedback </li>
              <li className=' font-semibold  text-gray-600 h-8  hover:bg-slate-200 active:bg-slate-100'> Performace </li>
                 <li className=' font-semibold  text-gray-600 h-8  hover:bg-slate-200 active:bg-slate-100'> Team </li>
                 <li className=' font-semibold  text-gray-600 h-8  hover:bg-slate-200 active:bg-slate-100'> Analytics </li>
                <li className=' font-semibold  text-gray-600 h-8 gap-2 flex items-center justify-start hover:bg-slate-200 active:bg-slate-100'>
                <MdOutlineCreateNewFolder /> Add new sub </li>
             </ul>
      </div>
      <div className='w-52 ml-2'>
      <p className=' font-semibold text-base text-gray-600 h-8 flex items-center  hover:bg-slate-200 active:bg-slate-100'>
      <CiFolderOn />Sales </p>
            <p className=' font-semibold   text-base text-gray-600 h-8 flex items-center  hover:bg-slate-200 active:bg-slate-100'>
            <CiFolderOn />Design  </p>
            <p className=' font-semibold   text-base text-gray-600 h-8 flex items-center  hover:bg-slate-200 active:bg-slate-100'>
            <CiFolderOn />Office</p>
            <p className=' font-semibold  text-base text-gray-600 h-8 flex items-center  hover:bg-slate-200 active:bg-slate-100'>
            <CiFolderOn />Legal </p>
      </div>
      </div>
      <div className='flex flex-col items-center mt-20 w-52 ml-2'>
        <div className='w-52'>
          <p  className=' font-semibold  text-base text-gray-600 h-8 flex items-center justify-start  hover:bg-slate-200 active:bg-slate-100'>
          <IoPersonAdd />Invite teammates</p>
          <p  className=' font-semibold  text-base text-gray-600 h-8 flex items-center justify-start  hover:bg-slate-200 active:bg-slate-100'>
          <IoMdHelpCircleOutline />help and first steps</p>
          <p  className=' font-semibold text-sm text-gray-600 h-8 flex items-center justify-between hover:bg-slate-200 active:bg-slate-100'>7 days left on trial
          <div className='w-15 h-5 bg-black text-xs flex items-center justify-center rounded mr-1'>add billing</div></p>
        </div>
      </div>
    </div>
   
  )
}

export default SideBar