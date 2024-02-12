import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-8 md:px-12 py-6">
      <div className="hidden md:flex flex-row gap-x-4 text-sm">
        <Link href={'/'}>Shop</Link>
        <Link href={'/'}>Blog</Link>
        <Link href={'/'}>About</Link>
      </div>
      <div>
        <Image src='/icons/menuIcon.svg' alt='menu' width={30} height={30} className="flex md:hidden" />
      </div>

      <Image src='/Logo.svg' width={130} height={30} alt="logo" />

      <div className="hidden md:flex flex-row gap-x-4 text-sm">
        <Image src='/icons/circum_search.svg' alt="search" width={22} height={22} />
        <Link href={'/'}>Cart (0)</Link>
        <Link href={'/'}>My Account</Link>
      </div>
        <Link href={'/'} className="md:hidden">Cart (0)</Link>

    </div>
  )
}

export default Navbar