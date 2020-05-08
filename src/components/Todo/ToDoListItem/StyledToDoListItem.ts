import styled from 'styled-components';

export const TodoItem = styled.li`
  background-color: #fefefe;
  border-radius: 40px;
  margin: 20px 15px;
  display: flex;
  align-items: center;
  button {
    margin: 10px;
  }
  span {
    flex-grow: 3;
  }

  .task-text {
    width: 100px;
    overflow-y: auto;
    overflow-x: hidden;

    margin-left: 20px;

    ::-webkit-scrollbar {
      height: 10px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 3px grey;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: #24c3f9;
      border-radius: 10px;
    }
  }

  .completed {
    text-decoration: line-through;
    opacity: 0.2;
  }
`;

export const ButtonsWrapper = styled.div`
  align-self: flex-end;
  margin-left: 60px;
  flex-grow: 1;
`;
