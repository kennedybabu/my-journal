import React from 'react'
import {BiWorld} from "react-icons/bi"

const Nav = () => {
  return (
    <nav className='w-full flex items-center justify-center h-[55px] bg-[#F55A5A]'>
        <div className='flex items-center text-white'>
            <BiWorld />
            <p>my travel journal.</p>
        </div>
    </nav>
  )
}

export default Nav