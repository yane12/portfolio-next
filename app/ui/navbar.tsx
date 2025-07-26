import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (

      <nav className='p-8 flex justify-between'>
        <Link className='text-teal-600' href='/'>Veder</Link>
        <ul className='flex gap-4'>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
        </ul>
      </nav>


     



  )
}
