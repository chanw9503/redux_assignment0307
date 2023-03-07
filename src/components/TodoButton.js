import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  /* 공통사항 */
  width: 150px;
  height: 50px;
  border-radius: 15px;
  font-size: 18px;

  /* 가변 사항 */
  background-color: ${(props) => props.background || 'teal'};
  border: ${(props) => props.border || 'none'};
  color: ${(props) => props.color || 'white'};
`;

function TodoButton({ background, border, color, children }) {
  return (
    <Button background={background} border={border} color={color}>
      {children}
    </Button>
  );
}

export default TodoButton;
