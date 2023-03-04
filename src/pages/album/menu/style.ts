import styled from "styled-components";
import global from "@/assets/style/global-style";

export const MenuStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 0 10px 20px;
  margin-top: -100px;
  > div {
    display: flex;
    flex-direction: column;
    line-height: 20px;
    text-align: center;
    font-size: ${global["font-size-s"]};
    color: ${global["font-color-light"]};
    z-index: 99;
    font-weight: 500;
    .icon-font {
      font-size: 20px;
    }
  }
`;