"use client"
import React from 'react'
import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div>
      <button onClick={()=>signIn()} className='cursor-pointer'>Login</button>
    </div>
  )
}
