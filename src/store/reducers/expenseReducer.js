import {
  GET_EXPENSE_LIST,
  RESET_EXPENSE_LIST,
  SET_EXPENSE_LIST,
} from "../actions/types";

const initialState = {
  list: [],
};

const expense = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPENSE_LIST:
      let temp = [...state.list];
      temp.push(action.payload);
      return {
        ...state,
        list: temp,
      };

    case GET_EXPENSE_LIST:
      return state.list;

    case RESET_EXPENSE_LIST:
      return { ...state, list: [] };

    default:
     return state;
  }
};

export default expense;
