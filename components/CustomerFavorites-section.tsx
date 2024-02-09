'use client'

import { myFont } from "@/app/page"
import Button from "./Button"
import { dummyFavoriteData } from "@/constants"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'

import { motion } from "framer-motion"


const CustomerFavorites = () => {
  return (
    <div className="relative flex flex-col w-full items-center text-center gap-y-24 py-24">
      <Image src='/championsText-droplet.png' alt="droplet" width={60} height={50} className="absolute left-[62%] top-20" />
      <h3 className={`${myFont.className} text-[44px] text-primary font-bold`}>Customer Favorites</h3>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation]}
        navigation
        className="w-1/2"
      >
        <SwiperSlide className="flex flex-row gap-x-48 relative justify-center mx-auto">
          {
            dummyFavoriteData.map((item, i) => {
              return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`
                    group
                    flex
                    flex-col
                    w-5/12
                    rounded-lg
                    gap-y-2
                    p-6
                    bg-gradient-to-b
                    ${i == 0 ? 'from-sky-300 -rotate-12 scale-75'
                      : i == 1 ? 'from-pink-300 scale-110 absolute top-0 left-1/2 -translate-x-1/2 z-10'
                      : 'from-yellow-300 rotate-12 scale-75'
                    }
                    to-white
                    shadow-md
                    shadow-gray-200`
                  }>
                    <div className="w-full h-[270px] relative flex items-center justify-center">
                      {
                        i == 1 && (
                          <>
                            <Image src='/Mask group.png' width={320} height={240} className="h-full w-auto absolute top-0 left-0 z-0 transition-all"  alt="bottle" /> 
                            <Image src='/droplet-transparent.png' width={320} height={240} className="scale-125 h-full w-auto absolute top-0 left-0 z-0 transition-all"  alt="bottle" />
                          </>
                        )
                      }
                      <Image src={item.src} width={320} height={240} className="h-full w-auto relative z-10 transition-all" alt="bottle" /> 
                    </div>

                    <p className="font-semibold">{item.title}</p>
                    <div className="flex flex-row gap-x-2">
                      <Image src='/stars.svg' alt="stars" width={75} height={13} />
                      <p>4.5/5</p>
                    </div>
                    <div className="flex flex-row gap-x-2">
                      <p className="font-bold text-xl">${item.price}</p>
                      {
                        item.discount && (
                          <>
                            <p className="font-bold text-gray-400 line-through">${item.prevPrice}</p>
                            <p className="bg-red-200 text-red-700 text-xs rounded-md p-1">-{item.discount}</p>
                          </>
                        )
                      }
                    </div>
                  </motion.div>
              )
            })
          }
        </SwiperSlide>
      </Swiper>

      <Button title="View All" fill />
    </div>
  )
}

export default CustomerFavorites