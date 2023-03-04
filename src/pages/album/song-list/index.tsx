import { getCount, getName } from "@/utils";
import { useSelector } from "react-redux";
import { Tracks } from "../interface";
import { SongStyle, SongItemStyle } from "./style";

const SongList = () => {
  const { albumData, loading } = useSelector((state: any) => ({
    albumData: state.getIn(["album", "albumData"])?.toJS() || {},
    loading: state.getIn(["album", "loading"]),
  }));
  // 歌曲列表
  const dataSource: Tracks[] = albumData?.tracks || [];
  return (
    <SongStyle>
      <div className="first-line">
        <div className="play-all">
          <i className="iconfont">&#xe6e3;</i>
          <span>
            播放全部
            <span className="sum">(共 {dataSource.length} 首)</span>
          </span>
        </div>
        <div className="collect-list">
          <i className="iconfont">&#xe62d;</i>
          <span> 收藏 ({getCount(albumData.subscribedCount)})</span>
        </div>
      </div>

      <SongItemStyle>
        {dataSource.map((song, index) => {
          return (
            <li key={index}>
              <span className="index">{index}</span>
              <div className="info">
                <span>{song.name}</span>
                <span>
                  {getName(song.ar)} - {song.al.name}
                </span>
              </div>
            </li>
          );
        })}
      </SongItemStyle>
    </SongStyle>
  );
};

export default SongList;
