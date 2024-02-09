'use client'

import Image from "next/image"
import Button from "./Button"
import Navbar from "./Navbar"
import localFont from 'next/font/local'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import { motion } from "framer-motion"

const myFont = localFont({ src: '../public/RecklessNeue-Regular.woff2' })
const myFontMedium = localFont({ src: '../public/RecklessNeue-Medium.woff2' })

const Hero = () => {


  return (
    <div className="h-fit w-full flex flex-col bg-gradient-to-b from-sky-300 to-transparent relative overflow-clip mb-24">
      <Navbar />

      <div className="flex flex-col md:flex-row w-full h-full justify-between md:items-center px-12 md:px-24 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-y-6 md:w-1/3"
        >
          <h1 className={`text-[54px] leading-[66px] ${myFontMedium.className}`}>Nurturing Wellness,<br /> Nourishing Lives.</h1>

          <p className="text-sm md:w-4/6 pb-8">Elevate Your Wellness Journey with EverWell, Where Mind, Body, and Spirit Unite for a Healthier You.</p>

          <Button fill title="Shop Now" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-row gap-x-6 flex-1 relative"
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            modules={[Navigation]}
            navigation
            className="w-full overflow-visible"
          >
            <SwiperSlide className="inline flex-col justify-center items-center text-center pt-24 pl-6 w-2/3">
              <Image src='/Bottle-hero.png' width={440} height={460} alt="bottle" />

              <h3 className={`text-2xl text-primary ${myFont.className}`}>Lung Cleanser</h3>
              <p className="text-lg pb-4">Only for $30</p>
              <Button title="Add to Cart" className="outline-black text-black px-6 py-2 text-xs" />
            </SwiperSlide>

            <SwiperSlide className="inline flex-row items-center justify-center gap-x-6">
              <div className="flex flex-col justify-center items-center text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: '100px' }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="w-[70px] h-[160px] "
                >
                  <Image src='/Everwell Bottle No Shadow Gold.png' width={65} height={165} alt="bottle" className="object-fill" />
                </motion.div>

                <h3 className={`text-2xl text-primary ${myFont.className}`}>Immune Vitality</h3>
                <p className="text-lg pb-4">Only for $30</p>
                <Button title="Add to Cart" className="outline-black text-black px-6 py-2 text-xs" />
              </div>

              <div className="flex flex-col min-h-[300px] justify-center items-center text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: '100px' }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="w-[50px] h-[160px]"
                  >
                    <Image src='/Everwell Bottle No Shadow.png' width={80} height={190} alt="bottle" className="object-fill" />
                  </motion.div>
                  <h3 className={`text-2xl text-primary ${myFont.className}`}>Mind Sharpen</h3>
                  <p className="text-lg pb-4">Only for $30</p>
                  <Button title="Add to Cart" className="outline-black text-black px-6 py-2 text-xs" />
              </div>
            </SwiperSlide>
          </Swiper>  
        </motion.div>
      </div>
    </div>
  )
}

export default Hero