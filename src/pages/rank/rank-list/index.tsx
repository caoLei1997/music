import React from "react";
import SongList from "../song-list";
import { ListItemStyle, RankListStyle } from "./style";

interface RankListProps {
  dataSource?: any[];
  // 行内
  line?: boolean;
}
const RankList = (props: RankListProps) => {
  const { dataSource = [], line = false } = props;
  return (
    <RankListStyle styleFlex={line}>
      {dataSource.map((item, index) => {
        return (
          <ListItemStyle key={item.coverImgId +'-'+ index} tracks={item.tracks}>
            <div className="img-wrapper">
              <img src={item.coverImgUrl} alt="排行榜" />
              <div className="decorate"></div>
              <span className="update-frequency">{item.updateFrequency}</span>
            </div>
            {Array.isArray(item.tracks) ? (
              <SongList dataSource={item.tracks} />
            ) : null}
          </ListItemStyle>
        );
      })}
    </RankListStyle>
  );
};

export default RankList;
