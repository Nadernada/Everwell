
import Image from "next/image"
import Button from "./Button"
import localFont from 'next/font/local'

import { motion } from "framer-motion"

const myFont = localFont({ src: '../public/RecklessNeue-Medium.woff2' })


const people = [
  '/Person3Big.svg',
  '/Person2Big.png',
  '/Person1Big.png',
  '/Person4Big.svg'
]

const SuccessStories = () => {
  return (
    <div

      className="flex flex-col items-center text-center gap-y-2 lg:gap-y-4 py-12 lg:py-24"
    >
      <h3 className={`${myFont.className}  text-[24px] lg:text-[44px] text-primary font-bold`}>Success Stories</h3>
      <p className="text-sm w-10/12 lg:w-4/12">Read the real-life experiences of individuals who've embraced the EverWell journey and transformed their wellness.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
          people.map((item, i) => (
            <div

              className="group relative"
              key={i}
            >
              <Image src={item} alt='person' width={340} height={400} className={`relative z-0 ${i == 0 ? 'lg:rounded-l-2xl' : i == 3 ? 'lg:rounded-r-2xl' : ''}`}/>
              <div className="group-hover:opacity-100 opacity-0 bg-gray-500/40 absolute top-0 left-0 z-10 w-full h-full flex items-end justify-center pb-6 transition-all">
                <Button title="Read More" className="bg-white text-primary outline-none cursor-pointer" />
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default SuccessStories