import { ActionType } from "@/store/reducer";
import { fromJS } from "immutable";
import * as actionTypes from "./constants";

export interface RecommendState {
  bannerList: any;
  recommendList: any;
  loading: boolean;
}

const defaultState = fromJS<RecommendState>({
  bannerList: [],
  recommendList: [],
  loading: true,
});


export default (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set("bannerList", action.data);
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set("recommendList", action.data);
    case actionTypes.CHANGE_LOADING:
      return state.set("loading", action.data);
    default:
      return state;
  }
};
