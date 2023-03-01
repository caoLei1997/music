import { combineReducers } from "redux-immutable";
import { reducer as recommend } from "@/pages/recommend/store";
import {reducer as singers} from '@/pages/singers/store'

export interface ActionType<T = string, D = any> {
  type: T;
  data: D;
}
export default combineReducers({
  recommend,
  singers
});
