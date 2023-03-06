import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

interface PlayerProps {}

const Player = (props: PlayerProps) => {
  // action
  const dispatch = useDispatch();
  // 数据源
  const {
    fullScreen,
    playing,
    sequencePlayList,
    playList,
    mode,
    currentIndex,
    showPlayList,
    currentSong,
  } = useSelector((state: any) => ({
    fullScreen: state.getIn(["player", "fullScreen"]),
    playing: state.getIn(["player", "playing"]),
    sequencePlayList: state.getIn(["player", "sequencePlayList"])?.toJS() || [],
    playList: state.getIn(["player", "playList"])?.toJS() || [],
    mode: state.getIn(["player", "mode"]),
    currentIndex: state.getIn(["player", "currentIndex"]),
    showPlayList: state.getIn(["player", "showPlayList"]),
    currentSong: state.getIn(["player", "currentSong"])?.toJS() || {},
  }));
  return <div>Player</div>;
};

export default memo(Player);
