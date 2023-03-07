import React from 'react';
import TodoTemplate from '../components/TodoTemplate';
import { createGlobalStyle } from 'styled-components';
import Navigation from '../components/Navigation';
import TodoHeader from '../components/TodoHeader';
import TodoBody from '../components/TodoBody';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function MainPage() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <Navigation />
        <TodoHeader />
        <TodoBody />
      </TodoTemplate>
    </>
  );
}

export default MainPage;
