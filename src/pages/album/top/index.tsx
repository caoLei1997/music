import { getCount } from "@/utils";
import { useSelector } from "react-redux";
import { TopStyle } from "./style";

const Top = () => {
  const { albumData } = useSelector((state: any) => ({
    albumData: state.getIn(["album", "albumData"])?.toJS() || {},
  }));

  return (
    <TopStyle background={albumData.coverImgUrl}>
      <div className="background">
        <div className="filter"></div>
      </div>
      <div className="img-wrapper">
        <div className="decorate"></div>
        <img src={albumData.coverImgUrl} alt="歌单" />
        <div className="play-count">
          <i className="iconfont">&#xe885;</i>
          <span className="count">{getCount(albumData.subscribedCount)}</span>
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
  );
};

export default Top;
