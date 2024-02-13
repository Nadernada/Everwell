'use client'

import Image from "next/image"
import Button from "./Button"

import localFont from 'next/font/local'
import { motion } from 'framer-motion'


const myFont = localFont({ src: '../public/RecklessNeue-Regular.woff2' })

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5}}
      className="flex flex-col md:flex-row items-center gap-y-4 md:gap-x-4 m-8 md:m-24 md:h-[480px] w-11/12 md:w-10/12"
    >
      <Image src='/cta.png' alt="contact" width={600} height={480} className="order-last md:order-none md:w-full" />

      <div className="p-8 py-16 md:py-8 flex flex-col justify-center gap-y-4 bg-gray-100 rounded-2xl h-full w-full ">
        <h2 className={`${myFont.className} text-[30px] leading-[34px] md:text-[56px] md:leading-[64px] text-primary w-1/2`}>Join Our <b>Community</b></h2>
        <p className="text-xs md:text-md">Receive exclusive deals, discounts and many offers.</p>

        <div className="flex flex-row gap-x-2 mt-8 md:mt-16">
          <input type="text" className="outline outline-1 outline-primary rounded-3xl px-4 md:w-full" placeholder="Enter you Email"/>
          <Button title="Join" fill className="px-8 md:px-12" />
        </div>
      </div>
    </motion.div>
  )
}

export default Contact