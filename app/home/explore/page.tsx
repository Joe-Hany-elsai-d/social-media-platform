import React from 'react'
import Explore from '../../ui/explore'
import { posts } from '../../lib/data'
export default function Page() {
  return (
    <div>
       <Explore recommendedPosts={posts} />
    </div>
  )
}
