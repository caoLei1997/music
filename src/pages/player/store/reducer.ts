import { playMode } from "@/api/mock";
import { ActionType } from "@/store/reducer";
import { FromJS, fromJS } from "immutable";
import * as actionTypes from "./constants";

interface DefaultState {
  fullScreen: boolean;
  playing: boolean;
  sequencePlayList: [];
  playList: [];
  mode: number;
  currentIndex: number;
  showPlayList: boolean;
  currentSong: any;
}

const defaultState = fromJS<DefaultState>({
  // 全屏
  fullScreen: false,
  // 是否播放
  playing: false,
  // 顺序播放列表
  sequencePlayList: [],
  // 播放列表
  playList: [],
  // 播放模式
  mode: playMode.sequence,
  // 当前歌曲索引
  currentIndex: -1,
  // 是否展示播放列表
  showPlayList: false,
  // 当前歌曲
  currentSong: {},
});

export default (
  state: FromJS<DefaultState> = defaultState,
  action: ActionType
) => {
  switch (action.type) {
    case actionTypes.CHANGE_FULL_SCREEN:
      return state.set("fullScreen", action.data);
    case actionTypes.CHANGE_PLAYING:
      return state.set("playing", action.data);
    case actionTypes.CHANGE_SEQUENCE_PLAYLIST:
      return state.set("sequencePlayList", action.data);
    case actionTypes.CHANGE_PLAYLIST:
      return state.set("playList", action.data);
    case actionTypes.CHANGE_MODE:
      return state.set("mode", action.data);
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set("currentIndex", action.data);
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.data);
    case actionTypes.CHANGE_SHOW_PLAYLIST:
      return state.set("showPlayList", action.data);
    default:
      return state;
  }
};
