import styled, { keyframes } from "styled-components";
import global from "@/assets/style/global-style";

const loadingKeyframes = keyframes`
  0%,100% {
    transform: scale(0)
  }

  50%{
    transform:scale(1.0)
  }
`;

export const LoadingStyled = styled.div`
  > div {
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    opacity: 0.6;
    border-radius: 50%;
    background-color: ${global["theme-color"]};
    animation: ${loadingKeyframes} 1.4s infinite ease-in;
  }

  > div:nth-last-child(2) {
    animation-delay: -0.7s;
  }
`;
