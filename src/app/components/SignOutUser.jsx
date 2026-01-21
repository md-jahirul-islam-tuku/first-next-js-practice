import { signOut } from 'next-auth/react'
import React from 'react'

export default function SignOutUser() {
  return (
    <div onClick={()=>signOut({ callbackUrl: "/" })}>Sign Out</div>
  )
}
