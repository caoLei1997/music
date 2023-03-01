import * as actionTypes from "./constants";
import { fromJS } from "immutable";
import { requestBanner, requestRecommendList } from "@/api/request";
import { Dispatch } from "redux";
import { BannerListItem, RecommendListItem } from "./../interface";

export const changeBanner = (data: BannerListItem[]) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data),
});

export const changeRecommendList = (data: RecommendListItem[]) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data),
});

export const changeLoading = (data: boolean) => ({
  type: actionTypes.CHANGE_LOADING,
  data: fromJS(data),
});

export const getBanner = (): any => {
  return (dispatch: Dispatch) => {
    requestBanner()
      .then((data) => {
        dispatch(changeBanner(data.banners));
        dispatch(changeLoading(false));
      })
      .catch(() => {
        console.log("轮播图数据传输错误");
      });
  };
};

export const getRecommendList = (): any => {
  return (dispatch: Dispatch) => {
    requestRecommendList()
      .then((data) => dispatch(changeRecommendList(data.result)))
      .catch(() => {
        console.log("歌单数据传输错误");
      });
  };
};
