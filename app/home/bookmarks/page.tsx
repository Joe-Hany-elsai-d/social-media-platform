import React from 'react'
import SavedPostsGrid from '../../ui/saved-posts-grid'
import { posts } from '../../lib/data'

export default function Page() {
  return (
    <SavedPostsGrid savedPosts={posts} />
  )
}
