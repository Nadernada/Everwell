'use client'

import Image from "next/image"
import Button from "./Button"
import { myFont } from "@/app/page"
import { motion } from 'framer-motion'

const dummyPics = [
  '/social1.png',
  '/social2.png',
  '/social3.png',
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
      <h2 className={`text-[38px] leading-[46px] text-primary ${myFont.className}`}>Stay Connected: Dive into Our Social Media Feed</h2>

      <div className="flex flex-row gap-x-3 items-center">
        {
          dummyPics.map((pic, i) => (
            <motion.div
              initial={{ opacity: 0, y: '100px' }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group relative"
              key={i}
            >
              <Image src={pic} alt='social' width={383} height={313} className="relative z-0 w-[383px] h-[313px]"/>
              <div className="group-hover:opacity-100 opacity-0 bg-gray-500/40 absolute top-0 left-0 z-10 w-full h-full flex items-end justify-center pb-6 transition-all">
                <Button title="Read More" className="bg-white text-primary outline-none cursor-pointer" />
              </div>
            </motion.div>
          ))
        }
      </div>

      <Button title="Follow Us" fill />
    </motion.div>
  )
}

export default SocialFeed