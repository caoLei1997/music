import { getName } from "@/utils";
import { useRef } from "react";
import { PlayerProps } from "../interface";
import { CSSTransition } from "react-transition-group";
// 动画库不支持 ts 需要 declare module
import animations from "create-keyframe-animation";
import { prefixStyle } from "@/utils/transform-adapt";

import {
  Action,
  CDWrapper,
  Middle,
  NormalPlayerStyle,
  Operators,
  ProgressStyle,
  Top,
} from "./style";
import { useDispatch } from "react-redux";
import { changeFullScreen } from "../store/action";
import Progress from "@/components/progress";

const NormalPlayer = (props: PlayerProps) => {
  // action
  const dispatch = useDispatch();
  const { song, fullScreen } = props;
  // react 严格模式兼容
  const normalRef = useRef<any>();
  // 适配 transform
  const transform = prefixStyle("transform");
  // wrapper
  const wrapperRef = useRef<any>();
  // 计算偏移函数
  const getPostScale = () => {
    const targetWidth = 40;
    const paddingLeft = 40;
    const paddingBottom = 30;
    const paddingTop = 80;
    const width = window.innerWidth * 0.8;
    const scale = targetWidth / width;

    // 两个圆心距离
    const x = -(window.innerWidth / 2 - paddingLeft);
    const y = window.innerHeight - paddingTop - width / 2 - paddingBottom;

    return {
      x,
      y,
      scale,
    };
  };
  // 启动动画
  const enter = () => {
    normalRef.current.style.display = "block";
    const { x, y, scale } = getPostScale();

    // 唱片入场动画
    let animation = {
      0: {
        transform: `translate3d(${x}px, ${y}px,0) scale(${scale})`,
      },
      60: {
        transform: `translate3d(0,0,0) scale(1.1)`,
      },
      100: {
        transform: `translate3d(0,0,0) scale(1)`,
      },
    };
    animations.registerAnimation({
      name: "move",
      animation,
      presets: {
        duration: 400,
        easing: "linear",
      },
    });
    animations.runAnimation(wrapperRef.current, "move");
  };
  // 入场后 解绑动画
  const afterEnter = () => {
    const wrapperDom = wrapperRef.current;
    animations.unregisterAnimation("move");
    wrapperDom.style.animation = "";
  };

  const leave = () => {
    if (!wrapperRef.current) return;
    const wrapperDom = wrapperRef.current;
    wrapperDom.style.transition = "all 0.4s";
    const { x, y, scale } = getPostScale();
    wrapperDom.style[
      transform
    ] = `translate3d(${x} px, ${y} px, 0) scale (${scale})`;
  };

  const afterLeave = () => {
    if (!wrapperRef.current) return;
    const wrapperDom = wrapperRef.current;
    wrapperDom.style.transition = "";
    wrapperDom.style[transform] = "";
    // 一定要注意现在要把 normalPlayer 这个 DOM 给隐藏掉，因为 CSSTransition 的工作只是把动画执行一遍
    // 不置为 none 现在全屏播放器页面还是存在
    normalRef.current.style.display = "none";
  };
  return (
    <CSSTransition
      classNames="normal"
      timeout={400}
      in={fullScreen}
      mountOnEnter
      nodeRef={normalRef}
      onEnter={enter}
      onEntered={afterEnter}
      onExit={leave}
      onExited={afterLeave}
    >
      <NormalPlayerStyle ref={normalRef}>
        <div className="background">
          <img
            src={song.al.picUrl + "?param=300x300"}
            width="100%"
            height="100%"
            alt="歌曲图片"
          />
        </div>
        <div className="background layer"></div>
        <Top className="top">
          <div
            className="back"
            onClick={() => dispatch(changeFullScreen(false))}
          >
            <i className="iconfont icon-back">&#xe662;</i>
          </div>
          <h1 className="title">{song.name}</h1>
          <h1 className="subtitle">{getName(song.ar)}</h1>
        </Top>
        <Middle ref={wrapperRef}>
          <CDWrapper>
            <div className="cd">
              <img
                className="image play"
                src={song.al.picUrl + "?param=400x400"}
                alt=""
              />
            </div>
          </CDWrapper>
        </Middle>

        <Action className="action">
          <ProgressStyle>
            <span className="time time-l">0:00</span>
            <div className="progress-bar-wrapper">
              <Progress percent={0.2}></Progress>
            </div>
            <div className="time time-r">4:17</div>
          </ProgressStyle>
          <Operators>
            <div className="icon i-left">
              <i className="iconfont">&#xe625;</i>
            </div>
            <div className="icon i-left">
              <i className="iconfont">&#xe6e1;</i>
            </div>
            <div className="icon i-center">
              <i className="iconfont">&#xe723;</i>
            </div>
            <div className="icon i-right">
              <i className="iconfont">&#xe718;</i>
            </div>
            <div className="icon i-right">
              <i className="iconfont">&#xe640;</i>
            </div>
          </Operators>
        </Action>
      </NormalPlayerStyle>
    </CSSTransition>
  );
};

export default NormalPlayer;
