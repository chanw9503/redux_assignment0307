import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import TodoButton from './TodoButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteList, isDoneList, UpdateList } from '../redux/modules/todoList';
import { Link, useParams } from 'react-router-dom';
import { Input } from './TodoInput';

const TodoCreateBlock = styled.div`
  background-color: white;
  border: 3px solid teal;
  float: left;
  display: flex;

  width: auto;
  height: 245px;
  padding: 20px;

  border-radius: 15px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
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

  const [content, setContent] = useState({ title: '', body: '' });
  const titleRef = useRef('');
  const bodyRef = useRef('');

  const onDeleteClick = () => {
    dispatch(deleteList(item.id));
  };

  const onDoneListClick = () => {
    dispatch(isDoneList(item.id));
  };

  const onUpdateListClick = () => {
    dispatch(
      UpdateList(
        item.id,
        content.title !== '' ? content.title : item.title,
        content.body !== '' ? content.body : item.body
      )
    );
  };

  useEffect(() => {
    if (content.title !== undefined && content.title.length >= 20) {
      bodyRef.current.focus();
    }
  }, [content.title]);

  const btnItems = [
    {
      onClick: onDeleteClick,
      background: 'white',
      color: 'black',
      border: '3px solid red',
      text: '삭제',
    },
    {
      onClick: onDoneListClick,
      background: 'white',
      color: 'black',
      border: '3px solid teal',
      text: item?.isDone ? '취소' : '완료',
    },
    {
      onClick: onUpdateListClick,
      background: 'white',
      color: 'black',
      border: '3px solid blue',
      text: item?.isEdit ? '저장' : '수정',
    },
  ];
  return (
    <TodoCreateBlock>
      <Link to={`/detail/${item?.id}`}>상세보기</Link>

      {item?.isEdit ? (
        <>
          <Input
            ref={titleRef}
            maxLength="20"
            onChange={(event) =>
              setContent((prev) => {
                return { ...prev, title: event.target.value };
              })
            }
            autoFocus
            placeholder={item.title}
          />
          <Input
            ref={bodyRef}
            maxLength="20"
            onChange={(event) =>
              setContent((prev) => {
                return { ...prev, body: event.target.value };
              })
            }
            placeholder={item.body}
          />
        </>
      ) : (
        <>
          <Title>{item?.title}</Title>
          <BodyContent>{item?.body}</BodyContent>
        </>
      )}

      <ButtonBox>
        {btnItems.map(({ onClick, background, color, border, text }) => {
          return (
            <TodoButton
              onClick={onClick}
              background={background}
              color={color}
              border={border}
            >
              {text}
            </TodoButton>
          );
        })}
      </ButtonBox>
    </TodoCreateBlock>
  );
}

export default TodoCreate;
