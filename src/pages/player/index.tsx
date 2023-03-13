import { getSongUrl } from "@/api/utils";
import { isEmptyObject } from "@/utils";
import { memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MiniPlayer from "./miniPlayer";
import NormalPlayer from "./normalPlayer";
import {
  changeCurrentIndex,
  changeCurrentSong,
  changePlaying,
} from "./store/action";

interface PlayerProps {}
const playlist = [
  {
    ftype: 0,
    djId: 0,
    a: null,
    cd: "01",
    crbt: null,
    no: 1,
    st: 0,
    rt: "",
    cf: "",
    alia: ["手游《梦幻花园》苏州园林版推广曲"],
    rtUrls: [],
    fee: 0,
    s_id: 0,
    copyright: 0,
    h: {
      br: 320000,
      fid: 0,
      size: 9400365,
      vd: -45814,
    },
    mv: 0,
    al: {
      id: 84991301,
      name: "拾梦纪",
      picUrl:
        "http://p1.music.126.net/M19SOoRMkcHmJvmGflXjXQ==/109951164627180052.jpg",
      tns: [],
      pic_str: "109951164627180052",
      pic: 109951164627180050,
    },
    name: "拾梦纪",
    l: {
      br: 128000,
      fid: 0,
      size: 3760173,
      vd: -41672,
    },
    rtype: 0,
    m: {
      br: 192000,
      fid: 0,
      size: 5640237,
      vd: -43277,
    },
    cp: 1416668,
    mark: 0,
    rtUrl: null,
    mst: 9,
    dt: 234947,
    ar: [
      {
        id: 12084589,
        name: "妖扬",
        tns: [],
        alias: [],
      },
      {
        id: 12578371,
        name: "金天",
        tns: [],
        alias: [],
      },
    ],
    pop: 5,
    pst: 0,
    t: 0,
    v: 3,
    id: 1416767593,
    publishTime: 0,
    rurl: null,
  },
];

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

  // mini
  const clickPlaying = (e: any, state: boolean) => {
    e.stopPropagation();
    dispatch(changePlaying(state));
    state ? audioRef.current.play() : audioRef.current.pause();
  };
  // fullscreen
  // 播放时长
  const [currentTime, setCurrentTime] = useState(0);
  // 播放总时长
  const [duration, setDuration] = useState(0);
  // 播放进度
  let percent = isNaN(currentTime / duration) ? 0 : currentTime / duration;
  // 绑定ref
  const audioRef = useRef<any>();

  useEffect(() => {
    if (!currentSong) return;
    // 当前歌曲
    dispatch(changeCurrentIndex(0));
    // 赋值 current song
    let current = playlist[0];
    dispatch(changeCurrentSong(current));

    console.log("current: ", current);

    // 歌曲地址
    audioRef.current.src = getSongUrl(current.id);
    // 播放
    // chrome 66+ 无法自动播放
    // setTimeout(() => {
    //   console.log("audioRef.current: ", audioRef.current);
    // });
    dispatch(changePlaying(true)); // 播放状态
    setCurrentTime(0); // 从头开始播放
    setDuration((current.dt / 1000) | 0); //时长
  }, []);

  return (
    <div>
      {isEmptyObject(currentSong) ? null : (
        <MiniPlayer
          song={song}
          fullScreen={fullScreen}
          playing={playing}
          clickPlaying={clickPlaying}
        />
      )}

      {isEmptyObject(currentSong) ? null : (
        <NormalPlayer
          song={song}
          fullScreen={fullScreen}
          playing={playing}
          clickPlaying={clickPlaying}
        />
      )}

      <audio ref={audioRef}></audio>
    </div>
  );
};

export default memo(Player);
