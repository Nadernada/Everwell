'use client'

import Image from "next/image"
import Button from "./Button"
import { motion } from 'framer-motion'
import localFont from 'next/font/local'


const myFont = localFont({ src: '../public/RecklessNeue-medium.woff2' })

const dummyPics = [
  '/social1.png',
  '/Social2.png',
  '/Social3.png',
  '/social4.png',
]

const SocialFeed = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5}}
      className="w-full flex flex-col items-center gap-y-12 py-12"
    >
      <h2 className={` text-[28px] md:text-[38px] leading-[28px] md:leading-[46px] text-primary font-bold text-center md:text-start ${myFont.className}`}>Stay Connected: Dive into Our Social Media Feed</h2>

      <div className="flex flex-col md:flex-row md:gap-x-3 items-center w-full">
        {
          dummyPics.map((pic, i) => (
            <motion.div
              initial={{ opacity: 0, y: '100px' }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group relative w-11/12 flex justify-center"
              key={i}
            >
              <Image src={pic} alt='social' width={383} height={313} className="relative z-0 w-full h-[350px] md:w-[383px] md:h-[313px] rounded-2xl md:rounded-none"/>
              <div className="group-hover:opacity-100 opacity-0 bg-gray-800/40 md:rounded-xl absolute top-0 left-0 z-10 w-full h-full flex items-end justify-center pb-6 transition-all">
                <Button title="View Post" className="text-white outline-1 cursor-pointer hover:bg-white hover:text-primary" />
              </div>
            </motion.div>
          ))
        }
      </div>

      <Button title="Follow Us" fill className="hidden md:flex" />
    </motion.div>
  )
}

export default SocialFeed