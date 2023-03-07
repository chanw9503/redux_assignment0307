import React from 'react';
import styled from 'styled-components';
import TodoInput from './TodoInput';
import TodoButton from './TodoButton';

const TodoHeaderBlock = styled.form`
  background-color: #dfdfdf;
  height: 90px;
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 1200px;
  min-width: 800px;
  width: 95vw;
  justify-content: space-between;
  border-radius: 15px;
`;

function TodoHeader() {
  return (
    <TodoHeaderBlock>
      <TodoInput></TodoInput>
      <TodoButton>추가</TodoButton>
    </TodoHeaderBlock>
  );
}

export default TodoHeader;
