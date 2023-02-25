/*
 * @Author: caolei
 * @Date: 2023-02-23 17:45:23
 * @LastEditTime: 2023-02-24 14:01:42
 * @Description: swiper 9x
 */

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css/bundle';
import { SliderStyle } from './style';

const swiperPlugin = [Autoplay, Pagination, Navigation]

interface SliderProps {
  dataSource: { imageUrl: string }[]
}
const Slider9X = (props: SliderProps) => {
  const { dataSource } = props;
  return (
    <>
      <SliderStyle>
        <div className='before' />
        <div className='slider-container'>
          <div className='swiper-wrapper'>
            <Swiper
              modules={swiperPlugin}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                el: '.swiper-pagination',
                clickable: true
              }}
              loop
            >
              {
                dataSource.map((slider, index) => (
                  <SwiperSlide key={index}>
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          <div className='swiper-pagination'></div>
        </div>

      </SliderStyle>

    </>
  )
}

export default Slider9X
