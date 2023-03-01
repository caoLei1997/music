import styled from "styled-components";

export const ScrollStyle = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PullUpLoadingStyle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  width: 60px;
  height: 60px;
  margin: auto;
  z-index: 100;
`;

export const PullDownLoadingStyle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
  height: 30px;
  z-index: 100;
  margin: auto;
`;
