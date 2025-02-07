import React from 'react'
import Search from '../search'

export default function SearchModal() {
  return (
     <div className="max-w-6xl mx-auto p-4 md:p-6">
        <div className="h-full flex flex-col bg-white dark:bg-gray-800 overflow-hidden sm:h-[38rem]">
             <Search placeholder='Search...' />

        </div> 
      </div>
        
  )
}
