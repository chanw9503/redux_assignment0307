import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  h3 {
  }
`;

function TodoTitle({ children }) {
  return (
    <Title>
      <h2>{children}</h2>
    </Title>
  );
}

export default TodoTitle;
