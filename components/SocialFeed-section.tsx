'use client'

import Image from "next/image"
import Button from "./Button"
import { motion } from 'framer-motion'
import localFont from 'next/font/local'


const myFont = localFont({ src: '../public/RecklessNeue-Medium.woff2' })

const dummyPics = [
  '/social1.webp',
  '/Social2.webp',
  '/Social3.webp',
  '/social4.webp',
]

const SocialFeed = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3}}
      className="w-full flex flex-col items-center gap-y-12 py-12 xl:max-w-[1556px]"
    >
      <h2 className={` text-[28px] lg:text-[38px] leading-[28px] lg:leading-[46px] text-primary font-bold text-center lg:text-start ${myFont.className}`}>Stay Connected: Dive into Our Social Media Feed</h2>

      <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row lg:gap-x-3 items-center w-full">
        {
          dummyPics.map((pic, i) => (
            <motion.div
              initial={{ opacity: 0, y: '100px' }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group relative w-11/12 flex justify-center"
              key={i}
            >
              <Image src={pic} alt='social' width={383} height={313} className="relative z-0 w-full md:h-auto h-[350px] lg:w-[383px] lg:h-[313px] rounded-2xl lg:rounded-none"/>
              <div className="group-hover:opacity-100 opacity-0 bg-gray-800/40 lg:rounded-xl absolute top-0 left-0 z-10 w-full h-full flex items-end justify-center pb-6 transition-all">
                <Button title="View Post" className="text-white outline-1 cursor-pointer hover:bg-white hover:text-primary" />
              </div>
            </motion.div>
          ))
        }
      </div>

      <Button title="Follow Us" fill className="hidden lg:flex" />
    </motion.div>
  )
}

export default SocialFeed