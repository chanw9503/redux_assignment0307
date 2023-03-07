import React, { useState } from 'react';
import styled from 'styled-components';
import TodoInput from './TodoInput';
import TodoButton from './TodoButton';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../redux/modules/todoList';

const TodoHeaderBlock = styled.form`
  background-color: #dfdfdf;
  height: 90px;
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 1200px;
  min-width: 800px;
  justify-content: space-between;
  border-radius: 15px;
`;

function TodoHeader() {
  const [content, setContent] = useState({ title: '', body: '' });
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state);
  const onChnageContent = (key, item) => {
    const newContent = {};
    if (key === 0) {
      newContent.title = item;
      newContent.body = content.body;
      setContent(newContent);
    } else {
      newContent.title = content.title;
      newContent.body = item;
      setContent(newContent);
    }
  };

  const onSubmitList = (event) => {
    event.preventDefault();
    dispatch(addList(content.title, content.body));
  };

  return (
    <TodoHeaderBlock onSubmit={(event) => onSubmitList(event)}>
      <TodoInput onChange={onChnageContent}></TodoInput>
      <TodoButton>추가</TodoButton>
    </TodoHeaderBlock>
  );
}

export default TodoHeader;
