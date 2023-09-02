"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Protected({children}: { 
    children: React.ReactNode
}) {
    const { status } = useSession()

    if (status == "unauthenticated") {
        return (
            <div>
                <p>Not logged in</p>
                <p>Please Login to access this page</p>
                <Link href="/">Home</Link>
            </div>
        )
    }

  return (
    <>{children}</>
  )
}
