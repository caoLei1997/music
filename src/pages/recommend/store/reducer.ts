import { fromJS } from "immutable";
import * as actionTypes from "./constants";

export interface RecommendState {
  bannerList: any;
  recommendList: any;
}

const defaultState = fromJS<RecommendState>({
  bannerList: [],
  recommendList: [],
});

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set("bannerList", action.data);
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set("recommendList", action.data);
    default:
      return state;
  }
};
