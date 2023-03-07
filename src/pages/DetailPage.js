import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const params = useParams();
  const todos = useSelector((state) => state.todoReducer);

  const foundData = todos.find((item) => {
    return item.id === Number(params.id);
  });
  console.log(foundData);

  return (
    <>
      <div>test</div>
      <div>제목 : {foundData.title}</div>
      <div>내용 : {foundData.body}</div>
      <div>완료여부 : {foundData.isDone ? 'true' : 'false'}</div>
      <div>id : {foundData.id}</div>
    </>
  );
}

export default DetailPage;
