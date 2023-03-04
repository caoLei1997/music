import { AlbumData } from "./../interface";
import { requestAlbumDetail } from "@/api/request";
import { ActionType } from "@/store/reducer";
import { Dispatch } from "redux";
import * as actionTypes from "./constant";
import { fromJS } from "immutable";

type ChangeAlbumData = (data: AlbumData) => ActionType;
export const changeAlbumData: ChangeAlbumData = (data) => ({
  type: actionTypes.CHANGE_ALBUM_DATA,
  data: fromJS(data),
});

export const changeLoading = (data: boolean) => ({
  type: actionTypes.CHANGE_LOADING,
  data,
});

type GetAlbumData = (id: number) => any;
export const getAlbumData: GetAlbumData = (id) => {
  return (dispatch: Dispatch) => {
    requestAlbumDetail(id)
      .then(({ playlist: data }) => {
        dispatch(changeAlbumData(data));
        dispatch(changeLoading(false));
      })
      .catch(() => {
        console.log("获取 album 数据失败！");
      });
  };
};
