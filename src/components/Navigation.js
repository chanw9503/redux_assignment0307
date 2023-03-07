import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;

  font-size: 25px;
`;

function Navigation() {
  return (
    <Nav>
      <div>My todolist</div>
      <div>Welcome</div>
    </Nav>
  );
}

export default Navigation;
