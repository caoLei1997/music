import styled from 'styled-components';
import global from '@/assets/style/global-style';
export const HorizontalStyle = styled.div`
  display: flex;
  align-items: center;
  .title {
    font-size: 12px;
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 8px;
    box-sizing: border-box;
    color: grey;
    font-size: ${global['font-size-m']};
    vertical-align: middle;
    position: relative;

    /* &::after {
      position: absolute;
      content: ':';
      right: -4px;
    } */
  }
`;
export const ListStyle = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 30px;
`;
export const ListItemStyle = styled.span`
  flex: 0 0 auto;
  font-size: ${global['font-size-m']};
  padding: 5px 8px;
  border-radius: 10px;
  &.selected {
    color: ${global['theme-color']};
    border: 1px solid ${global['theme-color']};
    opacity: 0.8;
  }
`;
