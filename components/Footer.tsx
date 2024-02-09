import Image from "next/image"



const Footer = () => {
  return (
    <div className="w-full bg-primary text-white p-20 mt-12 flex flex-col rounded-t-3xl">
      <div className="flex flex-col md:flex-row gap-y-12 justify-between pb-12">
        <div className="flex flex-col gap-y-4">
          <Image src='/LogoBig.svg' alt="logo" width={263} height={66} />
          <p className="text-lg">Elevate your inner wellness</p>
          <div className="flex flex-row items-center gap-x-2 mt-4">
            <div className="rounded-full bg-white w-8 h-8 flex justify-center items-center">
              <Image src='/icons/logo-twitter.svg' alt="logo" width={15} height={15} />
            </div>
            <div className="rounded-full bg-white w-8 h-8 flex justify-center items-center">
              <Image src='/icons/logo-fb.svg' alt="logo" width={15} height={15} />
            </div>
            <div className="rounded-full bg-white w-8 h-8 flex justify-center items-center">
              <Image src='/icons/logo-instagram.svg' alt="logo" width={15} height={15} />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-x-24">
          <div className="flex flex-col gap-y-4">
            <p className="uppercase text-lg">company</p>
            <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">About</p>
            <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Shop</p>
            <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Blog</p>
            <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Cart</p>
            <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Affiliate Program</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="uppercase text-lg">Help</p>
            <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Help Center</p>
            <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Contact Us</p>
            <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Community</p>
            <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Terms & Conditions</p>
            <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Privacy Policy</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="uppercase text-lg">FAQ</p>
            <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Products</p>
            <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Ordering & Shipping</p>
            <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Wellness Quiz</p>
            <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Returns & Refunds</p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <div className="h-[1px] bg-white w-full"/>

        <div className="flex flex-col md:flex-row gap-y-4 justify-between py-4">
          <p className="text-xs font-thin">Copyright 2023 EverWell. AllRights Reserved.</p>
          <div className="flex flex-row gap-x-2">
            <div className="w-12 h-8 bg-white rounded-lg" />
            <div className="w-12 h-8 bg-white rounded-lg" />
            <div className="w-12 h-8 bg-white rounded-lg" />
            <div className="w-12 h-8 bg-white rounded-lg" />
            <div className="w-12 h-8 bg-white rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer