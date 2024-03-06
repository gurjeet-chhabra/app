import React from 'react'
import { BsSortAlphaDown } from "react-icons/bs";
import { IoFilterOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineVideocam } from "react-icons/md";
import { LuImport } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { GrCheckboxSelected } from "react-icons/gr";
import { MdOutlineArchive } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate} from 'react-router-dom'
import { TbBrandDisney } from "react-icons/tb";
import { FaCcPaypal } from "react-icons/fa6";
import { FaWix } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaIntercom } from "react-icons/fa";
import { FaEvernote } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";
import { FaInvision } from "react-icons/fa";


// created using dummy or imaginable data

// used every logo from react icons just for demo.

function Dashboard() {
     
  const navigate = useNavigate();

  const handleclick = () => {
      navigate("/function");
  }
  return (
    <div className='w-[700px]'>
        <div className='flex items-center justify-between gap-72 text-black'>
             <div className='flex'>
                <div className=' font-normal sidebar rounded text-sm w-28 h-7 items-center justify-center flex m-1 mt-2  bg-slate-50  hover:bg-slate-200 active:bg-slate-100' onClick={handleclick} >
                  <TiThSmallOutline/>All Brands
                <MdArrowDropDown /></div>
                <div className=' font-normal sidebar rounded text-sm w-20 h-7 items-center justify-center flex m-1 mt-2  bg-slate-50  hover:bg-slate-200 active:bg-slate-100' onClick={handleclick}>
                Desk <MdArrowDropDown /></div>
                <div className=' font-normal sidebar rounded text-sm w-20 h-7 items-center justify-center flex m-1 mt-2  bg-slate-50  hover:bg-slate-200 active:bg-slate-100 ' onClick={handleclick}>
                Tags <MdArrowDropDown /></div>
                <div className=' font-normal sidebar rounded text-sm w-20 h-7 items-center justify-center flex m-1 mt-2  bg-slate-50  hover:bg-slate-200 active:bg-slate-100' onClick={handleclick}>
                <BsSortAlphaDown />Sort</div>
                <div className=' font-normal sidebar rounded text-sm w-20 h-7 items-center justify-center flex m-1 mt-2 bg-slate-50  hover:bg-slate-200 active:bg-slate-100' onClick={handleclick}>
                <IoFilterOutline />Filter</div>

             </div>
             <div className='flex'>
             <div className=' font-normal sidebar rounded w-28 text-sm h-7 items-center justify-center flex m-1 mt-2  bg-slate-50  hover:bg-slate-200 active:bg-slate-100' onClick={() => 
             alert("create a meeting")}>
             <MdOutlineVideocam />Meeting</div>
                <div className=' font-normal sidebar text-sm rounded w-28 h-7 items-center justify-center flex m-1 mt-2  bg-slate-50  hover:bg-slate-200 active:bg-slate-100'
                onClick={() => alert("import items")}>
                <LuImport />Import/Export</div>
             </div>
             </div>
             <div className='flex items-center mt-2'>
                <div>
                <h1 className=' w-52 h-10 dash font-semibold text-sm flex items-center text-gray-500'>Brand</h1>
                <p className='w-52 h-10 dash font-semibold text-sm gap-2 flex items-center '><FaWix />Wix</p>
                <p className='w-52 h-10 dash font-semibold text-sm gap-2 flex items-center'><FaShopify />Shopify</p>
                <p className='w-52 h-10 dash font-semibold text-sm gap-2 flex items-center'> <FaMailchimp />Mailchimp</p>
                <p className='w-52 h-10 dash  font-semibold text-sm gap-2 flex items-center'> <FaCcPaypal />Paypal</p>
                <p className='w-52 h-10 dash font-semibold text-sm gap-2 flex items-center'> <TbBrandDisney />Disney</p>
                <p className='w-52 h-10 dash font-semibold text-sm gap-2 flex items-center'><FaIntercom />Intercom</p>
                <p className='w-52 h-10 dash font-semibold text-sm gap-2 flex items-center'><FcGoogle className='ml-1'/>Google</p>
                <p className='w-52 h-10 dash font-semibold text-sm gap-2 flex items-center'><FaMicrosoft />Microsoft</p>
                <p className='w-52 h-10 dash font-semibold text-sm gap-2 flex items-center'> <FaEvernote />Evernote</p>
                <p className='w-52 h-10 dash font-semibold text-sm gap-2 flex items-center'> <FaInvision />Invision</p>
                </div>
                <div>
                <h1 className=' w-44 h-10 dash font-semibold text-sm text-gray-500 flex items-center'>Description</h1>
                <p className='w-44 h-10 dash font-semibold text-sm  flex items-center'>Develop a personalized m</p>
                <p className='w-44 h-10 dash font-semibold text-sm  flex items-center'>Introduce a cloud based..</p>
                <p className='w-44 h-10 dash  font-semibold text-sm  flex items-center'>Develop a mobile  based</p>
                <p className='w-44 h-10 dash font-semibold text-sm  flex items-center'>this program could include</p>
                <p className='w-44 h-10 dash font-semibold text-sm  flex items-center'>Introduce a B2B solution</p>
                <p className='w-44 h-10 dash font-semibold text-sm  flex items-center'>Implement an AI driven</p>
                <p className='w-44 h-10 dash font-semibold text-sm  flex items-center'>offer a comprehensive</p>
                <p className='w-44 h-10 dash font-semibold text-sm  flex items-center'>this could include a smart</p>
                <p className='w-44 h-10 dash font-semibold text-sm  flex items-center'>Launch an advisory service</p>
                <p className='w-44 h-10 dash font-semibold text-sm  flex items-center'>the tool would analyze tre</p>
                </div>
                <div>
                <h1 className=' w-40  font-semibold text-sm h-10 dash text-gray-500 flex items-center'>Members</h1>
                <div className='w-40 font-semibold text-sm h-10 dash flex flex-wrap items-center justify-center'>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                </div>
                <div className='w-40 font-semibold text-sm h-10 dash flex flex-wrap items-center justify-center'>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                </div>
                <div className='w-40 font-semibold text-sm h-10 dash flex flex-wrap items-center justify-center'>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                </div>
                <div className='w-40 font-semibold text-sm h-10 dash flex flex-wrap items-center justify-center'>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                </div>
                <div className='w-40 font-semibold text-sm h-10 dash flex flex-wrap items-center justify-center'>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                </div>
                <div className='w-40 font-semibold text-sm h-10 dash flex flex-wrap items-center justify-center'>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                </div>
                <div className='w-40 font-semibold text-sm h-10 dash flex flex-wrap items-center justify-center'>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                </div> <div className='w-40 font-semibold text-sm h-10 dash flex flex-wrap items-center justify-center'>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                </div>
                <div className='w-40 font-semibold text-sm h-10 dash flex flex-wrap items-center justify-center'>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                </div> <div className='w-40 font-semibold text-sm h-10 dash flex flex-wrap items-center justify-center'>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                  <div className=' rounded-full w-6 h-6 bg-slate-300'></div>
                </div>
                </div>
                <div>
                <h1 className=' w-40  font-semibold text-sm h-10 dash flex items-center text-gray-500'>Categories</h1>
                <div className=' w-40  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-28 h-6 bg-purple-100 text-purple-400 flex items-center justify-center rounded'>Automation</div>
                </div>
                <div className=' w-40  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-24 h-6 bg-orange-100 text-orange-400 flex items-center justify-center rounded'>Ecommerce</div>
                </div> <div className=' w-40  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-20 h-6 bg-green-100 text-green-400 flex items-center justify-center rounded'>SMS</div>
                </div> <div className=' w-40  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-28 h-6 bg-blue-100 text-blue-400 flex items-center justify-center rounded'>Marketplace</div>
                </div>
                <div className=' w-40  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-20 h-6 bg-yellow-100 text-yellow-400 flex items-center justify-center rounded'>B2B</div>
                </div> <div className=' w-40  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-28 h-6 bg-purple-100 text-purple-400 flex items-center justify-center rounded'>Technology</div>
                </div> <div className=' w-40  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-24 h-6 bg-yellow-100 text-yellow-400 flex items-center justify-center rounded'>finance</div>
                </div>
                <div className=' w-40  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-28 h-6 bg-green-100 text-green-400 flex items-center justify-center rounded'>Transportation</div>
                </div> <div className=' w-40  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-28 h-6 bg-purple-100 text-purple-400 flex items-center justify-center rounded'>Publishing</div>
                </div> <div className=' w-40  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-28 h-6 bg-blue-100 text-blue-400 flex items-center justify-center rounded'>web services</div>
                </div>
                </div>
                <div>
                <h1 className='  w-44  font-semibold text-sm h-10 dash text-gray-500 flex items-center'>Tags</h1>
                <div className=' w-44  font-semibold text-sm h-10 dash  flex items-center justify-start'>
                  <div className='w-32 h-6 bg-gray-100  rounded flex items-center justify-center ml-1'>#digitalinformation</div>
                </div>
                <div className=' w-44  font-semibold text-sm h-10 dash  flex items-center justify-start'>
                  <div className='w-32 h-6 bg-gray-100  rounded flex items-center justify-center ml-1'>#digitalinformation</div>
                </div> <div className=' w-44  font-semibold text-sm h-10 dash  flex items-center justify-start'>
                  <div className='w-32 h-6 bg-gray-100  rounded flex items-center justify-center ml-1'>#digitalinformation</div>
                </div> <div className=' w-44  font-semibold text-sm h-10 dash  flex items-center justify-start'>
                  <div className='w-32 h-6 bg-gray-100  rounded flex items-center justify-center ml-1'>#digitalinformation</div>
                </div>
                <div className=' w-44  font-semibold text-sm h-10 dash  flex items-center justify-start'>
                  <div className='w-32 h-6 bg-gray-100  rounded flex items-center justify-center ml-1'>#digitalinformation</div>
                </div> <div className=' w-44  font-semibold text-sm h-10 dash  flex items-center justify-start'>
                  <div className='w-32 h-6 bg-gray-100  rounded flex items-center justify-center ml-1'>#digitalinformation</div>
                </div> <div className=' w-44  font-semibold text-sm h-10 dash  flex items-center justify-start'>
                  <div className='w-32 h-6 bg-gray-100  rounded flex items-center justify-center ml-1'>#digitalinformation</div>
                </div>
                <div className=' w-44  font-semibold text-sm h-10 dash  flex items-center justify-start'>
                  <div className='w-32 h-6 bg-gray-100  rounded flex items-center justify-center ml-1'>#digitalinformation</div>
                </div> <div className=' w-44  font-semibold text-sm h-10 dash  flex items-center justify-start'>
                  <div className='w-32 h-6 bg-gray-100  rounded flex items-center justify-center ml-1'>#digitalinformation</div>
                </div> <div className=' w-44  font-semibold text-sm h-10 dash  flex items-center justify-start'>
                  <div className='w-32 h-6 bg-gray-100  rounded flex items-center justify-center ml-1'>#digitalinformation</div>
                </div>
                </div>
                <div>
                <h1 className=' w-32 font-semibold text-sm  h-10 dash text-gray-500 flex items-center '>Next Meeting</h1>
                <div className=' w-32  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-28 h-6 bg-purple-100 text-purple-400 flex items-center justify-center rounded'>in 30 minutes</div>
                </div>
                <div className=' w-32  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-28 h-6 bg-purple-100 text-purple-400 flex items-center justify-center rounded'>tomorrow</div>
                </div><div className=' w-32  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-28 h-6 bg-slate-100 text-slate-400 flex items-center justify-center rounded'>next month</div>
                </div><div className=' w-32  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-28 h-6 bg-blue-100 text-blue-400 flex items-center justify-center rounded'>tomorrow</div>
                </div>
                <div className=' w-32  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-28 h-6 bg-green-100 text-green-400 flex items-center justify-center rounded'>in 6 hours</div>
                </div><div className=' w-32  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-28 h-6 bg-slate-100 text-slate-400 flex items-center justify-center rounded'>no contact</div>
                </div><div className=' w-32  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-28 h-6 bg-green-100 text-green-400 flex items-center justify-center rounded'>in 1 hour</div>
                </div>
                <div className=' w-32  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-28 h-6 bg-green-100 text-green-400 flex items-center justify-center rounded'>in 30 minutes</div>
                </div><div className=' w-32  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-28 h-6 bg-slate-100 text-black-400 flex items-center justify-center rounded'>next month</div>
                </div><div className=' w-32  font-semibold text-sm h-10 dash justify-center flex items-center'>
                  <div className='w-28 h-6 bg-purple-200 text-purple-400 flex items-center justify-center rounded'>no contact</div>
                </div>
                </div>
                <div>
                <h1 className=' w-10 font-semibold text-sm h-10 dash text-gray-500 flex items-center'>+</h1>
                <p className=' w-10 font-semibold text-sm  h-10 dash '></p>
                <p className='  w-10 font-semibold text-sm  h-10 dash'></p>
                <p className=' w-10 font-semibold text-sm  h-10 dash '></p>
                <p className='  w-10 font-semibold text-sm  h-10 dash '></p>
                <p className=' w-10 font-semibold text-sm  h-10 dash'></p>
                <p className=' w-10 font-semibold text-sm  h-10 dash'></p>
                <p className=' w-10 font-semibold text-sm  h-10 dash'></p>
                <p className=' w-10 font-semibold text-sm  h-10 dash'></p>
                <p className=' w-10 font-semibold text-sm  h-10 dash'></p>
                <p className=' w-10 font-semibold text-sm  h-10 dash'></p>
                </div>
             </div>
             <div className='flex w-[900px]'>
              <p className=' w-96 h-10 dash font-semibold text-sm flex items-center justify-end text-gray-500'><p className='mr-4'> +count</p></p>
              <p className=' w-40 h-10 dash font-semibold text-sm  flex items-center text-gray-500'>+Add calculation</p>
              <p className='w-40 h-10 dash font-semibold text-sm  flex items-center text-gray-500'>+Add calculation</p>
              <p className='w-40 h-10 dash font-semibold text-sm  flex items-center text-gray-500'>+Add calculation</p>
             </div>
             <div className='mt-40 flex justify-center items-center gap-2 w-[900px]'>
              <div className='dash w-20 h-6 rounded gap-2 bg-slate-100 flex items-center justify-center text-sm font-semibold'>
              <GrCheckboxSelected /> selected
              </div>
              <div className='dash w-20 h-6 rounded bg-slate-100 flex items-center justify-center text-sm font-semibold'>
              <MdOutlineArchive /> Archive
              </div>
              <div className='dash w-20 h-6 rounded bg-slate-100 flex items-center justify-center text-sm font-semibold'>
              <MdDeleteOutline /> delete
              </div>
              <div className='dash w-18 h-6 rounded bg-slate-100 flex items-center justify-center text-sm font-semibold'>
                more <MdArrowDropDown />
              </div>
              <div className='dash w-10 h-6 rounded bg-slate-100 flex items-center justify-center text-sm font-semibold'>
                x
              </div>
             </div>
    </div>
  )
}

export default Dashboard