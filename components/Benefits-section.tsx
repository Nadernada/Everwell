'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import localFont from 'next/font/local'

const myFont = localFont({ src: '../public/RecklessNeue-Regular.woff2' })

const Benefits = () => {
  return (
    <div className="w-full relative hidden lg:flex items-center justify-center py-24 bg-blue-radial 2xl:max-w-[1556px]">
      <Image src='/benefits-bottle.webp' alt="benefits" width={350} height={620} className="w-[400px] h-[480px] lg:w-[350px] lg:h-[620px]" />

      <motion.div
        initial={{ opacity: 0, x: '100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-[150px] right-1/2 translate-x-10"
      >
        <p className={`${myFont.className} uppercase text-xs lg:text-lg`}>Convenient dropper: Easy daily use</p>
        <div className="h-[1px] w-[250px] lg:w-[346px] bg-gray-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: '-100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="absolute bottom-[300px] lg:bottom-[400px] left-0 lg:left-[320px]"
      >
        <p className={`${myFont.className} uppercase text-xs lg:text-lg`}>Sound sleep for total wellness</p>
        <div className="h-[1px] w-[270px] lg:w-[399px] bg-gray-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: '100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="absolute top-[250px] lg:top-[320px] right-0 lg:right-[270px] flex flex-col items-end"
      >
        <p className={`${myFont.className} uppercase text-xs lg:text-lg`}>Stronger immunity, healthier you</p>
        <div className="h-[1px] w-[250px] lg:w-[369px] bg-gray-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: '-100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.25 }}
        className="absolute bottom-[250px] lg:bottom-[350px] right-0 lg:right-[310px] flex flex-col items-end"
      >
        <p className={`${myFont.className} uppercase text-xs lg:text-lg`}>Energize your life today</p>
        <div className="h-[1px] w-[200px] lg:w-[346px] bg-gray-500" />
      </motion.div>
    </div>
  )
}

export default Benefits