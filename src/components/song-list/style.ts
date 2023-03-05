import styled from "styled-components";
import global from "@/assets/style/global-style";

export const SongStyle = styled.div<{ showBackground: boolean }>`
  border-radius: 10px;
  opacity: 0.98;
  position: relative;
  ${(props) =>
    props.showBackground
      ? `background: ${global["highlight-background-color"]}`
      : ""};

  .first-line {
    display: flex;
    box-sizing: border-box;
    padding: 10px 0;
    margin-left: 10px;
    position: relative;
    justify-content: space-between;
    border-bottom: 1px solid ${global["border-color"]};

    .play-all {
      display: inline-block;
      line-height: 24px;
      color: ${global["font-color-desc"]};
      .iconfont {
        font-size: 24px;
        margin-right: 10px;
        vertical-align: top;
      }
      .sum {
        font-size: ${global["font-size-s"]};
        color: ${global["font-color-desc-v2"]};
        margin-left: 10px;
      }
      > span {
        vertical-align: top;
      }
    }

    .collect-list {
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 130px;
      line-height: 34px;
      background: ${global["theme-color"]};
      color: ${global["font-color-light"]};
      font-size: 0;
      border-radius: 3px;
      vertical-align: top;
      .iconfont {
        vertical-align: top;
        font-size: 10px;
        margin: 0 5px 0 10px;
      }
      span {
        font-size: 14px;
        line-height: 34px;
      }
    }
  }
`;
export const SongItemStyle = styled.ul`
  > li {
    display: flex;
    height: 60px;
    align-items: center;
    .index {
      flex-basis: 60px;
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
    .info {
      box-sizing: border-box;
      flex: 1;
      display: flex;
      height: 100%;
      padding: 5px 0;
      flex-direction: column;
      justify-content: space-around;
      border-bottom: 1px solid ${global["border-color"]};
      ${global.noWrap()}
      >span {
        ${global.noWrap()}
      }
      > span:first-child {
        color: ${global["font-color-desc"]};
      }
      > span:last-child {
        font-size: ${global["font-size-s"]};
        color: #bba8a8;
      }
    }
  }
`;
