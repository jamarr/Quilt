import React from 'react';
import styled from 'styled-components';
import Login from '../Login';

const Navbar = styled.nav`
  display: flex;
  height: 100px;
  color: white;

  h1 {
    color: red;
    margin: 0px 0px 0px 50px;
    align-self: center;
    font-size: 3.5rem;
    font-weight: 600;
    background: -webkit-linear-gradient(30deg, #4600ff, #ff0000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  a {
    position: absolute;
    align-self: center;
    right: 0;
    margin-right: 50px;
    background: #c8498b;
    padding: 10px;
    border-radius: 3px;
    font-weight: 600;
    :hover {
      opacity: 0.8;
    }
  }

  .navLink {
    position: absolute;
    align-self: center;
    right: 50px;
  }
`;

const NavBar = () => (

  
  <Navbar>
    <h1 children="QUILT" />
    <Login model={this.props.model} onError={this.onError.bind(this)} onAuthChange={this.onAuthChange.bind(this)} />
  </Navbar>
);

export default NavBar;
