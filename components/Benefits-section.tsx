'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import localFont from 'next/font/local'

const myFont = localFont({ src: '../public/RecklessNeue-Regular.woff2' })

const Benefits = () => {
  return (
    <div className="w-full relative flex items-center justify-center py-24 bg-blue-radial">
      <Image src='/benefits-bottle.png' alt="benefits" width={600} height={680} />

      <motion.div
        initial={{ opacity: 0, x: '100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-[150px] right-1/2 translate-x-10"
      >
        <p className={`${myFont.className} uppercase text-md`}>Convenient dropper: Easy daily use</p>
        <div className="h-[1px] w-[346px] bg-gray-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: '-100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute bottom-[400px] left-[320px]"
      >
        <p className={`${myFont.className} uppercase text-md`}>Sound sleep for total wellness</p>
        <div className="h-[1px] w-[399px] bg-gray-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: '100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute top-[320px] right-[270px] flex flex-col items-end"
      >
        <p className={`${myFont.className} uppercase text-md`}>Stronger immunity, healthier you</p>
        <div className="h-[1px] w-[369px] bg-gray-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: '-100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0., delay: 0.6 }}
        className="absolute bottom-[350px] right-[310px] flex flex-col items-end"
      >
        <p className={`${myFont.className} uppercase text-md`}>Energize your life today</p>
        <div className="h-[1px] w-[346px] bg-gray-500" />
      </motion.div>
    </div>
  )
}

export default Benefits