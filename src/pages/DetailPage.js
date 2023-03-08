import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TodoButton from '../components/TodoButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const DetailBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  border: 1px solid black;
  width: 500px;
  height: 500px;

  gap: 20px;
`;

function DetailPage() {
  const params = useParams();
  const todos = useSelector((state) => state.todoReducer);
  const navigate = useNavigate();

  const onClickNavMain = () => {
    navigate('/');
  };

  const foundData = todos.find((item) => {
    return item.id === Number(params.id);
  });
  console.log(foundData);

  return (
    <Container>
      <DetailBlock>
        <div>제목 : {foundData.title}</div>
        <div>내용 : {foundData.body}</div>
        <div>완료여부 : {foundData.isDone ? 'true' : 'false'}</div>
        <div>id : {foundData.id}</div>
        <TodoButton onClick={onClickNavMain}>메인으로</TodoButton>
      </DetailBlock>
    </Container>
  );
}

export default DetailPage;
