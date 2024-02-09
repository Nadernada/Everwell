'use client'

import Image from "next/image"
import Button from "./Button"
import { myFont } from "@/app/page"

import { motion } from "framer-motion"

const DiscoverProduct = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary rounded-se-[200px] rounded-3xl px-12 m-12 flex flex-row justify-between gap-x-14 w-11/12"
    >
      <div className="flex flex-col justify-center gap-y-12">
        <p className={myFont.className + ' text-white text-[64px] leading-[72px]'}>Discover Your Ideal<br/><span className='font-bold'>EverWell Product</span></p>
        <Button title="Take the Quiz" className="bg-white text-primary outline-none" />
      </div>
      <div className="w-1/2 flex items-center">
        <Image src='/IdealProduct.png' alt="Ideal Product" width={580} height={506} />
      </div>
    </motion.div>
  )
}

export default DiscoverProduct