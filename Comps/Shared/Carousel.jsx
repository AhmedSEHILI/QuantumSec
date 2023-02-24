
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper";

function Carousel({members}) {
    
  return (
    <Swiper
    initialSlide={2}
      navigation={true}
      observer={true}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 1,
        },
        800:{
            slidesPerView:5
        }

      }}
      slideToClickedSlide={true}
      speed={500}
      centeredSlides={true}
      freeMode={true}
      modules={[FreeMode,Navigation]}
      className='flex items-center justify-center'
    >
      {members?.map((sponsor, idx) => (
        <SwiperSlide key={sponsor.firstname} className="flex items-center justify-center ">
          {({ isActive, isNext, isPrev }) => (
            
            <div className='flex flex-col justify-between items-center'>
                <div className={`w-64 rounded-full h-64 mb-10 flex justify-center items-center ${isActive && 'w-80 h-80 shadow-[0_8px_10px_rgb(145,206,209)]'}`}>
                    <div className='w-full h-full rounded-full select-none'>
                        <img className='w-full rounded-full h-full'  src={sponsor.image} alt={sponsor.lastname} />
                    </div>
                </div>
                <div className={`${isActive && 'bg-green3 rounded-3xl px-8 py-2'} select-none w-fit cursor-pointer`}>
                    
                    <p className={`${isActive ? 'text-xl text-white':'text-base text-white'} `}>{sponsor.firstname}</p>
                    <h2 className={`${isActive ? 'text-3xl text-white':'text-xl text-green3'} uppercase  font-bold`}>{sponsor.lastname}</h2>
                </div>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel