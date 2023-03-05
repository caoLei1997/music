import { memo } from "react";
import { forwardRef } from "react";
import { HeaderStyled } from "./style";

interface HeaderProps {
  onClick?: () => void;
  title?: string;
  isMarquee?: boolean;
}
const Header = (props: HeaderProps, ref: any) => {
  const { title = "标题", isMarquee = false } = props;
  const { onClick = () => {} } = props;
  return (
    <HeaderStyled ref={ref}>
      <i className="iconfont back" onClick={onClick}>
        &#xe655;
      </i>
      {isMarquee ? (
        <marquee>
          <h1>{title}</h1>
        </marquee>
      ) : (
        <h1>{title}</h1>
      )}
    </HeaderStyled>
  );
};

export default forwardRef(Header);
