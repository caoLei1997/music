import { ActionType } from "@/store/reducer";
import { Dispatch } from "redux";
import { requestSingersList, requestHotSingersList } from "@/api/request";
import * as actionTypes from "./constants";
import { fromJS } from "immutable";
// 歌手列表
export const changeSingerList = (data: any): ActionType => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  data: fromJS(data),
});
// 分页
export const changeCount = (data: number) => ({
  type: actionTypes.CHANGE_COUNT,
  data,
});
// 进场loading
export const changeLoading = (data: boolean): ActionType => ({
  type: actionTypes.CHANGE_LOADING,
  data,
});
// 屏幕上拉加载loading
export const changePullUpLoading = (data: boolean): ActionType => ({
  type: actionTypes.CHANGE_PULL_UP_LOADING,
  data,
});
// 屏幕下拉刷新loading
export const changePullDownLoading = (data: boolean): ActionType => ({
  type: actionTypes.CHANGE_SINGER_PULL_DOWN_LOADING,
  data,
});

// 热门歌手
export const getHotSingerList = (): any => {
  return (dispatch: Dispatch) => {
    requestHotSingersList(0)
      .then(({ artists: data }) => {
        dispatch(changeSingerList(data));
        dispatch(changeLoading(false));
        dispatch(changePullDownLoading(false));
      })
      .catch(() => {
        console.log("热门歌手数据获取失败");
      });
  };
};
// 更多热门歌手
export const getMoreHotSingerList = (): any => {
  return (dispatch: Dispatch, getState: any) => {
    const count = getState().getIn(["singers", "count"]);
    const singerList = getState().getIn(["singers", "singerList"]).toJS();
    requestHotSingersList(count)
      .then(({ artists }) => {
        const data = [...singerList, ...artists];
        dispatch(changeSingerList(data));
        dispatch(changePullUpLoading(false));
      })
      .catch(() => {
        console.log("热门歌手数据获取失败");
      });
  };
};
// 歌手
export const getSingerList = (category: string, alpha: string): any => {
  return (dispatch: Dispatch, getState: any) => {
    requestSingersList({
      category,
      alpha,
      count: 0,
    })
      .then(({ artists: data }) => {
        dispatch(changeSingerList(data));
        dispatch(changeLoading(false));
        dispatch(changePullDownLoading(false));
      })
      .catch(() => {
        console.log("歌手数据获取失败");
      });
  };
};
// 更多歌手
export const getMoreSingerList = (category: string, alpha: string): any => {
  return (dispatch: Dispatch, getState: any) => {
    const count = getState().getIn(["singers", "count"]);
    const singerList = getState().getIn(["singers", "singerList"]).toJS();
    requestSingersList({
      category,
      alpha,
      count,
    })
      .then(({ artists }) => {
        const data = [...singerList, ...artists];
        dispatch(changeSingerList(data));
        dispatch(changePullUpLoading(false));
      })
      .catch(() => {
        console.log("歌手获取失败");
      });
  };
};
