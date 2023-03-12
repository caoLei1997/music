import styled from "styled-components";
import global from "@/assets/style/global-style";
export const ProgressCircleStyle = styled.div`
  position: relative;
  circle {
    stroke-width: 8px;
    transform-origin: center;
    &.progress-background {
      transform: scale(0.9);
      stroke: ${global["theme-color-shadow"]};
    }
    &.progress-bar {
      transform: scale(0.9) rotate(-90deg);
      stroke: ${global["theme-color"]};
    }
  }
`;
