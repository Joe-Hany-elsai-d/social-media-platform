import React from 'react'
import { posts } from '../lib/data'
import PostCard from '../ui/post-card'


export default function Page() {
  return (
    <div className='grid md:grid-cols-2 s gap-[10rem]'>
        <div className='flex flex-col justify-center gap-4'>
            {posts.map((post) => (
              <React.Fragment key={post.id}>
                <PostCard {...post} />
              </React.Fragment>          
            ))}
        </div>
       <div className='hidden md:block'>
          recommendations
       </div>
    </div> 
  )
}
