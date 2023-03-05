import { requestSingersInfo } from "@/api/request";
import { ActionType } from "@/store/reducer";
import { fromJS } from "immutable";
import { Dispatch } from "redux";
import * as actionsType from "./constant";

export const changeSingersArtist = (data: any): ActionType => ({
  type: actionsType.CHANGE_SINGERS_DETAIL_ARTIST,
  data: fromJS(data),
});

export const changeSingersSongsArtist = (data: any): ActionType => ({
  type: actionsType.CHANGE_SINGERS_DETAIL_SONGS_ARTIST,
  data: fromJS(data),
});

export const changeSingersLoading = (data: boolean): ActionType => ({
  type: actionsType.CHANGE_SINGERS_DETAIL_LOADING,
  data,
});

export const getSingersInfo = (id: string): any => {
  return (dispatch: Dispatch) => {
    requestSingersInfo(id)
      .then(({ artist, hotSongs: songsList }) => {
        dispatch(changeSingersArtist(artist));
        dispatch(changeSingersSongsArtist(songsList));
        dispatch(changeSingersLoading(false));
      })
      .catch(() => {
        console.log("歌手详情数据获取失败");
      });
  };
};
