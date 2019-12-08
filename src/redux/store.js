import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from './redux/rootReducer';
import playerReducer from './redux/playerReducer'

const store = createStore(
  rootReducer,
  playerReducer,
  applyMiddleware(thunk)
);

export default store;
