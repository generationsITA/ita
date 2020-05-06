import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { TodoItem, ButtonsWrapper } from './StyledToDoListItem';

interface Props {
  text: string;
  id: number;
  deleteTodo: (id: number) => void;
  changeStatus: (id: number) => void;
  done: boolean;
  key: number;
}

const TodoListItem: React.FC<Props> = ({
  text,
  id,
  deleteTodo,
  changeStatus,
  done
}) => {
  const onDoneClick = (): void => {
    if (changeStatus) {
      changeStatus(id);
    }
  };

  let changeStatusText = 'Done';
  let classNames = 'task-text';

  if (done) {
    classNames += ' completed';
    changeStatusText = 'Set Active';
  }

  return (
    <TodoItem>
      <span data-testid='task-text' className={classNames}>
        {text}
      </span>
      <ButtonsWrapper>
        <Button
          type='button'
          onClick={onDoneClick}
          className='doneButton'
          variant='contained'
          color='primary'
          data-testid='status-button'
        >
          {changeStatusText}
        </Button>

        <Button
          onClick={() => deleteTodo(id)}
          variant='contained'
          color='secondary'
          startIcon={<DeleteIcon />}
          id='deleteBtn'
          data-testid='delete-button'
        >
          Delete
        </Button>
      </ButtonsWrapper>
    </TodoItem>
  );
};

export default TodoListItem;