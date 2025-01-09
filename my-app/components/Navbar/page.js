import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between text-xl text-white bg-indigo-800 p-5 h-16'>
        <Link href={"/"}><h1>linkIT</h1></Link>
        <ul className='flex gap-4'>
            <li>Home</li>
            <Link href={"/shorten"} >Shorten</Link>
            <li>Contact</li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar
