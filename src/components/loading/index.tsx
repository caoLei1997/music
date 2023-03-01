import { memo } from "react";
import { LoadingStyled } from "./style";

interface LoadingProps {
  show: boolean;
}
const Loading = (props: LoadingProps) => {
  const {show} = props
  return (
    <LoadingStyled style={show ? { display: "" } : { display: "none" }}>
      <div></div>
      <div></div>
    </LoadingStyled>
  );
};

export default memo(Loading);
