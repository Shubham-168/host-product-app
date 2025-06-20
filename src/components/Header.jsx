import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='fixed top-0 left-0 w-screen bg-sky-500 p-2 flex flex-row justify-between'>
        <Link to='/' ><div className='rounded-full text-yellow-300 hover:text-black text-xl cursor-pointer flex p-4 justify-center font-black items-center'> Shubham Trendz </div></Link>
        <ul className='list-none flex flex-row p-4 mr-2' >
            <Link to="/" > <li className='text-white font-bold font-sans hover:text-orange-300 cursor-pointer ' > Home </li> </Link>
            <Link to="/about" > <li className='text-white ml-2 font-bold font-sans hover:text-orange-300 cursor-pointer ' > About </li> </Link>
            <Link to="/contact" > <li className='text-white ml-2 font-bold font-sans hover:text-orange-300 cursor-pointer ' > Contact </li> </Link>
        </ul>
        <button className='bg-black text-white hidden md:block font-bold rounded-xl hover:shadow-2xl h-10 w-20 p-2 mr-4 mt-2.5 cursor-pointer ' > Logout </button>
    </nav>
  )
}

export default Header