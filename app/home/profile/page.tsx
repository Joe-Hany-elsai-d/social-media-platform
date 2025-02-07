import React from 'react'
import Profile from '../../ui/profile'
import { user } from '../../lib/data'

export default function Page() {
  return (
    <Profile user={user} />
  )
}
