import React from 'react';
import TodoListItem from '../ToDoListItem/ToDoListItem';
import { TodoItem } from '../types/types';
import { TodoListWrapper, TodosList } from './StyledToDoList';

interface Props {
  tasks: Array<TodoItem>;
  deleteTodo: (id: number) => void;
  changeStatus: (id: number) => void;
  showedItems: string;
}

const TodoList: React.FC<Props> = ({tasks, showedItems, deleteTodo, changeStatus}) => {
  const listItems = tasks.filter(el => {
    if (showedItems === 'all') {
      return true;
    } else if (showedItems === 'completed' && el.done) {
      return true;
    } else if (showedItems === 'active' && !el.done) {
      return true;
    }

    return false;
  });

  return (
    <TodoListWrapper>
      {tasks.length ? (
        <h1 className='list-heading'>{showedItems} tasks</h1>
      ) : (
        ''
      )}
      <TodosList>
        {listItems.map(item => {
          return (
            <TodoListItem
              text={item.text}
              done={item.done}
              id={item.id}
              key={item.id}
              deleteTodo={deleteTodo}
              changeStatus={changeStatus}
              data-testid='todo-item'
            />
          );
        })}
      </TodosList>
    </TodoListWrapper>
  );
};

export default TodoList;