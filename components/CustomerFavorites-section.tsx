'use client'

import Button from "./Button"
import { dummyData, dummyFavoriteData } from "@/constants"
import Image from "next/image"
import localFont from 'next/font/local'
import 'swiper/css'
import 'swiper/css/navigation'

import { motion } from "framer-motion"
import { useState } from "react"
import { Cards } from "./Collection-section"

const myFont = localFont({ src: '../public/RecklessNeue-Regular.woff2' })

const CustomerFavorites = () => {

  const [isActive, setIsActive] = useState(1)
  const [products, setProducts] = useState(dummyFavoriteData)

  const handleNext = () => {
    setProducts(sortFromIndex(dummyFavoriteData, isActive))

  }
  const handlePrev = () => {
    setProducts(sortFromIndex(dummyFavoriteData, isActive))

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
    
    return toSort.concat(beforeStart);
  }

  return (
    <div className="relative flex flex-col w-full items-center text-center gap-y-4 lg:gap-y-24 pt-24 lg:py-24 xl:max-w-[1556px]">
      <Image src='/championsText-droplet.png' alt="droplet" width={60} height={50} className="hidden lg:inline absolute left-[75%] lg:left-[62%] top-20" />
      <h3 className={`${myFont.className} text-[28px] lg:text-[44px] text-primary font-bold mb-12`}>Customer Favorites</h3>

        <div className="hidden lg:flex w-[70%] flex-row gap-x-12 lg:gap-x-48 relative justify-center mx-auto">
          <div className="swiper-button-prev mr-32" onClick={handlePrev} />

          {
            products.map((item, i) => {
              return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={`
                    group
                    flex
                    flex-col
                    w-[350px]
                    rounded-lg
                    gap-y-2
                    p-6
                    bg-gradient-to-b
                    ${item.title == 'Lung Detox: "Lung Cleanser"' ? 'from-sky-300 '
                      : item.title == 'Focus: "Mind Sharpen"' ? 'from-pink-300'
                      : 'from-yellow-300'
                    }
                    ${i==1 ? ' scale-110 absolute top-0 left-1/2 -translate-x-1/2 z-10' : i==0 ? '-rotate-12 scale-75' : ' rotate-12 scale-75'}
                    to-white
                    shadow-lg
                    shadow-gray-200`
                  }>
                    <div className="w-full h-[270px] relative flex items-center justify-center mb-4">
                      <Image src={item.src} width={320} height={240} className={`${i == 1 && '-rotate-12'} h-full w-auto relative z-10 transition-all duration-200`} alt="bottle" /> 
                    </div>

                    <p className="font-bold text-start">{item.title}</p>
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
                            <p className="bg-red-200 text-red-700 text-xs rounded-lg p-1">-{item.discount}</p>
                          </>
                        )
                      }
                    </div>
                  </motion.div>
              )
            })
          }
            <div className="swiper-button-next ml-6 lg:ml-24" onClick={handleNext} />
        </div>

        <div className="flex flex-col lg:items-center gap-y-14 w-full 2xl:w-[1440px] px-6 lg:px-32 relative">
          <Cards className='inline lg:hidden' />
        </div>

      <Button title="View All" fill />
    </div>
  )
}

export default CustomerFavorites