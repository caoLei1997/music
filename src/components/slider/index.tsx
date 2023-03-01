/*
 * @Author: caolei
 * @Date: 2023-02-23 17:09:30
 * @LastEditTime: 2023-02-24 11:33:38
 * @Description: swiper 8x
 */

import React, { useEffect, useState } from 'react'
import Swiper, { Autoplay, Pagination } from 'swiper';

Swiper.use([Autoplay, Pagination])
import 'swiper/css'
import 'swiper/css/pagination';

import { SliderStyle } from './style';

interface SliderProps {
  dataSource: { imageUrl: string }[]
}
const Slider = (props: SliderProps) => {
  // swiper 实例
  const [sliderSwiper, setSliderSwiper] = useState<any>(null)
  // data
  const { dataSource } = props;
  // 初始化绑定实例
  useEffect(() => {
    if (dataSource.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination', clickable: true },
      })
      setSliderSwiper(newSliderSwiper);
    }
  }, [dataSource.length, sliderSwiper])
  return (
    <SliderStyle>
      <div className="before"></div>
      <div className='slider-container'>
        <div className="swiper-wrapper">
          {
            dataSource.map((slider, index) => {
              return (
                <div className="swiper-slide" key={slider.imageUrl}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderStyle>
  )
}

export default Slider
