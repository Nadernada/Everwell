'use client'

import Image from "next/image"
import { motion } from "framer-motion"



const dummyBlogs = [
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
    <div className="w-full flex flex-row px-24 py-12 mb-24 gap-x-12 justify-center">
      {
        dummyBlogs.map((blog) => (
          <motion.div
            initial={{ opacity: 0.5, y: '-100px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={blog.title}
            className="relative w-3/12"
          >
            <Image src={blog.src} alt="blog-post" width={375} height={360} />

            <motion.div
              initial={{ opacity: 0, x: '-50%', y: '100px' }}
              whileInView={{ opacity: 1, x: '-50%', y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -bottom-[30px] left-[50%] -translate-x-[50%] rounded-xl bg-white shadow-md shadow-slate-200 p-6 flex flex-col gap-y-4 w-10/12"
            >
              <div className="flex flex-row justify-between text-xs text-gray-400">
                <p>By Admin</p>
                <p>27/10/2023</p>
              </div>

              <p className="text-md font-bold">{blog.title.length > 52 ? (blog.title.slice(0,52) + '...') : blog.title}</p>
            </motion.div>
          </motion.div>
        ))
      }
    </div>
  )
}

export default Blog