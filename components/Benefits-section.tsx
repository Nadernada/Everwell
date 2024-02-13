'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import localFont from 'next/font/local'

const myFont = localFont({ src: '../public/RecklessNeue-Regular.woff2' })

const Benefits = () => {
  return (
    <div className="w-full relative hidden lg:flex items-center justify-center py-24 bg-blue-radial xl:max-w-[1440px]">
      <Image src='/benefits-bottle.png' alt="benefits" width={600} height={680} className="w-[400px] h-[480px] lg:w-[600px] lg:h-[680px]" />

      <motion.div
        initial={{ opacity: 0, x: '100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-[150px] right-1/2 translate-x-10"
      >
        <p className={`${myFont.className} uppercase text-xs lg:text-lg`}>Convenient dropper: Easy daily use</p>
        <div className="h-[1px] w-[250px] lg:w-[346px] bg-gray-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: '-100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute bottom-[300px] lg:bottom-[400px] left-0 lg:left-[320px]"
      >
        <p className={`${myFont.className} uppercase text-xs lg:text-lg`}>Sound sleep for total wellness</p>
        <div className="h-[1px] w-[270px] lg:w-[399px] bg-gray-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: '100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute top-[250px] lg:top-[320px] right-0 lg:right-[270px] flex flex-col items-end"
      >
        <p className={`${myFont.className} uppercase text-xs lg:text-lg`}>Stronger immunity, healthier you</p>
        <div className="h-[1px] w-[250px] lg:w-[369px] bg-gray-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: '-100px' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0., delay: 0.6 }}
        className="absolute bottom-[250px] lg:bottom-[350px] right-0 lg:right-[310px] flex flex-col items-end"
      >
        <p className={`${myFont.className} uppercase text-xs lg:text-lg`}>Energize your life today</p>
        <div className="h-[1px] w-[200px] lg:w-[346px] bg-gray-500" />
      </motion.div>
    </div>
  )
}

export default Benefits