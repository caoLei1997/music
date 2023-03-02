import * as actionTypes from "./constants";
import { ActionType } from "@/store/reducer";
import { fromJS } from "immutable";

interface RankState {
  rankList: any[];
  rankLoading: boolean;
}

const defaultState = fromJS<RankState>({
  rankList: [],
  rankLoading: true,
});

export default (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case actionTypes.CHANGE_RANK_LIST:
      return state.set("rankList", action.data);
    case actionTypes.CHANGE_RANK_LOADING:
      return state.set("rankLoading", action.data);
    default:
      return state;
  }
};
