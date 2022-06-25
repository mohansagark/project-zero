import { combineReducers } from "redux";
import login from "./loginReducer";
import todo from "./todoReducer";
import expense from "./expenseReducer";
import passwordGenerator from "./passwordGeneratorReducer";

const appReducer = combineReducers({ login, todo, expense, passwordGenerator });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
