'use client'

import Image from "next/image"
import Button from "./Button"
import localFont from 'next/font/local'

import { motion } from "framer-motion"

const myFont = localFont({ src: '../public/RecklessNeue-Regular.woff2' })
const myFontMedium = localFont({ src: '../public/RecklessNeue-Medium.woff2' })

const Champions = () => {
  return (
    <div className="relative w-full flex flex-row justify-between items-center py-24 overflow-hidden">
      <Image src='/champions-droplet.png' alt="droplet" width={179} height={182} className="absolute -bottom-16 -left-4"/>
      <motion.div
        initial={{ opacity: 0.5, x: '-100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image src='/champions-left.png' alt="champions" width={412} height={150} className="h-[170px]"/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center gap-y-10 w-1/6"
      >
        <Image src='/championsText-droplet.png' alt="droplet" width={60} height={50} className="absolute -right-16 bottom-24" />
        <h2 className={`${myFont.className} text-[56px] leading-[64px] text-center text-primary`}>Meet our Wellness Champions</h2>
        <Button title="View Reviews" fill />
      </motion.div>

      <motion.div
        initial={{ opacity: 0.5, x: '100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image src='/champions-right.png' alt="champions" width={412} height={150} className="h-[170px]"/>
      </motion.div>
    </div>
  )
}

export default Champions