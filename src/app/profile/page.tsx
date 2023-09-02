"use client"

import { useSession } from 'next-auth/react';
export default function page() {
    const { data: session } = useSession()

  return (
    <div>{session?.user?.email}</div>
  )
}
