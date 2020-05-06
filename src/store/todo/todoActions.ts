import {
  ADD_TODO,
  CHANGE_STATUS,
  DELETE_TODO,
  SHOW_ALL_ITEMS,
  SHOW_COMPLETED_ITEMS,
  SHOW_ACTIVE_ITEMS
} from './todoConstants';

let id = 0;

interface addTodoAction {
  type: typeof ADD_TODO;
  id: number;
  text: string;
  done: boolean;
}

export const addTodo = (text: string): addTodoAction => ({
  type: ADD_TODO,
  id: ++id,
  text,
  done: false
});

interface changeStatus {
  type: typeof CHANGE_STATUS;
  id: number;
}

export const changeStatus = (id: number): changeStatus => ({
  type: CHANGE_STATUS,
  id
});

interface deleteTodoAction {
  type: typeof DELETE_TODO;
  id: number;
}

export const deleteTodo = (id: number): deleteTodoAction => ({
  type: DELETE_TODO,
  id
});
interface showAllItems {
  type: typeof SHOW_ALL_ITEMS;
}

export const showAllItems = (): showAllItems => {
  return {
    type: SHOW_ALL_ITEMS
  };
};

interface showCompletedItems {
  type: typeof SHOW_COMPLETED_ITEMS;
}

export const showCompletedItems = (): showCompletedItems => {
  return {
    type: SHOW_COMPLETED_ITEMS
  };
};

interface showActiveItems {
  type: typeof SHOW_ACTIVE_ITEMS;
}

export const showActiveItems = (): showActiveItems => {
  return {
    type: SHOW_ACTIVE_ITEMS
  };
};

export type ActionTypes =
  | addTodoAction
  | changeStatus
  | deleteTodoAction
  | showCompletedItems
  | showAllItems
  | showActiveItems;

