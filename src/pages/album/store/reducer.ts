import { ActionType } from "@/store/reducer";
import { fromJS } from "immutable";
import { AlbumData } from "../interface";
import * as actionTypes from "./constants";

interface DefaultState {
  albumData: AlbumData | unknown;
  loading: boolean;
}
const defaultState = fromJS<DefaultState>({
  albumData: {},
  loading: false,
});

export default (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case actionTypes.CHANGE_ALBUM_DATA:
      return state.set("albumData", action.data);
    case actionTypes.CHANGE_LOADING:
      return state.set("loading", action.data);
    default:
      return state;
  }
};
