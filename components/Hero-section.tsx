'use client'

import Image from "next/image"
import Button from "./Button"
import Navbar from "./Navbar"
import localFont from 'next/font/local'


import 'swiper/css'
import 'swiper/css/navigation'
import { motion } from "framer-motion"
import { useState } from "react"
import { dummyData } from "@/constants"

const myFont = localFont({ src: '../public/RecklessNeue-Regular.woff2' })
const myFontMedium = localFont({ src: '../public/RecklessNeue-Medium.woff2' })

const Hero = () => {

  const [bgColor, setBgColor] = useState('from-sky-300')
  const [isActive, setIsActive] = useState(1)
  const [products, setProducts] = useState(dummyData)

  const handleNext = () => {
    setProducts(sortFromIndex(dummyData, isActive))

  }

  function sortFromIndex(array: any, startIndex: number) {
    // Check if the startIndex is within the bounds of the array
    console.log(startIndex);
    if(isActive === 2) {
      setIsActive(0)
    } else {
      setIsActive(isActive + 1)
    }
    
    if (startIndex < 0 || startIndex > array.length - 1) {
        console.error("Start index is out of bounds.");
        return array; // Return the original array unchanged
    }

    // Slice the array into two parts: elements to be sorted and elements before startIndex
    const toSort = array.slice(startIndex);
    const beforeStart = array.slice(0, startIndex);

    // Sort the middle part
    toSort.sort((a: any, b: any) => a - b);

    setBgColor(dummyData[isActive].bgColor)
    
    return toSort.concat(beforeStart);
  }



  return (
    <div className={`h-fit w-full flex flex-col bg-gradient-to-b to-transparent relative overflow-clip mb-24 ${bgColor}`}>
      <Navbar />

      <div className="flex flex-col-reverse lg:flex-row w-full h-full justify-between lg:items-center px-6 lg:px-12 pb-12 pt-0 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-y-6 lg:w-1/3"
        >
          <h1 className={`text-[38px] lg:text-[48px] leading-[52px] lg:leading-[66px] font-bold mt-6 lg:mt-0 ${myFontMedium.className}`}>Nurturing Wellness,<br /> Nourishing Lives.</h1>

          <p className="text-sm lg:w-4/6 pb-4 lg:pb-8">Elevate Your Wellness Journey with EverWell, Where Mind, Body, and Spirit Unite for a Healthier You.</p>

          <Button fill title="Shop Now" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-row gap-x-6 flex-1"
        >
          {            
            products.map((item: any, i: number) => 
              (i === 0) ? (
                <motion.div initial={{ opacity: 0, scale: 1.1 }} whileInView={{ opacity: 100, scale: 1 }} key={i} className="flex flex-col justify-center items-center text-center lg:pt-20 w-full lg:w-6/12 relative transition-all">
                  <Image src={item.bg} height={460} width={440}  alt="bg" className="absolute z-0" />
                  {/* <Image src={item.droplet} height={460} width={440}  alt="bg" className="absolute z-10" /> */}
                  <Image src={item.src} height={460} width={440}  alt="bottle" className={`relative z-20 main-product ${item.bg === 'pink-bg.svg' ? '-rotate-12 -translate-x-[69px] translate-y-20  lg:translate-y-2' : item.bg === '/blue-bg.svg' ? 'lg:rotate-[10deg] lg:translate-x-[10px] translate-y-12' : 'lg:rotate-12 lg:translate-x-[50px] translate-y-12'} translate-x-0 translate-y-0 duration-300 transition-all`} />
    
                  <h3 className={`text-2xl text-primary font-bold ${myFontMedium.className} mt-40 lg:mt-20`}>{item.minTitle}</h3>
                  <p className="text-lg pb-4">Only for $30</p>
                  <Button title="Add to Cart" className="outline-black text-black px-6 py-2 text-xs mb-2" />
                </motion.div>
              ) : (
                <div key={i} className="hidden lg:flex flex-row items-center justify-center gap-x-6">
                  <div className="flex flex-col justify-center items-center text-center h-[320px]">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, y: '100px' }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="w-[70px] h-fit relative"
                    >
                      <Image src={item.src} width={65} height={165} alt="bottle" className="object-cover" />
                    </motion.div>
    
                    <h3 className={`text-2xl text-primary font-bold ${myFont.className}`}>{item.minTitle}</h3>
                    <p className="text-lg pb-4">Only for $30</p>
                    <Button title="Add to Cart" className="outline-black text-black px-6 py-2 text-xs" />
                  </div>
                </div>              
              )
            )
          }

            <div className="swiper-button-next me-6 lg:me-24 cursor-pointer" onClick={handleNext}>
              <Image src='/icons/right-arrow.svg' alt="arrow" width={16} height={16} className="hover:scale-150 transition-all scale" />
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero