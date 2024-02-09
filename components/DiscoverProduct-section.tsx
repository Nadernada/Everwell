'use client'

import Image from "next/image"
import Button from "./Button"
import localFont from 'next/font/local'
import { motion } from "framer-motion"


const myFont = localFont({ src: '../public/RecklessNeue-Regular.woff2' })

const DiscoverProduct = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary rounded-se-[150px] md:rounded-se-[200px] md:rounded-3xl p-12 md:py-0  md:m-12 flex flex-col md:flex-row justify-between gap-y-14 md:gap-x-14 md:w-11/12"
    >
      <div className="flex flex-col justify-center gap-y-12">
        <p className={myFont.className + ' text-white text-[50px] md:text-[64px] leading-[60px] md:leading-[72px]'}>Discover Your Ideal<br/><span className='font-bold'>EverWell Product</span></p>
        <Button title="Take the Quiz" className="bg-white text-primary outline-none" />
      </div>
      <div className="md:w-1/2 flex items-center">
        <Image src='/IdealProduct.png' alt="Ideal Product" width={580} height={506} />
      </div>
    </motion.div>
  )
}

export default DiscoverProduct