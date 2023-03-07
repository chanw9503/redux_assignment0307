const ADD_LIST = 'ADD_LIST';
const DELETE_LIST = 'DELETE_LIST';
const DONE_LIST = 'DONE_LIST';

const initialState = [
  {
    id: 0,
    title: 'title 입니다.',
    body: 'body 입니다.',
    isDone: false,
  },
];

export const addList = (title, body) => {
  return {
    type: ADD_LIST,
    title,
    body,
  };
};

export const deleteList = (id) => {
  return {
    type: DELETE_LIST,
    id,
  };
};

export const isDoneList = (id) => {
  return {
    type: DONE_LIST,
    id,
  };
};

const todoReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      const newCard = {
        id: Date.now(),
        title: action.title,
        body: action.body,
        isDone: false,
      };

      return [...prevState, newCard];
    case DELETE_LIST:
      const newList = prevState.filter((item) => item.id !== action.id);
      return newList;

    case DONE_LIST:
      const newTodoList = prevState.map((item) => {
        const newTodo = { ...item };
        if (item.id === action.id) {
          newTodo.isDone = !newTodo.isDone;
          return newTodo;
        } else {
          return item;
        }
      });

      return newTodoList;

    default:
      return prevState;
  }
};

export default todoReducer;
