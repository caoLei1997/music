import styled from "styled-components";
import global from "@/assets/style/global-style";

export const ListStyle = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  overflow: hidden;
`;
export const ListItemStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: 0 5px;
  padding: 5px 0;
  align-items: center;
  border-bottom: 1px solid ${global["border-color"]};
  .img-wrapper {
    margin-right: 20px;
    img {
      border-radius: 3px;
      width: 50px;
      height: 50px;
    }
  }
  .name {
    font-size: ${global["font-size-m"]};
    color: ${global["font-color-desc"]};
    font-weight: 500;
  }
`;
