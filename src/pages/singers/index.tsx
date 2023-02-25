import { categoryTypes, alphaTypes } from '@/api/mock'
import Horizontal from '@/components/scroll-horizontal'
import { useState } from 'react'
import { SingersStyle } from './style'

const Singers = () => {
  // 分类 current
  const [categoryValue, setCategoryValue] = useState<string>('')
  // 首字母 current
  const [alphaValue, setAlphaValue] = useState<string>('')
  return (
    <SingersStyle>
      <Horizontal
        title='分类 (默认热门)'
        dataSource={categoryTypes}
        currentValue={categoryValue}
        onClick={(key) => setCategoryValue(key)}
      />
      <Horizontal
        title='首字母'
        dataSource={alphaTypes}
        currentValue={alphaValue}
        onClick={(key) => setAlphaValue(key)}
      />
    </SingersStyle>
  )
}

export default Singers
