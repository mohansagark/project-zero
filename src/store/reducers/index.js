import { combineReducers } from "redux";
import todo from "./todoReducer";
import expense from "./expenseReducer";

const appReducer = combineReducers({ todo, expense });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
