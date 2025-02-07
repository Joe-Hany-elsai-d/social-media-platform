"use client";

import React, { useState } from 'react'
import PostItem from './post-item'
import PostModal from './modals/post-modal'
import PostModalWrapper from './modals/post-modal-wraper';
import { Post } from '../lib/definitions';


export default function Explore({ 
    recommendedPosts
}: Post[]) {
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  return (
    <div className="container p-4">
    <h1 className="text-2xl font-bold mb-6 dark:text-white">Explore</h1>
   
    {/* Grid Layout */}
    <div className="grid grid-cols-3 gap-2 md:gap-4">
      {recommendedPosts.map((post: Post) => (
        <React.Fragment key={post.id}>
          <PostItem post={post} setSelectedPost={setSelectedPost} />
        </React.Fragment>
       
      ))}
    </div>

    {/* Modal for Selected Post */}
    {selectedPost && (
      <PostModalWrapper setSelectedPost={setSelectedPost}>
          <PostModal 
              post={{
                postImage: selectedPost.postImage,
                title: selectedPost.title,
                numberOfLikes: selectedPost.numberOfLikes,
                comments: selectedPost.comments,
                numberOfComments: selectedPost.numberOfComments,
                saved: selectedPost.saved
              }}
            />
      </PostModalWrapper>    
          
    )}
  </div>
  )
}
