import React from 'react';
import TodoCreate from './TodoCreate';
import styled from 'styled-components';
import TodoTitle from './TodoTitle';
import TodoDraw from './TodoDraw';

const TodoBodyBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

function TodoBody() {
  return (
    <TodoBodyBlock>
      <TodoTitle>Working...🔥</TodoTitle>
      <TodoDraw isWorking={false} />
      <TodoTitle>Done...🎉</TodoTitle>
      <TodoDraw isWorking={true} />
    </TodoBodyBlock>
  );
}

export default TodoBody;
