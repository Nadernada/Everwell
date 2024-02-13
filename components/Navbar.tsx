'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-row justify-between items-center px-8 md:px-12 py-6 relative z-20">
      <div className="hidden md:flex flex-row gap-x-4 text-sm">
        <Link href={'/'}>Shop</Link>
        <Link href={'/'}>Blog</Link>
        <Link href={'/'}>About</Link>
      </div>
      <div className="flex md:hidden">
        <Image src={isOpen ? '/icons/close.svg' : '/icons/menuIcon.svg'} alt='menu' width={30} height={30} className="cursor-pointer hover:opacity-60 transition-all z-20" onClick={() => setIsOpen(!isOpen)} />
      </div>

      <Image src={isOpen ? '/LogoBig.svg' : '/Logo.svg'} width={130} height={30} alt="logo"/>

      <Link href={'/'} className={`md:hidden ${isOpen ? 'text-white' : ''} z-20`}>Cart (0)</Link>

      <div className="hidden md:flex flex-row gap-x-4 text-sm">
        <Image src='/icons/circum_search.svg' alt="search" width={22} height={22} />
        <Link href={'/'}>Cart (0)</Link>
        <Link href={'/'}>My Account</Link>
      </div>

      {
        <div className={isOpen ? "absolute top-0 left-0 w-full h-screen bg-primary text-white flex flex-col items-center justify-center gap-y-6 px-6 py-24 z-0 transition-all opacity-100 translate-y-0 duration-500" : "absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center  opacity-0 -translate-y-[150px] duration-500 transition-all pointer-events-none"}>
          <Image src='/icons/circum_search.svg' alt="search" width={22} height={22} className="invert"/>
          <Link href={'/'}>Shop</Link>
          <Link href={'/'}>Blog</Link>
          <Link href={'/'}>About</Link>
          <Link href={'/'}>My Account</Link>
        </div>
      }
      

    </div>
  )
}

export default Navbar