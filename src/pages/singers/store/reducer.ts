import { ActionType } from "@/store/reducer";
import { fromJS } from "immutable";
import * as actionTypes from "./constants";

interface SingersState {
  singerList: any;
  loading: boolean;
  pullUpLoading: boolean;
  pullDownLoading: boolean;
  count: number;
}

const defaultState = fromJS<SingersState>({
  singerList: [],
  loading: true,
  pullUpLoading: false,
  pullDownLoading: false,
  count: 0,
});

export default (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set("singerList", action.data);
    case actionTypes.CHANGE_COUNT:
      return state.set("count", action.data);
    case actionTypes.CHANGE_LOADING:
      return state.set("loading", action.data);
    case actionTypes.CHANGE_PULL_UP_LOADING:
      return state.set("pullUpLoading", action.data);
    case actionTypes.CHANGE_SINGER_PULL_DOWN_LOADING:
      return state.set("pullDownLoading", action.data);
    default:
      return state;
  }
};
