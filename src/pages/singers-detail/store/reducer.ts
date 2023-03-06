import { ActionType } from "@/store/reducer";
import { FromJS, fromJS } from "immutable";
import * as actionsType from "./constants";

interface DefaultState {
  artist: any;
  loading: boolean;
  songsArtist: any[];
}

const defaultState = fromJS<DefaultState>({
  artist: {},
  loading: false,
  songsArtist: [],
});

export default (
  state: FromJS<DefaultState> = defaultState,
  action: ActionType
) => {
  switch (action.type) {
    case actionsType.CHANGE_SINGERS_DETAIL_ARTIST:
      return state.set("artist", action.data);
    case actionsType.CHANGE_SINGERS_DETAIL_LOADING:
      return state.set("loading", action.data);
    case actionsType.CHANGE_SINGERS_DETAIL_SONGS_ARTIST:
      return state.set("songsArtist", action.data);
    default:
      return state;
  }
};
