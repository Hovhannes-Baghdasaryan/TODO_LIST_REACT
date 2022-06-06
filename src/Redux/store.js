import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import todosReducer from "./Reducers/todosReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  todosList: todosReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;
