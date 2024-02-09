import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-12 py-6">
      <div className="flex flex-row gap-x-4 text-sm">
        <Link href={'/'}>Shop</Link>
        <Link href={'/'}>Blog</Link>
        <Link href={'/'}>About</Link>
      </div>

      <Image src='/Logo.png' width={130} height={30} alt="logo" />

      <div className="flex flex-row gap-x-4 text-sm">
        <Image src='/icons/circum_search.svg' alt="search" width={22} height={22} />
        <Link href={'/'}>Cart (0)</Link>
        <Link href={'/'}>My Account</Link>
      </div>

    </div>
  )
}

export default Navbar