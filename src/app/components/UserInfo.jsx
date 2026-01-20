"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

export default function UseInfo() {
  const user=useSession()
  return (
    <div>{JSON.stringify(user)}</div>
  )
}
