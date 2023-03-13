import ProgressCircle from "@/components/progress-circle";
import { getName } from "@/utils";
import React, { memo, useRef } from "react";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { PlayerProps } from "../interface";
import { changeFullScreen } from "../store/action";
import { MiniStyle } from "./style";

const MiniPlayer = (props: PlayerProps) => {
  // action
  const dispatch = useDispatch();
  const { song, fullScreen, playing, percent = 0.2 } = props;
  const { clickPlaying = ()=>{} } = props;

  // 兼容严格模式
  const miniRef = useRef<any>();

  const onEnter = () => {
    miniRef.current.style.display = "flex";
  };
  const onExited = () => {
    miniRef.current.style.display = "none";
  };

  return (
    <CSSTransition
      nodeRef={miniRef}
      in={!fullScreen}
      classNames="mini"
      timeout={400}
      onEnter={onEnter}
      onExited={onExited}
    >
      <MiniStyle ref={miniRef} onClick={() => dispatch(changeFullScreen(true))}>
        <div className="icon">
          <div className="imgWrapper">
            <img
              className={`play ${playing ? "" : "pause"}`}
              src={song.al.picUrl}
              width="40"
              height="40"
              alt="img"
            />
          </div>
        </div>
        <div className="text">
          <h2 className="name">{song.name}</h2>
          <p className="desc">{getName(song.ar)}</p>
        </div>
        <div className="control">
          <ProgressCircle radius={32} percent={percent}>
            {playing ? (
              <i className="icon-mini iconfont icon-play" onClick={e=> clickPlaying(e,false)}>&#xe650;</i>
            ) : (
              <i className="icon-mini iconfont icon-play" onClick={e=> clickPlaying(e,true)}>&#xe61e;</i>
            )}
          </ProgressCircle>
        </div>
        <div className="control">
          <i className="iconfont">&#xe640;</i>
        </div>
      </MiniStyle>
    </CSSTransition>
  );
};

export default memo(MiniPlayer);
