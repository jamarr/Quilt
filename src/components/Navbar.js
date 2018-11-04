import React from 'react';
import styled from 'styled-components';
import netlifyIdentity from 'netlify-identity-widget';
import Login from '../login';

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

const UsersNotConnected = (
  <div className="navLink">
    <a
      onClick={() => {
        netlifyIdentity.open();
      }}>
      Sign In
    </a>
  </div>
);

const UsersConnected = (
  <div className="navLink">
    <a>Saved News</a>
    <a>Sign Out</a>
  </div>
);

export default class NavBar extends React.Component {
  // state = {
  //   isConnected: true
  // };

  render() {
    return (
      <Navbar>
        <h1 children="QUILT" />
        <Login />
        {/* {this.state.isConnected ? UsersConnected : UsersNotConnected} */}
        {/* {this.state.isConnected ? <Login /> : UsersNotConnected} */}
      </Navbar>
    );
  }
}
