import { SET_TODO_LIST, GET_TODO_LIST } from "../actions/types";

const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO_LIST:
      return {
        ...state,
        list: action.payload,
      };

    case GET_TODO_LIST:
      return state.list;

    default:
      return state;
  }
};

export default todoReducer;
