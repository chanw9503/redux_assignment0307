import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  max-width: 1200px;
  min-width: 800px;

  border: 1px solid black;
  border-radius: 15px;

  font-size: 25px;
`;

function Navigation() {
  const navigate = useNavigate();

  return (
    <Nav>
      <div
        onClick={() => {
          navigate('/');
        }}
      >
        My todolist
      </div>
      <div>Welcome</div>
    </Nav>
  );
}

export default Navigation;
