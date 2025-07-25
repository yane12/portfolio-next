import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <Link href='/'>Veder</Link>
        <ul>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
        </ul>
    </div>
  )
}
