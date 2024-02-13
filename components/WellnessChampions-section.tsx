'use client'

import Image from "next/image"
import Button from "./Button"
import localFont from 'next/font/local'

import { motion } from "framer-motion"

const myFont = localFont({ src: '../public/RecklessNeue-Regular.woff2' })
const myFontMedium = localFont({ src: '../public/RecklessNeue-Medium.woff2' })

const Champions = () => {
  return (
    <div className="relative w-full flex flex-col items-center gap-y-6 pb-24  xl:max-w-[1440px]">
      <Image src='/champions-droplet.png' alt="droplet" width={179} height={182} className="hidden lg:inline absolute -bottom-16 -left-4 z-0"/>
      <div className="w-full flex flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0.5, x: '-100px' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src='/championsLeft.svg' alt="champions" width={502} height={150} className="h-[100px] lg:h-[170px] scale-125 lg:scale-100 -translate-x-12 lg:-translate-x-24"/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center gap-y-10 w-2/6"
        >
          <Image src='/championsText-droplet.png' alt="droplet" width={60} height={50} className="hidden lg:inline lg:absolute -right-16 bottom-24" />
          <h2 className={`${myFontMedium.className} text-[28px] lg:text-[56px] leading-[24px] lg:leading-[64px] text-center text-primary`}>Meet our Wellness Champions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, x: '100px' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src='/championsRight.svg' alt="champions" width={502} height={150} className="h-[100px] lg:h-[170px] scale-125 lg:scale-100 translate-x-12 lg:translate-x-24"/>
      </motion.div>
      </div>

      <Button title="View Reviews" fill className="text-[12px] px-8" />

    </div>
  )
}

export default Champions