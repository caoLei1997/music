import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import BScroll from 'better-scroll'
import { emptyFunc } from '@/utils';
import { ScrollStyle } from './style';

type Direction = 'vertical' | 'horizontal'
interface ScrollProps {
  //滚动方向
  direction?: Direction;
  // 是否支持点击
  click?: boolean;
  // 触发灵敏度
  probeType?: 0 | 1 | 2 | 3,
  // 是否刷新
  refresh?: true;
  // 滑动回调函数
  onScroll?: (scroll: any) => void;
  // 上拉loading
  pullUpLoading?: boolean;
  // 下拉loading
  pullDownLoading?: boolean;
  // 上拉回调函数
  onPullUp?: () => void;
  // 下拉回调函数
  onPullDown?: () => void;
  // 向上吸顶
  bounceTop?: boolean;
  // 向下吸底
  bounceBottom?: boolean;
  // children
  children?: React.ReactElement
}

const Scroll = (props: ScrollProps, ref: any) => {
  const {
    direction = 'vertical',
    click = true,
    probeType = 3,
    refresh = true,
    pullUpLoading = true,
    pullDownLoading = true,
    bounceTop = true,
    bounceBottom = true,
    children
  } = props
  const {
    onScroll = emptyFunc,
    onPullUp = emptyFunc,
    onPullDown = emptyFunc
  } = props
  // scroll 实例对象
  const [bScroll, createScroll] = useState<any>(null)
  // scroll dom 元素
  const scrollDomRef = useRef<any>()

  // 创建 scroll 实例
  useEffect(() => {
    const bScroll = new BScroll(scrollDomRef.current as HTMLElement, {
      scrollX: direction === 'horizontal',
      scrollY: direction === 'vertical',
      // bScroll 触发灵敏度 高
      probeType,
      click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom,
      },
      // mac chrome滚动
      // mouseWheel: true
    })
    createScroll(bScroll)
    // 页面卸载注销实例对象
    return () => {
      createScroll(null)
    }
  }, [scrollDomRef])

  // 页面重新渲染刷新实例
  useEffect(() => {
    (refresh && bScroll) && bScroll.refresh()
  })

  // 绑定 scroll 事件
  useEffect(() => {
    if (!bScroll || !onScroll) return
    bScroll.on('scroll', (scroll: any) => {
      onScroll(scroll)
    })
    // 页面卸载取消scroll监听事件
    return () => {
      bScroll.off('scroll')
    }
  }, [onScroll, bScroll])

  // 上拉触底
  useEffect(() => {
    if (!bScroll || !onPullUp) return;
    bScroll.on('scrollEnd', () => {
      // 是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        onPullUp()
      }
    })
    return () => {
      bScroll.off('scrollEnd')
    }
  }, [bScroll, onPullUp])

  // 下拉刷新
  useEffect(() => {
    if (!bScroll || !onPullDown) return;
    bScroll.on('touchEnd', (pos: any) => {
      // 判断用户下拉动作
      if (pos.y > 50) {
        onPullDown()
      }
    })
    return () => {
      bScroll.off('touchEnd')
    }
  }, [bScroll, onPullDown])

  // 抛出组将方法
  useImperativeHandle(
    ref,
    () => ({
      refresh() {
        if (bScroll) {
          bScroll.refresh()
          bScroll.scrollTo(0, 0)
        }
      },
      getScroll() {
        if (bScroll) {
          return bScroll
        }
      },
    }),
    [bScroll]
  )
  return (
    <ScrollStyle ref={scrollDomRef}>
      {children}
    </ScrollStyle>
  )
}


export default forwardRef(Scroll)
