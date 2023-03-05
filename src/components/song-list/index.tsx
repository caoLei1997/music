import { getCount, getName } from "@/utils";
import { DataSource } from "./interface";
import { SongStyle, SongItemStyle } from "./style";

interface SongListProps {
  dataSource?: DataSource[];
  collect?: boolean;
  collectCount?: number;
  showBackground?: boolean;
}
const SongList = (props: SongListProps) => {
  // 歌曲列表
  const {
    dataSource = [],
    collect = false,
    collectCount = 0,
    showBackground = true,
  } = props;

  return (
    <SongStyle showBackground={showBackground}>
      <div className="first-line">
        <div className="play-all">
          <i className="iconfont">&#xe6e3;</i>
          <span>
            播放全部
            <span className="sum">(共 {dataSource.length} 首)</span>
          </span>
        </div>
        {collect ? (
          <div className="collect-list">
            <i className="iconfont">&#xe62d;</i>
            <span> 收藏 ({getCount(collectCount)})</span>
          </div>
        ) : null}
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
