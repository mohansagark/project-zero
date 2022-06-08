import { SET_TODO_LIST, GET_TODO_LIST } from "./types";

export const getTodoList = () => {
  return {
    type: GET_TODO_LIST,
  };
};

export const setTodoList = () => {
  return {
    type: SET_TODO_LIST,
  };
};
