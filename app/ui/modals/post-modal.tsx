// components/PostWithComments.tsx
import Image from 'next/image';
import { FaRegComment, FaRegHeart, FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { Comment } from '../../lib/definitions';

interface Post {
  postImage: string;
  title: string;
  numberOfLikes: number;
  numberOfComments: number
  comments: Comment[];
  saved: boolean
}

const PostModal = ({ post }: { post: Post }) => {
  
  return (    
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        <div className="h-full flex flex-col md:flex-row bg-white dark:bg-gray-800 overflow-hidden sm:h-[38rem]">
          {/* Post Image Section */}
          <div className="hidden sm:block md:w-1/2 relative h-96 md:h-auto">
            <Image
              src={post.postImage}
              alt="Post image"
              fill
              className="object-cover"
            />
          </div>

          {/* Comments Section */}
          <div className="md:w-1/2 p-4 md:p-6 flex flex-col dark:text-white">
            {/* Engagement Header */}
            <div className="flex items-center justify-between mb-6 border-b pb-4 dark:border-gray-700">
              <div className="flex space-x-4">
                <button className="flex items-center space-x-1">
                  <FaRegHeart className="text-xl" />
                  <span>{post.numberOfLikes}</span>
                </button>
                <button className="flex items-center space-x-1">
                  <FaRegComment className="text-xl" />
                  <span>{post.numberOfComments}</span>
                </button>
              </div>
               <button>{post.saved ? <FaBookmark /> : <FaRegBookmark />}</button>
            </div>

            {/* Caption */}
            <div className="mb-6 text-gray-600 dark:text-gray-300">
              <p>{post.title}</p>
            </div>

            {/* Comments List */}
            <div className="flex-1 overflow-y-auto space-y-6 pr-2">
              {post.comments.length > 0 ? post.comments.map((comment) => (
                <div key={comment.id} className="flex space-x-3">
                  <div className="relative h-10 w-10 flex-shrink-0">
                    <Image
                      src={comment.avatar}
                      alt={comment.user}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{comment.user}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {comment.date}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {comment.text}
                    </p>
                  </div>
                </div>
              )): (
                <p className='text-gray-400'>No comments yet.</p>
              )}
            </div>

            {/* Add Comment Input */}
            <div className="pt-4 mt-4 border-t dark:border-gray-700 focus-within:border-indigo-600 transition">
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full bg-transparent focus:outline-none dark:placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default PostModal;