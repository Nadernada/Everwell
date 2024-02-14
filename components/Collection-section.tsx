'use client'

import Image from "next/image"
import Button from "./Button"
import { dummyData } from "@/constants"
import { motion } from "framer-motion"
import localFont from 'next/font/local'

const myFont = localFont({ src: '../public/RecklessNeue-Regular.woff2' })

interface CardsProps {
  className?: string
}

export const Cards = ( {className}: CardsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: '100px' }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-row gap-x-4 lg:gap-x-8 lg:w-full lg:justify-center relative overflow-scroll lg:overflow-visible ${className}`}
    >
      <div className="flex flex-row gap-x-4 lg:gap-x-8 min-w-fit lg:w-full lg:justify-center overflow-scroll lg:overflow-visible">
      {
        dummyData.map((item, i) => {
          return (
              <div key={i} className={`
                group
                flex
                flex-col
                !w-[360px]
                lg:w-3/12
                rounded-lg
                gap-y-2
                py-6
                ps-6
                hover:p-4
                bg-gradient-to-b
                hover:lg:scale-110
                transition-all
                duration-300
                ease-out
                ${i == 0 ? 'from-sky-300'
                  : i == 1 ? 'from-pink-300'
                  : 'from-yellow-300'
                }
                to-transparent
                `
              }>
                {
                  item.new && (
                    <div className="absolute w-[30px] h-[30px] rounded-full bg-primary text-white flex items-center justify-center p-6 z-20">
                      <p className="text-[16px]">New</p>
                    </div>
                  )
                }
                <div className={`w-full h-[285px] relative flex items-center ${i!==1 ?'justify-center lg:justify-end lg:group-hover:justify-center' : 'justify-center'}`}>
                  <Image src={item.bg} width={320} height={240} className="lg:group-hover:opacity-100 lg:opacity-0 lg:h-full lg:w-auto h-auto w-full absolute lg:top-0 z-0 transition-all scale-75 lg:scale-110"  alt="bottle" /> 
                  <Image src={item.srcConShadow} width={320} height={240} className="hidden lg:inline lg:group-hover:hidden h-full w-auto relative z-10 transition-all" alt="bottle" /> 
                  <Image src={item.src} width={320} height={240} className={`lg:hidden lg:group-hover:inline h-full w-auto relative z-10 ${i==1 ? 'lg:group-hover:-rotate-[10deg] -rotate-[10deg] lg:-translate-x-5 scale-[85%] lg:scale-100' : ' lg:group-hover:rotate-[10deg] rotate-[10deg] lg:translate-x-5 scale-[85%] lg:scale-100'} lg:translate-y-[-50px]  transition-all duration-200`} alt="bottle" /> 
                </div>

                <p className="font-semibold mt-12 lg:mt-0">{item.title}</p>
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
                        <p className="bg-red-200 text-red-700 text-xs rounded-lg p-1">-{item.discount}</p>
                      </>
                    )
                  }
                  <Button title="Add to Cart" className="group-hover:opacity-100 hover:text-white opacity-0 text-xs px-6 py-2 outline-[1px] ms-auto transition-all"/>
                </div>
              </div>
          )
        })
      }
      </div>
    </motion.div>
  )
}

const Collection = () => {
  return (
    <div className="flex flex-col lg:items-center gap-y-14 w-full 2xl:w-[1440px] px-6 lg:px-32 relative">
      <div className="hidden lg:inline absolute right-0 !-translate-y-[100px]">
          <motion.div
            initial={{ opacity: 0, scale: 1.2,  }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <Image src='/collection-mid-droplet.webp' alt="droplet" width={58} height={57} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.2,  }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1}}>
            <Image src='/collection-sm-droplet.webp' alt="droplet" width={24} height={24} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.2,  }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}>
            <Image src='/collection-big-droplet.webp' alt="droplet" width={251} height={256} />
          </motion.div>
      </div>
      <h2 className={`${myFont.className} font-bold text-[32px] lg:text-[40px] text-center lg:text-start`}>Wellness Wonders: Explore Our Collection</h2>

      <Cards />

      <Button title="View All" fill className="mx-auto" />

      <motion.div
            initial={{ opacity: 0, scale: 1.2  }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3}}
            className="absolute -bottom-64 right-0 z-0 opacity-100"
          >
            <Image src='/banner-droplet.webp' alt="droplet" width={156} height={151} />
          </motion.div>
    </div>
  )
}

export default Collection