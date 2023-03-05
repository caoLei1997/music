import styled from "styled-components";
import global from "@/assets/style/global-style";

export const SingersDetailStyle = styled.div<{ play: number }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  bottom: ${(props) => (props.play > 0 ? "60px" : 0)};
  overflow: hidden;
  width: 100%;
  background: ${global["background-color"]};
  z-index: 1;
  transform-origin: right bottom;

  &.fly-enter,
  &.fly-appear {
    transform: translate3d(100%, 0, 0);
  }

  &.fly-enter-active,
  &.fly-appear-active {
    transition: transform 0.3s;
    transform: translate3d(0, 0, 0);
  }

  &.fly-enter-done,
  &.fly-appear-done {
    transform: translate3d(0, 0, 0);
  }

  &.fly-exit {
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    transition: transform 0.3s;
    transform: translate3d(100%, 0, 0);
  }
`;

export const ImgWrapperStyle = styled.div<{ imgUrl: string }>`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 75%;
  transform-origin: top;
  background: url(${(props) => props.imgUrl});
  background-size: cover;
  z-index: 99;
  .filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba (7, 17, 27, 0.3);
  }
`;

export const CollectButtonStyle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  box-sizing: border-box;
  width: 120px;
  height: 40px;
  margin-top: -55px;
  z-index: 99;
  background: ${global["theme-color"]};
  color: ${global["font-color-light"]};
  border-radius: 20px;
  text-align: center;
  font-size: 0;
  line-height: 40px;
  .iconfont {
    display: inline-block;
    margin-right: 10px;
    font-size: 12px;
    vertical-align: 1px;
  }
  .text {
    display: inline-block;
    font-size: 14px;
    letter-spacing: 5px;
  }
`;

export const BgLayerStyle = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: white;
  border-radius: 10px;
  z-index: 99;
`;

export const SongListStyle = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  > div {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: visible;
  }
`;
