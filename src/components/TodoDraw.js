import React from 'react';
import TodoCreate from './TodoCreate';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TodoDrawblock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 1200px;
  min-width: 800px;
`;

function TodoDraw({ isWorking }) {
  const Todos = useSelector((state) => state.todoReducer);
  return (
    <TodoDrawblock>
      {Todos.map((item) => {
        if (isWorking == item.isDone) {
          return <TodoCreate key={item.id} item={item} />;
        }
      })}
    </TodoDrawblock>
  );
}

export default TodoDraw;
