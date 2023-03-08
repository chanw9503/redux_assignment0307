const ADD_LIST = 'todoList/ADD_LIST';
const DELETE_LIST = 'todoList/DELETE_LIST';
const DONE_LIST = 'todoList/DONE_LIST';
const UPDATE_LIST = 'todoList/UPDATE_LIST';

const initialState = [
  {
    id: 0,
    title: 'title 입니다.',
    body: 'body 입니다.',
    isDone: false,
    isEdit: false,
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

export const UpdateList = (id, title, body) => {
  return {
    type: UPDATE_LIST,
    id,
    title,
    body,
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

    case UPDATE_LIST:
      const newEditList = prevState.map((item) => {
        const newTodo = { ...item };
        if (item.id === action.id) {
          if (item.isEdit === true) {
            console.log('title', action.title);
            newTodo.title = action.title;
            newTodo.body = action.body;
          }
          newTodo.isEdit = !newTodo.isEdit;
          console.log(newTodo);
          return newTodo;
        } else {
          return item;
        }
      });

      return newEditList;

    default:
      return prevState;
  }
};

export default todoReducer;
