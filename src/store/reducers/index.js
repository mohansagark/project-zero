import { combineReducers } from "redux";
import todo from "./todoReducer";
import expense from "./expenseReducer";
import passwordGenerator from "./passwordGeneratorReducer";

const appReducer = combineReducers({ todo, expense, passwordGenerator });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
