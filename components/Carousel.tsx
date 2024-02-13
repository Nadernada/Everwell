'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { dummyBlogs } from './Blog-section';

function Carousel({images}: any, className: string) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleTouchStart = (e: any) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: any) => {
    // @ts-ignore
    if (!touchStartX) return;
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      goToNextSlide();
    } else if (diff < -50) {
      goToPrevSlide();
    }
    touchStartX = null;
  };
  
  // @ts-ignore
  let touchStartX = null;

  return (
    <>
      <div className={`flex flex-row lg:hidden justify-center items-center gap-x-3`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <div className="prev-div w-4 h-4" onClick={goToPrevSlide}>
        <Image src='/icons/left-chevron.svg' alt='chevron' width={15} height={15} className='max-w-5 text-primary' />
      </div>
        <motion.div
          initial={{ opacity: 0.5, x: '-50px' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          key={dummyBlogs[currentIndex].title}
          className="relative w-full justify-center"
        >
          <img src={dummyBlogs[currentIndex].src} className='md:w-full'/>

          <motion.div
            initial={{ opacity: 0, x: '-50%', y: '100px' }}
            whileInView={{ opacity: 1, x: '-50%', y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -bottom-[30px] left-[50%] -translate-x-[50%] rounded-xl bg-white shadow-lg shadow-slate-200 p-4 lg:p-6 flex flex-col gap-y-2 lg:gap-y-4 w-11/12"
          >
            <div className="flex flex-row justify-between text-xs md:text-base text-gray-400">
              <p>By Admin</p>
              <p>27/10/2023</p>
            </div>

            <p className="text-sm md:text-lg lg:text-lg font-bold">{dummyBlogs[currentIndex].title.length > 52 ? (dummyBlogs[currentIndex].title.slice(0,52) + '...') : dummyBlogs[currentIndex].title}</p>
          </motion.div>
        </motion.div>
        <div className="next-div w-4 h-4" onClick={goToNextSlide}>
          <Image src='/icons/right-chevron.svg' alt='chevron' width={15} height={15} className='max-w-5 text-primary' />
        </div>
    </div>
    <div className='flex lg:hidden flex-row justify-center items-center gap-x-2'>
      {
        dummyBlogs.map((blog, i) => (
          <div key={blog.title} className={`w-2 h-2 rounded-full ${i == currentIndex ? 'bg-green-700' : 'bg-green-200'}`} />
        ))
      }
    </div>
    </>
  );
}

export default Carousel;
