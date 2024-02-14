'use client'

import Image from "next/image"
import Button from "./Button"
import { dummyReviews } from "@/constants"
import localFont from 'next/font/local'
import { motion } from 'framer-motion'


const myFont = localFont({ src: '../public/RecklessNeue-Medium.woff2' })

const dummyBanner = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

const Reviews = () => {
  return (
    <>
      <div className="w-fit-max h-[75px] flex flex-row gap-x-4 bg-[#EFE5C3] my-24 relative">

        {
          dummyBanner.map(num => (
            <div
              key={num}
              className="w-[150px] flex flex-row gap-x-4 items-center banner-animation relative"
            >
                <Image src='/bottle-blue-NS.webp' width={18} height={57} alt="bottle" className="w-[18px] h-[57px]" />
                <Image src='/Logo.svg' width={96} height={24} alt="logo" className="w-[96px] h-[24px]" />
            </div>
          ))
        }
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5}}
        whileInView={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.3 }}
        className="lg:p-12 w-full flex flex-col lg:flex-row lg:gap-x-2 justify-center xl:max-w-[1556px]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: '100px' }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#89F09C] rounded-ss-[150px] lg:rounded-ss-[200px] rounded-lg py-24 px-6 lg:px-12 flex flex-col justify-center lg:w-7/12 gap-y-14"
        >
          <p className={myFont.className + ' font-bold text-primary text-[28px] lg:text-[48px] leading-[38px] lg:leading-[58px]'}>Echoes of Wellness: Dive into the EverWell Experience through Customer Reviews.</p>

          <Button title="View All" className="bg-white text-primary outline-none" />
        </motion.div>

        <div className="grid grid-cols-3 grid-rows-3 bg-gray-100">
          {
            dummyReviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5}}
                whileInView={{ opacity: 1, scale: 1}}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`flex flex-col items-center justify-center text-[9.5px] md:max-w-[259px] lg:max-w-[160px] gap-y-8 ${review.type === 'review' ? ' p-4' : ''}`}
              >
                {
                  review.type === 'picture' ? (
                    <Image src={review.src || '/Person1.png'} width={259} height={273} alt="person" className="" />
                  ) : (
                    <>
                      <p className="text-center md:text-base lg:text-xs">{review.text}</p>
                      <div className="flex flex-col gap-y-1 items-center">
                        <p className="font-semibold ">Sarah Thompson</p>
                        <div className="flex flex-row gap-x-2 scale-75">
                          <Image src='/stars.svg' alt="stars" width={75} height={13} />
                          <p>4.5/5</p>
                        </div>   
                      </div>
                    </>
                  )
                }

              </motion.div>
            ))
          }
        </div>
      </motion.div>
    </>
  )
}

export default Reviews