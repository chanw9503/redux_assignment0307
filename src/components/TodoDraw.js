import React from 'react';
import TodoCreate from './TodoCreate';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TodoDrawblock = styled.div``;

function TodoDraw() {
  const Todos = useSelector((state) => state.todoReducer);
  console.log(Todos);
  return (
    <TodoDrawblock>
      {Todos.map((item) => {
        return <TodoCreate key={item.id} />;
      })}
    </TodoDrawblock>
  );
}

export default TodoDraw;
