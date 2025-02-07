import React from 'react'
import { CiSearch } from "react-icons/ci";

type searchProps = {
    placeholder: string
}

export default function Search({ placeholder}: searchProps) {
  return (
    <div className='relative rounded-lg pl-3 py-2 bg-gray-100 focus-within:border-2 focus-within:border-indigo-600 mt-10 mb-5 shadow'>
       <input 
         type="text" 
         placeholder={placeholder}
         className='w-full bg-inherit focus:outline-none'
        />     
        <CiSearch className='absolute right-2 top-1/2 -translate-y-1/2 text-xl text-gray-600' />
    </div>
  )
}
