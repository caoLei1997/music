import styled from "styled-components";
import global from "@/assets/style/global-style";

export const AlbumStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: #fff;
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



