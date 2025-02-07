"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegComment, FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import PostModal from './modals/post-modal';
import { Post } from '../lib/definitions';



const PostCard = ({
  id,
  title,
  postImage,
  date,
  liked,
  uploaderImage,
  username,
  saved,
  comments,
  numberOfLikes,
  numberOfComments
}: Post) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCommentClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="bg-inherit px-6 py-4 w-[min(30rem, 100%)]">
        <div>
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full object-cover w-8 h-8 cursor-pointer"
              src={uploaderImage}
              alt="Post uploader image"
              quality={95}
              width={300}
              height={300}
            />        
            <p className="text-black font-bold">{username}</p>
            <p className="text-gray-500 font-thin text-sm">{date}</p>
            
          </div>
        </div>
        <p className="leading-loose mt-4">{title}</p>
        <Image
          className="object-cover w-full mb-3 h-[25rem]"
          src={postImage}
          width={500}
          height={900}
          alt="Post image"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl">
            <button>
              {liked ? (
                <AiFillHeart className="text-red-600" />
              ) : (
                <AiOutlineHeart />
              )}
            </button>
            <button onClick={handleCommentClick}>
              <FaRegComment />
            </button>
          </div>
          <button>{saved ? <FaBookmark /> : <FaRegBookmark />}</button>
        </div>
        <p className='mt-2 text-sm'>{numberOfLikes} likes</p>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-30">
          <div className="bg-white dark:bg-gray-800  w-full max-w-4xl overflow-hidden">
            <PostModal 
              post={{
                postImage: postImage,
                title: title,
                numberOfLikes,
                comments: comments,
                numberOfComments,
                saved
              }}
            />
            <button
              onClick={closeModal}
              className="absolute z-50 top-4 right-4 text-black text-xl dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PostCard;