import { CSSTransition } from "react-transition-group";
import { memo, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AlbumStyled, MenuStyle, TopStyle } from "./style";
import Header from "@/components/header";
import { AlbumData } from "./interface";
import Scroll from "@/components/scroll";
import { getCount, isEmptyObject } from "@/utils";
import SongList from "./song-list";
import { HEADER_HEIGHT } from "./constant";
import global from "@/assets/style/global-style";
import { useDispatch, useSelector } from "react-redux";
import { changeLoading, getAlbumData } from "./store/action";
import Loading from "@/components/loading";

const Album = () => {
  // router api
  const navigate = useNavigate();
  const routerParams = useParams();
  // dispatch
  const dispatch = useDispatch();
  // store 数据源

  const { albumData, loading } = useSelector((state: any) => ({
    albumData: state.getIn(["album", "albumData"])?.toJS() || {},
    loading: state.getIn(["album", "loading"]),
  }));

  useEffect(() => {
    dispatch(changeLoading(true));
    dispatch(getAlbumData(Number(routerParams.id)));
  }, []);

  // 动画进入离开状态
  const [showState, setShowState] = useState<boolean>(true);
  const handleBack = () => setShowState(false);
  // 兼容 react 严格模式 CSSTransition 报错
  const transitionRef = useRef<any>();
  // header title
  const [title, setTitle] = useState("歌单");
  // header dom ref
  const headerRef = useRef();
  // 跑马灯
  const [isMarquee, setIsMarquee] = useState(false);
  // onScroll
  const handleScroll = (pos: any) => {
    let minScrollY = -HEADER_HEIGHT;
    let percent = Math.abs(pos.y / minScrollY);
    let headerDom: HTMLDivElement = headerRef?.current as any;
    // y 大于 -45 高度逻辑
    if (pos.y < minScrollY) {
      headerDom.style.backgroundColor = global["theme-color"];
      headerDom.style.opacity = Math.min(1, (percent - 1) / 2).toString();
      setTitle(albumData.name);
      setIsMarquee(true);
    } else {
      headerDom.style.backgroundColor = "";
      headerDom.style.opacity = "1";
      setTitle("歌单");
      setIsMarquee(false);
    }
  };
  return (
    <CSSTransition
      in={showState}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      nodeRef={transitionRef}
      onExited={() => {
        navigate(-2);
      }}
    >
      <AlbumStyled ref={transitionRef}>
        <Header
          title={title}
          onClick={handleBack}
          ref={headerRef}
          isMarquee={isMarquee}
        />
        {!isEmptyObject(albumData) ? (
          <Scroll
            onScroll={handleScroll}
            bounceTop={false}
            // bounceBottom={false}
          >
            <div>
              <TopStyle background={albumData.coverImgUrl}>
                <div className="background">
                  <div className="filter"></div>
                </div>
                <div className="img-wrapper">
                  <div className="decorate"></div>
                  <img src={albumData.coverImgUrl} alt="歌单" />
                  <div className="play-count">
                    <i className="iconfont">&#xe885;</i>
                    <span className="count">
                      {getCount(albumData.subscribedCount)}
                    </span>
                  </div>
                </div>
                <div className="des-wrapper">
                  <div className="title">{albumData.name}</div>
                  <div className="person">
                    <div className="avatar">
                      <img src={albumData.creator.avatarUrl} alt="作者" />
                    </div>
                    <div className="name">{albumData.creator.nickname}</div>
                  </div>
                </div>
              </TopStyle>
              <MenuStyle>
                <div>
                  <i className="iconfont">&#xe6ad;</i>
                  评论
                </div>
                <div>
                  <i className="iconfont">&#xe86f;</i>
                  点赞
                </div>
                <div>
                  <i className="iconfont">&#xe62d;</i>
                  收藏
                </div>
                <div>
                  <i className="iconfont">&#xe606;</i>
                  更多
                </div>
              </MenuStyle>
              <SongList />
            </div>
          </Scroll>
        ) : null}
        {loading ? <Loading></Loading> : null}
      </AlbumStyled>
    </CSSTransition>
  );
};

export default memo(Album);
