import React from 'react';
import ToDoAddForm from '../ToDoAddForm/ToDoAddForm';
import TodoList from '../ToDoList/ToDoList';
import Filters from '../Filters/Filters';
import { TodoItem } from '../types/types';
import { StyledTodo } from './StyledTodo';

interface Props {
  tasks: TodoItem[];
  showedItems: string;
  deleteTodo: (id: number) => void;
  changeStatus: (id: number) => void;
  addTodo: (text: string) => void;
  showAllItems: () => void;
  showCompletedItems: () => void;
  showActiveItems: () => void;
}

const Todo: React.FC<Props> = ({
  tasks,
  addTodo,
  showAllItems,
  showCompletedItems,
  showActiveItems,
  deleteTodo,
  changeStatus,
  showedItems
}) => {
  return (
    <StyledTodo>
      <ToDoAddForm addTodo={addTodo} />
      {tasks.length ? (
        <Filters
          showAllItems={showAllItems}
          showCompletedItems={showCompletedItems}
          showActiveItems={showActiveItems}
        />
      ) : (
          ''
        )}
      <TodoList
        tasks={tasks}
        deleteTodo={deleteTodo}
        changeStatus={changeStatus}
        showedItems={showedItems}
      />
    </StyledTodo>
  );
};

export default Todo;