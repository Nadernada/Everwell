import Image from "next/image"

const companyLinks = [
  'About',
  'Shop',
  'Blog',
  'Cart',
  'Affiliate program',
]
const helpLinks = [
  'Help Center',
  'Contact Us',
  'Community',
  'Terms & Conditions',
  'Privacy Policy'
]
const paymentMethods = [
  '/icons/Mastercard.png',
  '/icons/Visa.png',
  '/icons/G Pay.png',
  '/icons/ApplePay.png',
  '/icons/Paypal.png'
]

const Footer = () => {
  return (
    <div className="w-full bg-primary text-white p-6 md:p-20 mt-12 flex flex-col rounded-t-3xl">
      <div className="flex flex-col md:flex-row gap-y-12 justify-between pb-12">
        <div className="flex flex-row md:flex-col gap-y-4">
          <div className="flex flex-col gap-y-3">
            <Image src='/LogoBig.svg' alt="logo" width={263} height={66} className="w-1/2 md:w-full h-auto" />
            <p className="text-xs md:text-lg">Elevate your inner wellness</p>
          </div>
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

        <div className="flex flex-col md:flex-row justify-center gap-y-12 md:gap-x-24">
          <div className="flex flex-col gap-y-4">
            <p className="uppercase text-lg">company</p>
            {
              companyLinks.map(link => (
                <p key={link} className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">{link}</p>
              ))
            }
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="uppercase text-lg">Help</p>
            {
              companyLinks.map(link => (
                <p key={link} className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">{link}</p>
              ))
            }
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="peer uppercase text-lg">FAQ</p>
            <div className="hidden md:block peer-hover:block">
              <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Products</p>
              <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Ordering & Shipping</p>
              <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Wellness Quiz</p>
              <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Returns & Refunds</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <div className="h-[1px] bg-white w-full"/>

        <div className="flex flex-col md:flex-row gap-y-4 justify-between py-4">
          <p className="text-xs font-thin">Copyright 2023 EverWell. AllRights Reserved.</p>
          <div className="flex flex-row gap-x-2">
            {
              paymentMethods.map(src => (
                <div key={src} className="w-12 h-8 bg-white rounded-lg flex justify-center items-center">
                  <Image src={src} alt="payment" width={27} height={9} />
                </div>                
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer