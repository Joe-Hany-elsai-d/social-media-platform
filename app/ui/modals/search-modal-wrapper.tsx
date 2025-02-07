import React from 'react'
import { IoMdClose } from 'react-icons/io'

type searchWrapperProps = {
    children: React.ReactNode;
    setOpenSearch: React.Dispatch<React.SetStateAction<true | false>>
}
export default function SearchModalWrapper({ children, setOpenSearch }: searchWrapperProps) {
  return (
   
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 w-full max-w-4xl relative overflow-hidden h-full sm:h-[85%]">
          {children}
          <button
            onClick={() => setOpenSearch(false)}
            className="absolute top-4 right-4 text-black dark:text-white text-2xl z-50"
          >
            <IoMdClose />
          </button>
        </div>
      </div>
      
  )
}
