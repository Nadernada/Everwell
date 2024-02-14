'use client'

import Image from "next/image"
import Button from "./Button"
import localFont from 'next/font/local'


const myFont = localFont({ src: '../public/RecklessNeue-Medium.woff2' })

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { motion } from "framer-motion"
import { useState } from "react"

const TopProduct = () => {

  const [bgColor, setBgColor] = useState('from-yellow-200')

  return (
    <div className="w-full bg-gradient-to-b lg:mt-24 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 0 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`relative bg-gradient-to-b to-transparent w-full flex flex-col lg:flex-row py-10 lg:pb-32 my-24 md:my-0 px-4 lg:px-24 ${bgColor}`}
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation
          pagination={true}
          className="w-full overflow-visible xl:max-w-[1556px] flex justify-center"
        >
          <SwiperSlide className="w-full flex flex-col lg:flex-row lg:items-center justify-center gap-y-12">
            {
              ({ isActive }) => {
                isActive ? setBgColor('from-yellow-200') : null
                return (
                  <div className="flex flex-col justify-center items-center lg:flex-row">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex flex-col justify-center lg:w-7/12 gap-y-4 px-8 lg:ps-24 ${bgColor} transition-all`}
                    >
                      <h2 className={`${myFont.className} font-bold text-[45px] lg:text-[74px] text-primary leading-[55px] lg:leading-[84px]`}>Immunity:<br />Immune Vitality</h2>
                      <p className="text-xs lg:w-2/3">Meet the superhero of your well-being journey: 'Immune Vitality.' It's your trusty sidekick in the battle for a strong and robust immune system. Whether you're facing the sneezes or just want to stay in your prime, 'Immune Vitality' has your back. With 'Immune Vitality,' you're not just well; you're invincible!</p>
                      <Button title="Buy Now" fill className="mt-4 lg:mt-12"/>
                    </motion.div>

                    <Image src='/TopProductGold.webp' alt="bottle" width={640} height={650} className="w-[350px] lg:w-[640px] "/>
                  </div>
                )
              }
            }

          </SwiperSlide>
          <SwiperSlide className="w-full flex flex-col lg:flex-row items-center justify-center gap-y-12">
            {({ isActive }) => {
                isActive ? setBgColor('from-sky-200') : null
                return (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex flex-col justify-center lg:w-7/12 gap-y-4 px-8 ${bgColor}`}
                    >
                      <h2 className={`${myFont.className} font-bold text-[45px] lg:text-[74px] text-primary leading-[55px] lg:leading-[84px]`}>Immunity:<br />Immune Vitality</h2>
                      <p className="text-xs lg:w-2/3">Meet the superhero of your well-being journey: 'Immune Vitality.' It's your trusty sidekick in the battle for a strong and robust immune system. Whether you're facing the sneezes or just want to stay in your prime, 'Immune Vitality' has your back. With 'Immune Vitality,' you're not just well; you're invincible!</p>
                      <Button title="Buy Now" fill className="mt-4 lg:mt-12"/>
                    </motion.div>

                    <Image src='/TopProductBlue.webp' alt="bottle" width={389} height={691} className="w-[350px] lg:w-[389px]"/>
                  </>
                )
              }
            }

          </SwiperSlide>
          <SwiperSlide className="w-full flex flex-col lg:flex-row items-center justify-center gap-y-12">
            {({ isActive }) => {
                  isActive ? setBgColor('from-pink-200') : null
                  return (
                    <>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`flex flex-col justify-center lg:w-7/12 gap-y-4 px-8 ${bgColor}`}
                      >
                      <h2 className={`${myFont.className} font-bold text-[45px] md:text-[74px] text-primary leading-[55px] md:leading-[84px]`}>Immunity:<br />Immune Vitality</h2>
                      <p className="text-xs md:w-2/3">Meet the superhero of your well-being journey: 'Immune Vitality.' It's your trusty sidekick in the battle for a strong and robust immune system. Whether you're facing the sneezes or just want to stay in your prime, 'Immune Vitality' has your back. With 'Immune Vitality,' you're not just well; you're invincible!</p>
                      <Button title="Buy Now" fill className="mt-4 md:mt-12"/>
                      </motion.div>

                      <Image src='/TopProductPink.webp' alt="bottle" width={362} height={676} className="w-[350px] md:w-[362px]"/>
                    </>
                  )
                }
              }
          </SwiperSlide>

        
        </Swiper>
      </motion.div>
    </div>
  )
}

export default TopProduct