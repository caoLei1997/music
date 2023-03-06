import Header from "@/components/header";
import Loading from "@/components/loading";
import Scroll from "@/components/scroll";
import SongList from "@/components/song-list";
import useGoBack from "@/hooks/useGoBack";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { CSSTransition } from "react-transition-group";
import { HEADER_HEIGHT } from "../album/constants";
import { changeSingersLoading, getSingersInfo } from "./store/action";
import {
  BgLayerStyle,
  CollectButtonStyle,
  ImgWrapperStyle,
  SingersDetailStyle,
  SongListStyle,
} from "./style";

const SingersDetail = () => {
  // action
  const dispatch = useDispatch();
  // router api
  const routerParams = useParams();
  // 动画进入离开状态
  const [show, setShow] = useState(true);
  const handleBack = () => setShow(false);

  // 返回函数
  const [back] = useGoBack(-2);

  // 数据源
  const { loading, artist, songsArtist } = useSelector((state: any) => ({
    loading: state.getIn(["singersDetail", "loading"]),
    artist: state.getIn(["singersDetail", "artist"]).toJS() || {},
    songsArtist: state.getIn(["singersDetail", "songsArtist"]).toJS() || [],
  }));
  // 请求数据
  useEffect(() => {
    dispatch(changeSingersLoading(true))
    dispatch(getSingersInfo(routerParams.id as string));
  }, [routerParams.id]);
  // dom
  const headerDomRef = useRef<any>();
  const imgDomRef = useRef<any>();
  const collectDomRef = useRef<any>();
  const bgLayerRef = useRef<any>();
  const songDomRef = useRef<any>();
  const songScroll = useRef<any>();
  // 图片初始高度
  const initialHeight = useRef(0);

  // 往上偏移的尺寸，露出圆角
  const OFFSET = 5;
  // 计算页面布局
  useEffect(() => {
    let h = imgDomRef.current.offsetHeight;
    songDomRef.current.style.top = `${h - OFFSET}px`;
    initialHeight.current = h;
    // 把遮罩先放在下面，以裹住歌曲列表
    bgLayerRef.current.style.top = `${h - OFFSET}px`;
    songScroll.current.refresh();
  }, []);

  // 页面滚动交互
  const handleScroll = useCallback((pos: any) => {
    // 初始图片高度
    const height = initialHeight.current;
    const y = pos.y;
    const imgDom = imgDomRef.current;
    const collectDom = collectDomRef.current;
    const headerDom = headerDomRef.current;
    const layerDom = bgLayerRef.current;
    // y 上拉阈值
    const minScrollY = -(height - OFFSET) + HEADER_HEIGHT;
    // 指的是滑动距离占图片高度的百分比
    const percent = Math.abs(y / height);
    // console.log('minScrollY: ', minScrollY)
    // console.log('y: ', y)
    // 下拉交互
    if (y > 0) {
      imgDom.style["transform"] = `scale(${1 + percent})`;
      collectDom.style["transform"] = `translate3d(0, ${y}px, 0)`;
      layerDom.style.top = `${height - OFFSET + y}px`;
    } else if (y >= minScrollY) {
      // 上拉交互 滑动距离没有超过header
      layerDom.style.top = `${height - OFFSET - Math.abs(y)}px`;
      imgDom.style.paddingTop = "75%";
      imgDom.style.height = 0;
      imgDom.style.zIndex = -1;
      // 收藏按钮移送
      collectDom.style["transform"] = `translate3d(0, ${y}px, 0)`;
      collectDom.style["opacity"] = `${1 - percent * 2}`;
    } else if (y < minScrollY) {
      // 上拉交互 超过header
      layerDom.style.top = `${HEADER_HEIGHT - OFFSET}px`;
      layerDom.style.zIndex = 1;
      headerDom.style.zIndex = 101;
      imgDom.style.height = `${HEADER_HEIGHT}px`;
      imgDom.style.paddingTop = 0;
      imgDom.style.zIndex = 100;
    }
  }, []);

  // 兼容 react 严格模式 CSSTransition 报错
  const transitionRef = useRef<any>();

  return (
    <CSSTransition
      in={show}
      classNames="fly"
      timeout={300}
      appear
      unmountOnExit
      onExited={back}
      nodeRef={transitionRef}
    >
      <SingersDetailStyle play={0} ref={transitionRef}>
        <Header ref={headerDomRef} title="头部" onClick={handleBack} />
        <ImgWrapperStyle ref={imgDomRef} imgUrl={artist.picUrl}>
          <div className="filter"></div>
        </ImgWrapperStyle>
        <CollectButtonStyle ref={collectDomRef}>
          <i className="iconfont">&#xe62d;</i>
          <span className="text">收藏</span>
        </CollectButtonStyle>
        {/* 将除了img的区域铺满 */}
        <BgLayerStyle ref={bgLayerRef}></BgLayerStyle>
        <SongListStyle ref={songDomRef}>
          <Scroll ref={songScroll} onScroll={handleScroll}>
            <SongList dataSource={songsArtist} collect={false}></SongList>
          </Scroll>
        </SongListStyle>
        {loading ? <Loading /> : null}
      </SingersDetailStyle>
    </CSSTransition>
  );
};

export default memo(SingersDetail);
