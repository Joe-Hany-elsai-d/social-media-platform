import React from 'react'
import Image from 'next/image';
import { AiFillHeart } from 'react-icons/ai';
import { Post } from '../lib/definitions';

type postItemProps = {
    post: Post,
    setSelectedPost: React.Dispatch<React.SetStateAction<Post | null>>
}

export default function PostItem({
    post,
    setSelectedPost
}: postItemProps) {

  return (
    <div
      key={post.id}
      className="group relative aspect-square cursor-pointer shadow"
      onClick={() => setSelectedPost(post)}
    >
        <Image
            src={post.postImage}
            alt="Saved post"
            fill
            className="object-cover"
        />
        <div className='hidden absolute inset-0 bg-black bg-opacity-50 items-center justify-center text-white group-hover:flex'>
            <p className='flex items-center gap-2 text-sm sm:text-2xl'>
                <AiFillHeart />
                {post.numberOfLikes}
            </p>
        </div>
    </div>
  )
}
