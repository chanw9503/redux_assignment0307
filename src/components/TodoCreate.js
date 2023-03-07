import React from 'react';
import styled from 'styled-components';
import TodoButton from './TodoButton';

const TodoCreateBlock = styled.div`
  background-color: white;
  border: 3px solid teal;
  float: left;
  display: flex;

  width: 280px;
  height: 280px;
  padding: 20px;

  border-radius: 15px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

const BodyContent = styled.div`
  font-size: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

function TodoCreate() {
  return (
    <TodoCreateBlock>
      <Title>제목ㅌㄴ</Title>
      <BodyContent>sdasdasdasdasd</BodyContent>
      <ButtonBox>
        <TodoButton background="white" color="black" border="3px solid red">
          삭제하기
        </TodoButton>
        <TodoButton background="white" color="black" border="3px solid teal">
          완료
        </TodoButton>
      </ButtonBox>
    </TodoCreateBlock>
  );
}

export default TodoCreate;
