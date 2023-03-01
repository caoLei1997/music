import { memo } from "react"
import { LoadingStyled } from "./style"

const Loading = () => {
  return (
   <LoadingStyled>
      <div></div>
      <div></div>
   </LoadingStyled>
  )
}

export default memo(Loading)