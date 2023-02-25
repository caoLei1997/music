import { categoryTypes, alphaTypes } from '@/api/config'
import Horizental from '@/components/scroll-horizental'
import { useState } from 'react'
import { SingersStyle } from './style'

const Singers = () => {
  // 分类 current
  const [categoryValue, setCategoryValue] = useState<string>('')
  // 首字母 current
  const [alphaValue, setAlphaValue] = useState<string>('')
  return (
    <SingersStyle>
      <Horizental
        title='分类 (默认热门)'
        dataSource={categoryTypes}
        currentValue={categoryValue}
        onClick={(key) => setCategoryValue(key)}
      />
      <Horizental
        title='首字母'
        dataSource={alphaTypes}
        currentValue={alphaValue}
        onClick={(key) => setAlphaValue(key)}
      />
    </SingersStyle>
  )
}

export default Singers
