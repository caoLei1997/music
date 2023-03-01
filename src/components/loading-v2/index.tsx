import { memo } from "react"
import { LoadingStyled } from "./style"

const Loading = () => {
  return (
   <LoadingStyled>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span>拼命加载中...</span>
   </LoadingStyled>
  )
}

export default memo(Loading)