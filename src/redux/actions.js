const BASE_URL = 'http://localhost:3000';
const USERS_URL = BASE_URL + '/users';
const PERSIST_URL = BASE_URL + '/persist';
const LOGIN_URL = BASE_URL + '/login';
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;

// Redux Actions



const renderWatchlist = boolean => ({
  type: 'SHOW_WATCHLIST',
  payload: boolean
})

const newWatchlist = watchlistObj => ({
  type: 'CREATE_WATCHLIST',
  payload: watchlistObj
})

const openForm = boolean => ({
  type: 'OPEN_FORM',
  payload: boolean
})


const closePopUp = boolean => ({
  type: 'CLOSE_POP_UP',
  payload: boolean
})

const changeYear = yearObj => (console.log(yearObj),{
  type: 'CHANGE_YEAR',
  payload: yearObj
})

const setUserAction = userObj => ({
  type: 'SET_USER',
  payload: userObj
});

const clearUserAction = () => ({
  type: 'CLEAR_USER'
});

const setPositionsAction = posObj => ({
  type: 'SET_POSITIONS',
  payload: posObj
});

const fetchPlayerAction = playerObj => ({
  type: 'FETCH_PLAYERS',
  payload: playerObj
})

const handleClickAction = posId => ({
  type: 'HANDLE_CLICK',
  payload: posId
})

const handlePlayerClickAction = playerId => ({
  type: 'HANDLE_PLAYER_CLICK',
  payload: playerId
})

const fetchPlayerProfAction = playerObj => ({
  type: 'FETCH_PLAYER_PROF',
  payload: playerObj
})

const renderPopUpAction = boolean => ({
  type: 'SHOW_POP_UP',
  payload: boolean
})

const fetchWatchlistsAction = watchlistObj => (console.log(watchlistObj), {
  type: 'FETCH_WATCHLISTS',
  payload: watchlistObj
})

/*
const renderPopUp = boolean => dispatch => {
  dispatch(renderPopUpAction)
}
*/



//Position Click
// const handleClick = (evt, posId) => dispatch => {
//   console.log(evt.target)
// }

// Fetch

const addComment = commentObj => ({
  type: 'HANDLE_COMMENT',
  payload: commentObj
})

const postComment = (userId, playerId, comment) => dispatch => {



  fetch('http://localhost:3000/comments', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      user_id: userId,
      player_id: playerId,
      content: comment.target["comment-input"].value
    })
  })
  .then(res => res.json())
  .then(data => {
    dispatch(addComment(data))
  })
}

const submitWatchlist = (userObj, userInput) => dispatch => {
  fetch('http://localhost:3000/watchlists', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      user_id: userObj.id,
      name: userInput
    })
  })
  .then(res => res.json())
  .then(data => {
  dispatch(newWatchlist(data))})
}

const addWatchlistPlayer = (playerObj, watchlistId) => ({
  type: 'ADD_WATCHLIST_PLAYER',
  payload: {playerObj, watchlistId}

})

const postPlayer = (watchlistObj, playerObj) => (dispatch, getState) => {
  fetch('http://localhost:3000/watchlist_players', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
       watchlist_id: watchlistObj.id,
       player_id: playerObj.id
    })
  })
  .then(res => res.json())
  .then(data => {
    dispatch(addWatchlistPlayer(data, watchlistObj.id))
  })
}

const fetchWatchlists = watchlistObj => dispatch => {
  fetch('http://localhost:3000/watchlists')
  .then(res => res.json())
  .then(data => {
    dispatch(fetchWatchlistsAction(data))
  })
}

const fetchPlayerProf = playerId => dispatch => {
  console.log(playerId)
  fetch(`http://localhost:3000/players/${playerId}`)
    .then(res => res.json())
    .then(data => {
      console.log("player", data)
      dispatch(fetchPlayerProfAction(data))
    })
}


const fetchPlayers = playerObj => dispatch => {
  fetch(`http://localhost:3000/players`)
    .then(res => res.json())
    .then(data => {
      dispatch(fetchPlayerAction(data))
    })
}


const setPositions = posObj => dispatch => {
  //console.log('fetching')
  fetch('http://localhost:3000/positions')
  .then(res => res.json())

  .then(data => {
    dispatch(setPositionsAction(data))
  })
}

const newUserToDB = userObj => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  };
  fetch(USERS_URL, config)
    .then(r => r.json())
    .then(data => {
      dispatch(setUserAction(data.user));
      localStorage.setItem('token', data.token);
    });
};

const deleteUserFromDB = userId => dispatch => {
  const config = {
    method: 'DELETE'
  };
  fetch(SPECIFIC_USER_URL(userId), config).then(r => {
    dispatch(clearUserAction());
    localStorage.clear();
  });
};

const loginUserToDB = userCredentials => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userCredentials)
  };
  fetch(LOGIN_URL, config)
    .then(r => r.json())
    .then(data => {
      dispatch(setUserAction(data.user));
      console.log(data)
      localStorage.setItem('token', data.token);
    });
};

const persistUser = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `bearer ` + localStorage.token
    }
  };
  fetch(PERSIST_URL, config)
    .then(r => r.json())
    .then(userInstance => {
      dispatch(setUserAction(userInstance));
    });
};

const logoutUser = () => dispatch => {
  dispatch(clearUserAction());
  localStorage.clear();
};

export default {
  newUserToDB,
  deleteUserFromDB,
  loginUserToDB,
  persistUser,
  logoutUser,
  setPositions,
  fetchPlayers,
  handleClickAction,
  handlePlayerClickAction,
  fetchPlayerProf,
  changeYear,
  renderPopUpAction,
  fetchWatchlists,
  closePopUp,
  postPlayer,
  submitWatchlist,
  openForm,
  renderWatchlist,
  postComment
};
