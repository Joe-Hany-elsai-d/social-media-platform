import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { SavedPost } from './saved-posts-grid';
type wrapperProps = {
    children: React.ReactNode;
    setSelectedPost: React.Dispatch<React.SetStateAction<SavedPost | null>>
}

export default function PostModalWrapper({ children, setSelectedPost}: wrapperProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
    <div className="bg-white dark:bg-gray-800 w-full max-w-4xl relative overflow-hidden">
      {children}
      <button
        onClick={() => setSelectedPost(null)}
        className="absolute top-4 right-4 text-black dark:text-white text-2xl z-50"
      >
        <IoMdClose />
      </button>
    </div>
  </div>
  
  )
}
