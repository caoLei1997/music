import styled from "styled-components";
import global from "@/assets/style/global-style";

export const RankListStyle = styled.ul<{ styleFlex: boolean }>`
  margin-top: 10px;
  padding: 0 5px;
  display: ${(props) => (props.styleFlex ? "flex" : "")};
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  background: ${global["background-color"]};

  &::after {
    content: "";
    display: block;
    width: 32vw;
  }
`;

export const ListItemStyle = styled.li<{ tracks: any[] }>`
  display: ${(props) => (props.tracks.length ? "flex" : "")};
  padding: 3px 0;
  border-bottom: 1px solid ${global["border-color"]};
  .img-wrapper {
    width: ${(props) => (props.tracks.length ? "27vw" : "32vw")};
    height: ${(props) => (props.tracks.length ? "27vw" : "32vw")};
    border-radius: 3px;
    position: relative;
    .decorate {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient
        (hsla (0, 0%, 100%, 0), hsla (0, 0%, 43%, 0.4));
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
    .update-frequency {
      position: absolute;
      left: 7px;
      bottom: 7px;
      font-size: ${global["font-size-ss"]};
      color: ${global["font-color-light"]};
    }
  }
`;
