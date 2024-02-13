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
      className="my-12 lg:mx-24 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-0 w-11/12 bg-[#eaeaea]"
    >
      <div className="p-12 lg:p-24 flex flex-col justify-center gap-y-6 lg:gap-y-12">
        <h5 className={`text-[24px] lg:text-[38px] leading-[32px] lg:leading-[46px] text-primary font-bold ${myFontMedium.className}`}>A Wellness Revolution in Liquid Form</h5>
        <p className="text-[14px] lg:text-[17px] w-10/12">Step into a wellness revolution with EverWell's liquid vitamins. We're redefining the way you nurture your health, one dropper at a time. Our expertly blended formulas target your mind, body, and spirit, providing support where you need it most. Easy to use, easy to love. </p>
        <Button title="Shop Now" fill />
      </div>
      <Image src='/grid-pic1.png' alt="product" width={665} height={625} className="h-auto w-full lg:h-[625px] lg:w-full lg:rounded-se-2xl" />

      <Image src='/grid-pic2.png' alt="product" width={665} height={625} className="h-auto w-fill lg:h-[625px] lg:w-full order-last lg:order-none lg:rounded-es-2xl" />
      <div className="p-12 lg:p-24 flex flex-col justify-center gap-y-6 lg:gap-y-12">
        <h5 className={`text-[24px] lg:text-[38px] leading-[32px] lg:leading-[46px] text-primary font-bold ${myFontMedium.className}`}>Your Path to Total Wellness Begins Here</h5>
        <p className="text-[14px] lg:text-[17px] w-11/12">Discover a world of well-being at EverWell, where we're on a mission to enhance every aspect of your health. We believe that true wellness encompasses the harmony of mind, body, and spirit. That's why we've carefully crafted a range of organic and rejuvenating products.</p>
        <Button title="Shop Now" fill />
      </div>
    </motion.div>
  )
}

export default Showcase