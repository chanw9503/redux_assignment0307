const ADD_LIST = 'ADD_LIST';
const DELETE_LIST = 'DELETE_LIST';

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

const todoReducer = (prevState = initialState, aciton) => {
  switch (aciton.type) {
    case ADD_LIST:
      const newCard = {
        id: Date.now,
        title: aciton.title,
        body: aciton.body,
        isDone: false,
      };

      return [...prevState, newCard];
    case DELETE_LIST:
      const newList = prevState.filter((item) => item.id !== aciton.id);
      return newList;

    default:
      return prevState;
  }
};

export default todoReducer;
