import React from 'react'
import { HeaderStyle } from '../style'

const Header = () => {
  return (
    <HeaderStyle>
      <span className='iconfont menu'>&#xe65c;</span>
      <span className='title'>WebApp</span>
      <span className='iconfont search'>&#xe62b;</span>
    </HeaderStyle>
  )
}

export default Header
