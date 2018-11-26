import React from 'react';
import styled from 'styled-components';
import BtnLogin from '../components/UI/BtnLogin';
import Login from '../login';

const Navbar = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  height: 100px;

  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    background: -webkit-linear-gradient(30deg, #4600ff, #ff0000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavBar = () => (
  <Navbar>
    <h1 children="QUILT" />
    <BtnLogin>
      <Login />
    </BtnLogin>
  </Navbar>
);

export default NavBar;
