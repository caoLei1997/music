import React from "react";
import { useNavigate } from "react-router-dom";
import SongList from "../song-list";
import { ListItemStyle, RankListStyle } from "./style";

interface RankListProps {
  dataSource?: any[];
  // 行内
  line?: boolean;
}
const RankList = (props: RankListProps) => {
  const { dataSource = [], line = false } = props;
  // router api
  const navigate = useNavigate();
  const enterAlbum = (id: number) => {
    navigate(`/rank/${id}`);
  };
  return (
    <RankListStyle styleFlex={line}>
      {dataSource.map((item, index) => {
        return (
          <ListItemStyle
            key={item.coverImgId + "-" + index}
            tracks={item.tracks}
            onClick={() => enterAlbum(item.id)}
          >
            <div className="img-wrapper">
              <img src={item.coverImgUrl} alt="排行榜" />
              <div className="decorate"></div>
              <span className="update-frequency">{item.updateFrequency}</span>
            </div>
            {item.tracks && item.tracks.length ? (
              <SongList dataSource={item.tracks} />
            ) : null}
          </ListItemStyle>
        );
      })}
    </RankListStyle>
  );
};

export default RankList;
