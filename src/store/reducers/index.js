import { combineReducers } from "redux";
import todo from "./todoReducer";
import passwordGenerator from "./passwordGeneratorReducer";

const appReducer = combineReducers({ todo, passwordGenerator });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
