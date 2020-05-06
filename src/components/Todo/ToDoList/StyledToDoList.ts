import styled from 'styled-components';

export const TodosList = styled.ul`
  margin: 0;
  padding: 0;
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    padding-left: 40px;
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #24c3f9;
    border-radius: 10px;
  }
`;

export const TodoListWrapper = styled.div`
  .list-heading {
    text-align: center;
  }
`;