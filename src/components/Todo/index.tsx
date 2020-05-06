import React from 'react';
import Todo from './Todo/Todo';
import { connect } from 'react-redux';
import { 
  addTodo, 
  deleteTodo, 
  changeStatus, 
  showAllItems, 
  showCompletedItems, 
  showActiveItems 
} from '../../store/todo/todoActions';
import { TodoItem, State } from './types/types';
// import { Dispatch } from '../../store/store';

interface ConnectedProps {
  tasks: TodoItem[],
  showedItems: string
}

export type ComponentProps = ConnectedProps & ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: { todoReducer: State }): ConnectedProps => {
  const {tasks, showedItems} = state.todoReducer;
  return ({
    tasks,
    showedItems
  });
}

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (text: string): void => {
    return dispatch(addTodo(text))
  },
  deleteTodo: (id: number): void => {
    return dispatch(deleteTodo(id))
  },
  changeStatus: (id: number): void => {
    dispatch(changeStatus(id))
  },
  showAllItems: (): void => {
    dispatch(showAllItems())
  },
  showCompletedItems: (): void => {
    dispatch(showCompletedItems())
  },
  showActiveItems: (): void => {
    dispatch(showActiveItems())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
