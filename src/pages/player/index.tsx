import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import MiniPlayer from "./miniPlayer";
import NormalPlayer from "./normalPlayer";

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

  const song = {
    al: {
      picUrl:
        "https://p1.music.126.net/JL_id1CFwNJpzgrXwemh4Q==/109951164172892390.jpg",
    },
    name: "木偶人",
    ar: [{ name: "薛之谦" }],
  };
  return (
    <div>
      <MiniPlayer song={song} fullScreen={fullScreen} />
      <NormalPlayer song={song} fullScreen={fullScreen} />
    </div>
  );
};

export default memo(Player);
