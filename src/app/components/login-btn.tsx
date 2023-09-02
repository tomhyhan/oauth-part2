'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'


const btnStyle = "border-2 px-2 py-1 mx-2"

export default function LoginBtn() {
  const { status } = useSession()

    if (status == 'loading') return (<div>Loading...</div>)   

    if (status == "unauthenticated") {
        return (
            <>
            Not signed in <br />
            <button className={btnStyle} onClick={() => signIn()}>Sign in</button>
            </>
        )
    }

    return (
      <>
        You are Signed in! <br />
        <div>
            <Link className="text-cyan-500" href={"http://localhost:3000/profile"}>Go to Profile -&gt; </Link>
        </div>
        <button className={btnStyle} onClick={() => signOut()}>Sign out</button>
      </>
    )
}