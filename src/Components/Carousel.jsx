import React, { useEffect } from 'react'
import { useData } from '../Context/AuthContext'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';
import { useNavigate } from 'react-router';




const Carousel = () => {

  const { FetchProductApi, apiData } = useData()
  const navigate = useNavigate()
  console.log(apiData);


  useEffect(() => {
    FetchProductApi()
  }, [])
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {apiData?.slice(0, 7)?.map((item, index) => {
          return (
            <SwiperSlide>
              <div key={index} className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10'>
                <div className=' container  flex gap-10 justify-center items-center h-[75vh]'>
                  <div className='space-y-6 pl-10 w-1/2'>
                    <h3 className='text-gray-400 font-semibold text-lg'>Powering your world with the best in Electoric</h3>
                    <h2 className='text-white font-semibold uppercase text-2xl'>{item.title.substring(0, 60)}...</h2>
                    <p className='line-clamp-3 text-gray-300 '>{item.description}</p>
                    <button onClick={()=>navigate('/product')} className='bg-gradient-to-r from-green-600 to-purple-600 px-6 py-2 text-lg font-semibold text-white rounded-lg cursor-pointer'>Shop Now</button>
                  </div>
                  <div className='w-1/2'>
                    <img src={item.images[0]} alt={item.title.substring(0, 20)} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })
        }
      </Swiper>

      {/* ################## Category section ################# */}
      {/* ################## Category section ################# */}
      {/* ################## Category section ################# */}

      <Category></Category>


      {/* ############## Custom Navigation Buttons ################## */}
      {/* ############## Custom Navigation Buttons ################## */}
      {/* ############## Custom Navigation Buttons ################## */}

      <div className="swiper-button-prev absolute top-1/2 -translate-y-1/2 left-4 z-10">
        <AiOutlineArrowLeft className="bg-green-600 text-white p-2 rounded-full text-2xl hover:bg-green-700 transition-all" />
      </div>
      <div className="swiper-button-next absolute top-1/2 -translate-y-1/2 right-4 z-10">
        <AiOutlineArrowRight className="bg-green-600 text-white p-2 rounded-full text-2xl hover:bg-green-700 transition-all" />
      </div>

      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
              width: auto !important;
              height: auto !important;
              background: transparent !important;
          }
          .swiper-button-next:after,
          .swiper-button-prev:after {
              display: none;
          }
          .swiper-pagination-bullet {
              background: #5cf548 !important;
          }
        `}
      </style>



    </div>
  )
}

export default Carousel