import {
  FETCH_PLAYER_BEGIN,
  FETCH_PLAYER_SUCCES,
  FETCH_PLAYER_FAILURE
} from './playerActions';

const initialState = {
  players: [],
  loading: false,
  error: null,
}

export default function playerReducer(state = initialState, {type, payload}) {
  switch(type) {
    case FETCH_PLAYER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PLAYER_SUCCES:
        return {
          ...state,
          loading: false,
          players: payload.players
        }
    case FETCH_PLAYER_FAILURE:
        return {
          ...state,
          loading: false,
          items: []
        }
      default:
        return state;
  }
}
