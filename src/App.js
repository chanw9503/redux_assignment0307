import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import { createGlobalStyle } from 'styled-components';
import Navigation from './components/Navigation';
import TodoHeader from './components/TodoHeader';
import TodoCreate from './components/TodoCreate';
import TodoBody from './components/TodoBody';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <TodoTemplate>
        <TodoHeader />
        <TodoBody />
      </TodoTemplate>
    </>
  );
}

export default App;
