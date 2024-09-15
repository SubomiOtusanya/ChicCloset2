import React from "react";
import "./slider.css";
import img1 from "../../assets/Frame 9.png";
import img2 from "../../assets/Frame 8.png";
import img3 from "../../assets/Frame 10.png";
import img4 from "../../assets/Frame 11.png"
import img5 from "../../assets/Frame 12.png"
import img6 from "../../assets/Frame 13.png"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';





export default function Sldier(){

  

  return(
    <div style={{marginTop:"-3rem", marginBottom:"3rem"}}>
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSlideChange={() => console.log('slide change')}
      // scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="slide"><img className="img1" src={img1} alt="" /></SwiperSlide>
      <SwiperSlide><img className="img1" src={img2} alt="" /></SwiperSlide>
      <SwiperSlide><img className="img1" src={img3} alt="" /></SwiperSlide>
      <SwiperSlide><img className="img1" src={img4} alt="" /></SwiperSlide>
      <SwiperSlide><img className="img1" src={img5} alt="" /></SwiperSlide>
      <SwiperSlide><img className="img1"src={img6} alt="" /></SwiperSlide>
      
    </Swiper>
    </div>
  )
}