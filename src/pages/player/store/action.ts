import * as actionTypes from "./constants";
import { ActionType } from "@/store/reducer";
import { fromJS } from "immutable";

export const changeFullScreen = (data: boolean): ActionType => ({
  type: actionTypes.CHANGE_FULL_SCREEN,
  data,
});

export const changePlaying = (data: boolean): ActionType => ({
  type: actionTypes.CHANGE_PLAYING,
  data,
});

export const changeSequencePlayList = (data: any): ActionType => ({
  type: actionTypes.CHANGE_SEQUENCE_PLAYLIST,
  data: fromJS(data),
});

export const changePlayList = (data: any): ActionType => ({
  type: actionTypes.CHANGE_PLAYLIST,
  data: fromJS(data),
});

export const changeMode = (data: number): ActionType => ({
  type: actionTypes.CHANGE_MODE,
  data,
});

export const changeCurrentIndex = (data: number): ActionType => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  data,
});

export const changeShowPlayList = (data: boolean): ActionType => ({
  type: actionTypes.CHANGE_SHOW_PLAYLIST,
  data,
});

export const changeCurrentSong = (data: any): ActionType => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  data: fromJS(data),
});
