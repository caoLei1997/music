import { combineReducers } from "redux-immutable";
import { reducer as recommend } from "@/pages/recommend/store";
import { reducer as singers } from "@/pages/singers/store";
import { reducer as singersDetail } from "@/pages/singers-detail/store";
import { reducer as rank } from "@/pages/rank/store";
import { reducer as album } from "@/pages/album/store";
import { reducer as player } from "@/pages/player/store";

export interface ActionType<T = string, D = any> {
  type: T;
  data: D;
}

export default combineReducers({
  recommend,
  singers,
  singersDetail,
  rank,
  album,
  player,
});
