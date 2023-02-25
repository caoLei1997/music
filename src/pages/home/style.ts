import styled from 'styled-components';
import global from '@/assets/style/global-style';

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background-color: ${global['theme-color']};
  & > span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`;

export const TabStyle = styled.div`
  ${global?.flexDesign('space-around')};
  height: 44px;
  background-color: ${global['theme-color']};
  a {
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: #e4e4e4;
    text-align: center;
    &.selected {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
`;
