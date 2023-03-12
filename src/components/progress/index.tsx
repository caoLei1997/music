import { useRef, useState } from "react";
import { ProgressStyle } from "./style";

interface ProgressProps {
  percent?: number;
  onChange?: () => void;
}

interface Touch {
  initiated: boolean;
  startX: number;
  left: number;
}

const Progress = (props: ProgressProps) => {
  const { onChange } = props;

  const progressWrapper = useRef<any>();
  const progress = useRef<any>();
  const progressBtn = useRef<any>();
  const [touch, setTouch] = useState<Touch>();
  const progressBtnWidth = 16;

  // 处理进度条偏移
  const offset = (offsetWidth: number) => {
    progress.current.style.width = `${offsetWidth}px`;
    progressBtn.current.style.transform = `translate3d(${offsetWidth}px,0,0)`;
  };
  const progressTouchStart = (e: any) => {
    let startTouch: Touch = {
      initiated: false,
      startX: 0,
      left: 0,
    };
    startTouch.initiated = true;
    startTouch.startX = e.touches[0].pageX; // 滑动时横向坐标
    startTouch.left = progress.current.clientWidth; // 当前 progress 长度
    setTouch(startTouch);
  };

  const progressTouchMove = (e: any) => {
    if (!touch?.initiated) return;

    // 滑动距离
    const deltaX = e.touches[0].pageX - touch?.startX;
    const wrapperWidth =
      progressWrapper.current.clientWidth - progressBtnWidth / 2;
    const offsetWidth = Math.min(
      Math.max(0, touch.left + deltaX),
      wrapperWidth
    );
    offset(offsetWidth);
  };

  const progressTouchEnd = (e: any) => {
    const endTouch = JSON.parse(JSON.stringify(touch));
    endTouch.initiated = false;
    setTouch(endTouch);
    onChange?.()
  };

  // 用户点击进度条 进度
  const progressClick = (e: any) => {
    const rect = progressWrapper.current.getBoundingClientRect();
    const offsetWidth = e.pageX - rect.left; // 点击位置 - btn 水平位置
    offset(offsetWidth);
    onChange?.()
  };
  return (
    <ProgressStyle>
      <div className="bar-inner" ref={progressWrapper} onClick={progressClick}>
        <div className="progress" ref={progress}></div>
        <div
          className="progress-btn-wrapper"
          ref={progressBtn}
          onTouchStart={progressTouchStart}
          onTouchMove={progressTouchMove}
          onTouchEnd={progressTouchEnd}
        >
          <div className="progress-btn"></div>
        </div>
      </div>
    </ProgressStyle>
  );
};

export default Progress;
