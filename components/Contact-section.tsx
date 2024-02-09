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
      className="flex flex-row items-center gap-x-4 m-24 h-[480px]"
    >
      <Image src='/cta.png' alt="contact" width={600} height={480} />

      <div className="p-8 flex flex-col justify-center gap-y-4 bg-gray-100 rounded-2xl h-full">
        <h2 className={`${myFont.className} text-[56px] leading-[64px] text-primary w-1/2`}>Join Our Community</h2>
        <p>Receive exclusive deals, discounts and many offers.</p>

        <div className="flex flex-row gap-x-2 mt-16">
          <input type="text" className="outline outline-1 outline-primary rounded-3xl px-4 w-full" placeholder="Enter you Email"/>
          <Button title="Join" fill />
        </div>
      </div>
    </motion.div>
  )
}

export default Contact