'use client'

import Image from "next/image"
import Button from "./Button"
import localFont from 'next/font/local'


const myFont = localFont({ src: '../public/RecklessNeue-Regular.woff2' })

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import { motion } from "framer-motion"

const TopProduct = () => {
  return (
    <div className="w-full bg-gradient-to-b from-yellow-200 to-transparent mt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 0 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="relative bg-gradient-to-b from-yellow-200 to-transparent w-full flex flex-col md:flex-row py-10 my-24 md:ps-24 "
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation
          pagination={true}
          className="w-full"
        >
          <SwiperSlide className="w-full flex flex-col md:flex-row items-center justify-center gap-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center md:w-7/12 gap-y-4 ps-24"
            >
              <h2 className={`${myFont.className} font-bold text-[55px] md:text-[74px] text-primary leading-[65px] md:leading-[84px]`}>Immunity:<br />Immune Vitality</h2>
              <p className="text-xs w-2/3">Meet the superhero of your well-being journey: 'Immune Vitality.' It's your trusty sidekick in the battle for a strong and robust immune system. Whether you're facing the sneezes or just want to stay in your prime, 'Immune Vitality' has your back. With 'Immune Vitality,' you're not just well; you're invincible!</p>
              <Button title="Buy Now" fill className="mt-8 md:mt-12"/>
            </motion.div>

            <Image src='/TopProduct-bottle.png' alt="bottle" width={650} height={650} className="w-[350px] md:w-[650px]"/>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  )
}

export default TopProduct