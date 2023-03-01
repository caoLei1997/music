import styled, { keyframes } from "styled-components";
import global from "@/assets/style/global-style";

const loadingKeyframes = keyframes`
  0%,40%,100% {
    transform: scaleY(0.4)
  }

  20%{
    transform:scaleY(1.0)
  }
`;

export const LoadingStyled = styled.div`
  height: 10px;
  width: 100%;
  margin: auto;
  text-align: center;
  font-size: 10px;
  > div {
    display: inline-block;
    background-color: ${global["theme-color"]};
    height: 100%;
    width: 1px;
    margin-right: 2px;
    animation: ${loadingKeyframes} 1s infinite;
  }

  > div:nth-last-child(2) {
    animation-delay: -0.4s;
  }
  > div:nth-last-child(3) {
    animation-delay: -0.6s;
  }
  > div:nth-last-child(4) {
    animation-delay: -0.5s;
  }
  > div:nth-last-child(5) {
    animation-delay: -0.2s;
  }
`;
