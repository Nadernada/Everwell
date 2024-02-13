'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import Carousel from "./Carousel"



export const dummyBlogs = [
  {
    src: '/blog1.png',
    title: 'The healing Power of Mindful Nutrition: A Holistic Approach'
  },
  {
    src: '/blog2.png',
    title: 'From Stress to Serenity" Supporting Your Spirit in a world'
  },
  {
    src: '/blog3.png',
    title: 'Unveiling the Science Behind a Good Night\'s Sleep: Tips for a good night'
  },
]

const Blog = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 lg:px-24 py-12 mb-24 gap-y-12 lg:gap-x-10 justify-center relative 2xl:max-w-[1440px]">
      <motion.div
        initial={{ opacity: 0, scale: 1.2,  }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="hidden lg:inline absolute right-0 !-translate-y-[50%]">
        <Image src='/blogDroplet.svg' alt="droplet" width={240} height={200} className="" />
      </motion.div>
      {
        dummyBlogs.map((blog) => (
          <motion.div
            initial={{ opacity: 0.5, y: '-100px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            key={blog.title}
            className="relative w-full lg:w-3/12 hidden lg:flex justify-center"
          >
            <Image src={blog.src} alt="blog-post" width={375} height={360} className="w-10/12 h-full lg:w-[375px] lg:h-auto" />

            <motion.div
              initial={{ opacity: 0, x: '-50%', y: '100px' }}
              whileInView={{ opacity: 1, x: '-50%', y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="absolute -bottom-[30px] left-[50%] -translate-x-[50%] rounded-xl bg-white shadow-lg shadow-slate-200 p-4 lg:p-6 flex flex-col gap-y-2 lg:gap-y-4 w-2/3 lg:w-10/12"
            >
              <div className="flex flex-row justify-between text-xs text-gray-400">
                <p>By Admin</p>
                <p>27/10/2023</p>
              </div>

              <p className="text-sm lg:text-lg font-bold">{blog.title.length > 52 ? (blog.title.slice(0,52) + '...') : blog.title}</p>
            </motion.div>
          </motion.div>
        ))
      }
      
      <Carousel images={dummyBlogs} className='' />
    </div>
  )
}

export default Blog