import { footerLinks } from "@/constants"
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
    <div className="w-full bg-primary text-white p-6 lg:p-20 mt-12 flex flex-col rounded-t-3xl">
      <div className="flex flex-col lg:flex-row gap-y-12 justify-between pb-12">
        <div className="flex flex-row lg:flex-col gap-y-4">
          <div className="flex flex-col gap-y-3">
            <Image src='/LogoBig.svg' alt="logo" width={263} height={66} className="w-1/2 lg:w-full h-auto" />
            <p className="text-xs lg:text-lg">Elevate your inner wellness</p>
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

        <div className="hidden lg:flex flex-col lg:flex-row justify-center gap-y-12 lg:gap-x-24">
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
            <div className="hidden lg:block peer-hover:block">
              <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Products</p>
              <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Ordering & Shipping</p>
              <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Wellness Quiz</p>
              <p className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">Returns & Refunds</p>
            </div>
          </div>
        </div>

        <div className="flex lg:hidden flex-col lg:flex-row justify-center gap-y-3">
          {
            footerLinks.map(item => (
              <details key={item.title} className="py-3">
              <summary className="text-lg leading-6 text-slate-900 dark:text-white font-semibold select-none uppercase flex flex-row">
                {item.title}
                <span className="ms-auto">
                  <Image src='/icons/down-arrow.svg' alt="arrow" width={18} height={18} />
                </span>
              </summary>
              <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 flex flex-col gap-y-3">
              {
                item.links.map(link => (
                  <p key={link} className="text-sm font-thin text-gray-300 hover:text-gray-500 cursor-pointer">{link}</p>
                ))
              }
              </div>
            </details>
            ))
          }
        </div>
      </div>



      <div className="w-full flex flex-col items-center lg:items-stretch">
        <div className="h-[1px] bg-white w-full"/>

        <div className="flex flex-col lg:flex-row gap-y-4 justify-between py-4">
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