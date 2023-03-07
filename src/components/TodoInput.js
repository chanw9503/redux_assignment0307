import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-weight: bold;
  font-size: 23px;
`;

const Input = styled.input`
  width: 230px;
  height: 40px;

  font-size: 20px;

  border-radius: 10px;
  border: none;
`;

const TodoInputBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;
`;

function TodoInput({ onChange }) {
  return (
    <TodoInputBlock>
      <Label>제목 : </Label>
      <Input
        onChange={(event) => onChange(0, event.target.value)}
        type="text"
        required
      ></Input>
      <Label>내용 : </Label>
      <Input
        onChange={(event) => onChange(1, event.target.value)}
        type="text"
        required
      ></Input>
    </TodoInputBlock>
  );
}

export default TodoInput;
