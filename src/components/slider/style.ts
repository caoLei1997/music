import styled from 'styled-components';
import global from '@/assets/style/global-style';

export const SliderStyle = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: white;

  .before {
    position: absolute;
    top: -300px;
    height: 400px;
    width: 100%;
    background-color: ${global['theme-color']};
  }

  .slider-container {
    position: relative;
    width: 98%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;

    .slider-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active {
      background: ${global['theme-color']};
    }
  }
`;
