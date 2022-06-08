import { combineReducers } from "redux";
import todo from "./todoReducer";

const appReducer = combineReducers({ todo });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
