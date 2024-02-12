'use client'

import Image from "next/image"
import Button from "./Button"
import localFont from 'next/font/local'

import { motion } from "framer-motion"

const myFontMedium = localFont({ src: '../public/RecklessNeue-Medium.woff2' })


const Showcase = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="my-12 md:mx-24 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-y-8 w-11/12 bg-[#eaeaea]"
    >
      <div className="p-12 md:p-24 flex flex-col justify-center gap-y-6 md:gap-y-12">
        <h5 className={`text-[24px] md:text-[38px] leading-[32px] md:leading-[46px] text-primary font-bold ${myFontMedium.className}`}>A Wellness Revolution in Liquid Form</h5>
        <p className="text-[14px] md:text-[17px] w-10/12">Step into a wellness revolution with EverWell's liquid vitamins. We're redefining the way you nurture your health, one dropper at a time. Our expertly blended formulas target your mind, body, and spirit, providing support where you need it most. Easy to use, easy to love. </p>
        <Button title="Shop Now" fill />
      </div>
      <Image src='/grid-pic1.png' alt="product" width={665} height={625} className="h-auto w-full md:h-[625px] md:w-[665px]" />

      <Image src='/grid-pic2.png' alt="product" width={665} height={625} className="h-auto w-fill md:h-[625px] md:w-[665px] order-last md:order-3" />
      <div className="p-12 md:p-24 flex flex-col justify-center gap-y-6 md:gap-y-12">
        <h5 className={`text-[24px] md:text-[38px] leading-[32px] md:leading-[46px] text-primary font-bold ${myFontMedium.className}`}>Your Path to Total Wellness Begins Here</h5>
        <p className="text-[14px] md:text-[17px] w-11/12">Discover a world of well-being at EverWell, where we're on a mission to enhance every aspect of your health. We believe that true wellness encompasses the harmony of mind, body, and spirit. That's why we've carefully crafted a range of organic and rejuvenating products.</p>
        <Button title="Shop Now" fill />
      </div>
    </motion.div>
  )
}

export default Showcase