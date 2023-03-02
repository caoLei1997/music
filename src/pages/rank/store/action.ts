import { ActionType } from "@/store/reducer";
import { requestRankList } from "@/api/request";
import { Dispatch } from "redux";
import * as actionTypes from "./constants";
import { fromJS } from "immutable";

const changeRankList = (data: any[]): ActionType => ({
  type: actionTypes.CHANGE_RANK_LIST,
  data: fromJS(data),
});

const changeRankLoading = (data: boolean): ActionType => ({
  type: actionTypes.CHANGE_RANK_LOADING,
  data,
});

export const getRankList = (): any => {
  return (dispatch: Dispatch) => {
    requestRankList()
      .then(({ list = [] }: any) => {
        dispatch(changeRankList(list));
        dispatch(changeRankLoading(false));
      })
      .catch(() => {
        console.log("排行版数据传输错误");
      });
  };
};
