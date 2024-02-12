'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import localFont from 'next/font/local'

const myFont = localFont({ src: '../public/RecklessNeue-Regular.woff2' })

const Benefits = () => {
  return (
    <div className="w-full relative hidden md:flex items-center justify-center py-24 bg-blue-radial">
      <Image src='/benefits-bottle.png' alt="benefits" width={600} height={680} className="w-[400px] h-[480px] md:w-[600px] md:h-[680px]" />

      <motion.div
        initial={{ opacity: 0, x: '100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-[150px] right-1/2 translate-x-10"
      >
        <p className={`${myFont.className} uppercase text-xs md:text-md`}>Convenient dropper: Easy daily use</p>
        <div className="h-[1px] w-[250px] md:w-[346px] bg-gray-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: '-100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute bottom-[300px] md:bottom-[400px] left-0 md:left-[320px]"
      >
        <p className={`${myFont.className} uppercase text-xs md:text-md`}>Sound sleep for total wellness</p>
        <div className="h-[1px] w-[270px] md:w-[399px] bg-gray-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: '100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute top-[250px] md:top-[320px] right-0 md:right-[270px] flex flex-col items-end"
      >
        <p className={`${myFont.className} uppercase text-xs md:text-md`}>Stronger immunity, healthier you</p>
        <div className="h-[1px] w-[250px] md:w-[369px] bg-gray-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: '-100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0., delay: 0.6 }}
        className="absolute bottom-[250px] md:bottom-[350px] right-0 md:right-[310px] flex flex-col items-end"
      >
        <p className={`${myFont.className} uppercase text-xs md:text-md`}>Energize your life today</p>
        <div className="h-[1px] w-[200px] md:w-[346px] bg-gray-500" />
      </motion.div>
    </div>
  )
}

export default Benefits