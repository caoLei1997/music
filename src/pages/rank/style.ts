import styled from "styled-components";
import global from "@/assets/style/global-style";

export const RankStyle = styled.div`
  position: fixed;
  top: 90px;
  bottom: 0;
  width: 100%;
  .offical,
  .global {
    margin: 10px 5px;
    padding-top: 15px;
    font-weight: 700;
    font-size: ${global["font-size-m"]};
    color: ${global["font-color-desc"]};
  }
`;

export const EnterLoading = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  height: 100px;
  margin: auto;
`;
