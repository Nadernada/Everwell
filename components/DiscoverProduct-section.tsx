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
      transition={{ duration: 0.3 }}
      className="bg-primary rounded-se-[150px] lg:rounded-se-[200px] lg:rounded-3xl pt-16 px-8 lg:px-0 lg:py-0  md:m-12 flex flex-col lg:flex-row justify-between gap-y-0 lg:gap-x-14 lg:w-11/12 z-10 xl:max-w-[1556px]"
    >
      <div className="flex flex-col justify-center gap-y-12 lg:p-12">
        <p className={myFont.className + ' text-white text-[32px] lg:text-[64px] leading-[38px] lg:leading-[72px]'}>Discover Your Ideal<br/><span className='font-bold'>EverWell Product</span></p>
        <Button title="Take the Quiz" className="bg-white hover:outline-2 hover:outline-white hover:text-white  text-primary outline-none" />
      </div>
      <div className="lg:w-1/2 flex items-center">
        <Image src='/IdealProduct.svg' alt="Ideal Product" width={580} height={506} />
      </div>
    </motion.div>
  )
}

export default DiscoverProduct