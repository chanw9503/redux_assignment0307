import React from 'react';
import styled from 'styled-components';
import TodoButton from './TodoButton';
import { useDispatch } from 'react-redux';
import { deleteList, isDoneList } from '../redux/modules/todoList';
import { Link, useParams } from 'react-router-dom';

const TodoCreateBlock = styled.div`
  background-color: white;
  border: 3px solid teal;
  float: left;
  display: flex;

  width: 245px;
  height: 245px;
  padding: 20px;

  border-radius: 15px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
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

function TodoCreate({ item }) {
  const dispatch = useDispatch();

  const onDeleteClick = () => {
    dispatch(deleteList(item.id));
  };

  const onDoneListClick = () => {
    dispatch(isDoneList(item.id));
  };

  return (
    <TodoCreateBlock>
      <Link to={`/detail/${item?.id}`}>상세보기</Link>
      <Title>{item?.title}</Title>
      <BodyContent>{item?.body}</BodyContent>
      <ButtonBox>
        <TodoButton
          onClick={onDeleteClick}
          background="white"
          color="black"
          border="3px solid red"
        >
          삭제하기
        </TodoButton>
        <TodoButton
          onClick={onDoneListClick}
          background="white"
          color="black"
          border="3px solid teal"
        >
          {item?.isDone ? '취소' : '완료'}
        </TodoButton>
      </ButtonBox>
    </TodoCreateBlock>
  );
}

export default TodoCreate;
