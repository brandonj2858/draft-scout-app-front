
function getPlayers() {
  return fetch("http://localhost:3000/players")
    .then(handleErrors)
    .then(res => res.json())
    .then(resObj => console.log(resObj))
}

export function fetchPlayers() {
  return ((dispatch) => {
    dispatch(fetchPlayerBegin);
    fetch("http://localhost:3000/players")
      .then((res) => res.json())
      .then(players => dispatch(fetchPlayerSucces))
  })
}

export function fetchError() {
  return ((dispatch) => {
    (dispatch(fetchPlayeFailure))
  })
}



export const FETCH_PLAYER_BEGIN = 'FETCH_PLAYER_BEGIN';
export const FETCH_PLAYER_SUCCES = 'FETCH_PLAYER_SUCCESS';
export const FETCH_PLAYER_FAILURE = 'FETCH_PLAYER_FAILURE';


export const fetchPlayerBegin = () => ({
  type: FETCH_PLAYER_BEGIN
});

export const fetchPlayerSucces = (player) => ({
  type: FETCH_PLAYER_SUCCES,
  payload: {player}
});

export const fetchPlayeFailure = () => ({
  type: FETCH_PLAYER_FAILURE,
  payload: error
});
