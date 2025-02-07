// components/SavedPostsGrid.tsx
"use client";
import React, { useState } from 'react';
import PostModal from './modals/post-modal';

import PostItem from './post-item';
import PostModalWrapper from './modals/post-modal-wraper';
import { Post } from '../lib/definitions';

const SavedPostsGrid = ({ savedPosts }: Post[]) => {
   
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Saved Posts</h1>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {savedPosts.map((post: Post) => (
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
  );
};

export default SavedPostsGrid;