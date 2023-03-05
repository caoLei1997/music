import styled from "styled-components";
import global from "@/assets/style/global-style";

export const HeaderStyled = styled.div`
  position: fixed;
  padding: 5px 10px;
  height: 40px;
  width: 100%;
  z-index: 900;
  display: flex;
  line-height: 40px;
  color: ${global["font-color-light-v2"]};
  .back {
    margin-right: 5px;
    font-size: 20px;
    width: 20px;
  }
  > h1 {
    font-size: ${global["font-size-l"]};
    font-weight: 700;
  }
`;
