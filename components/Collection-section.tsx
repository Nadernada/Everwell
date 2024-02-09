'use client'

import Image from "next/image"
import Button from "./Button"
import { dummyData } from "@/constants"
import { motion } from "framer-motion"
import localFont from 'next/font/local'

const myFont = localFont({ src: '../public/RecklessNeue-Regular.woff2' })


const Collection = () => {
  return (
    <div className="px-12 flex flex-col items-center gap-y-14">
      <h2 className={`${myFont.className} font-bold text-[40px]`}>Wellness Wonders: Explore Our Collection</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: '100px' }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row gap-x-12"
        >
          {
            dummyData.map((item, i) => {
              return (
                  <div key={i} className={`
                    group
                    flex
                    flex-col
                    w-1/3
                    rounded-lg
                    gap-y-2
                    p-6
                    bg-gradient-to-b
                    ${i == 0 ? 'from-sky-300'
                      : i == 1 ? 'from-pink-300 scale-110'
                      : 'from-yellow-300'
                    }
                    to-transparent`
                  }>
                    <div className="w-full h-[270px] relative flex items-center justify-center">
                      <Image src='/Mask group.png' width={320} height={240} className="group-hover:opacity-100 opacity-0 h-full w-auto absolute top-0 left-0 z-0 transition-all"  alt="bottle" /> 
                      <Image src='/droplet-transparent.png' width={320} height={240} className="group-hover:opacity-100 opacity-0 h-full w-auto absolute scale-125 top-0 left-0 z-0 transition-all"  alt="bottle" />
                      <Image src={item.src} width={320} height={240} className="h-full w-auto relative z-10 group-hover:-rotate-[15deg] group-hover:scale-75 transition-all" alt="bottle" /> 
                    </div>

                    <p className="font-semibold">{item.title}</p>
                    <div className="flex flex-row gap-x-2">
                      <Image src='/stars.svg' alt="stars" width={75} height={13} />
                      <p>4.5/5</p>
                    </div>                   
                    <div className="flex flex-row gap-x-2 items-center">
                      <p className="font-bold text-xl">${item.price}</p>
                      {
                        item.discount && (
                          <>
                            <p className="font-bold text-gray-400 line-through">${item.prevPrice}</p>
                            <p className="bg-red-200 text-red-700 text-xs rounded-md p-1">-{item.discount}</p>
                          </>
                        )
                      }
                      <Button title="Add to Cart" className="group-hover:opacity-100 opacity-0 text-xs px-6 py-2 outline-[1px] ms-auto transition-all"/>
                    </div>
                  </div>
              )
            })
          }
        </motion.div>


      <Button title="View All" fill />
    </div>
  )
}

export default Collection