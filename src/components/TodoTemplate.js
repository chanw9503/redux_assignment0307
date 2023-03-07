import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-width: 800px;
  padding: 20px;
  margin: 0 auto;
  gap: 20px;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
