const initialState = {
  positions: [],
  loading: false,
  error: null,
  players: [],
  username: {},
  clickedPositionId: '',
  playerPage: '',
  player: '',
  viewYear: '',
  showPopUp: false,
  watchlists: { },
  formInput: '',
  showForm: false,
  showWatchlist: false,
  showAvatarChange: false,
  showUserCard: false,
  fileUpload: '',
  savedUrl: '',
  showProfileSettings: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_USER':
      return {
        ...state,
        user: payload
      }
    case 'CLEAR_USER':
      return {
        ...initialState
      };
    case 'SET_POSITIONS':
      return {
        ...state,
        positions: payload
      }
    case 'FETCH_PLAYERS':
      return {
        ...state,
        players: payload
      }
    case 'HANDLE_CLICK':
      return {
        ...state,
        viewYear: 4,
        clickedPositionId: payload
      }
    case 'HANDLE_PLAYER_CLICK':
      return {
        ...state,
        playerPage: payload
      }
    case 'FETCH_PLAYER_PROF':
      console.log(payload)
      return {
        ...state,
        player: payload
      }
    case 'CHANGE_YEAR':
      return {
        ...state,
        viewYear: payload
      }
    case 'SHOW_POP_UP':
      console.log(payload)
      return {
        ...state,
        showPopUp: payload
      }
    case 'FETCH_WATCHLISTS':
      console.log(payload)
      return {
        ...state,
        watchlists: payload
      }
    case 'CLOSE_POP_UP':
      return {
        ...state,
        showPopUp: false
      }
    case 'CREATE_WATCHLIST':
      return {
        ...state,
        user: {
          ...state.user,
          watchlists: [...state.watchlists, payload]
        },
        watchlists: [...state.watchlists, payload]
      }
    case 'OPEN_FORM':
      return {
        ...state,
        showForm: true
      }
    case 'SHOW_WATCHLIST':
      return {
        ...state,
        showWatchlist: true,
        showAvatarChange: false,
        showUserCard: false,
        showProfileSettings: false
      }
    case 'HANDLE_COMMENT':
      return {
        ...state,
        player: {
          ...state.player,
          comments: [...state.player.comments, payload]
        }
      }
    case 'ADD_WATCHLIST_PLAYER':
      // debugger
      const newWatchlists = [...state.watchlists]
      const correctWatchlist = newWatchlists.find(watchlist => (watchlist.id === payload.watchlistId))
      correctWatchlist.watchlist_players = [...correctWatchlist.watchlist_players, payload.playerObj]
      return {
        ...state,
        watchlists: newWatchlists
      }
    case 'SHOW_AVATAR_CHANGE':
      return {
        ...state,
      showWatchlist: false,
      showAvatarChange: true,
      showUserCard: false,
      renderProfileSettings: false
      }
    case 'RENDER_PROFILE_SETTINGS':
      return {
        ...state,
        showWatchlist: false,
        showAvatarChange: false,
        showUserCard:false,
        showProfileSettings: true
      }
    default:
      return state;
  }
};
