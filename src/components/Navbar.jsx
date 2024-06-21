import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between py-4 bg-orange-600 text-amber-50'>
        <div className="logo">
            <span className='font-bold text-xl mx-9 my-2'>To-do-helper</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all duration-75'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-75'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
