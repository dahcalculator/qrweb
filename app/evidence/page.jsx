'use client'


import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { images } from "../../libs/images"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Sidebar from '../components/Sidebar'

const page = () => {
  return (
    <div className='flex w-full h-full space-5 justify-evenly'> 
    <div className='w-2/12 '>
    <Sidebar/>
    </div>
    <div className='w-10/12 mx-4 bg-white h-full'>
    
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">
          
          
      <div className="text-3xl font-bold w-full justify-center ite">Evidence</div>
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination]}
          onSwiper={swiper => console.log(swiper)}
          className='h-96 w-full rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </h1>
      </div>
    </section>


    </div>
  </div>
  )
}

export default page