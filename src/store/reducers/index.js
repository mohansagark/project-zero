import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const appReducer = combineReducers({ todo: todoReducer });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
