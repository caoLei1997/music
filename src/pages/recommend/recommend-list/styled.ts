import styled from 'styled-components';
import global from '@/assets/style/global-style';

export const ListWrapperStyled = styled.div`
  max-width: 100%;
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 60px;
  }
`;
export const ListStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const ListItemStyled = styled.div`
  position: relative;
  width: 32%;

  .img-wrapper {
    position: relative;
    height: 0;
    padding-bottom: 100%;
    img {
      position: absolute;
      border-radius: 3px;
      width: 100%;
      height: 100%;
    }

    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      z-index: 1;
      background: linear-gradient(
        hsla (0, 0%, 43%, 0.4),
        hsla (0, 0%, 100%, 0)
      );
    }

    .play-count {
      position: absolute;
      z-index: 2;
      right: 2px;
      top: 2px;
      font-size: ${global['font-size-s']};
      line-height: 15px;
      color: ${global['font-color-light']};
      .play {
        vertical-align: top;
      }
    }
  }

  .desc {
    overflow: hidden;
    margin-top: 2px;
    padding: 0 2px;
    height: 50px;
    text-align: left;
    font-size: ${global['font-size-s']};
    line-height: 1.4;
    color: ${global['font-color-desc']};
  }
`;
