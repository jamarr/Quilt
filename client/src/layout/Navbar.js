import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import DashButton from "../components/Dashboard/DashButton";

const Nav = styled.nav`
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

  @media screen and (max-width: ${props => props.theme.display.tablet}) {
    grid-template-columns: 1fr;
  }
`;

class NavBar extends React.Component {
  render() {
    let { auth } = this.props;
    auth = {
      credits: 10
    };
    return (
      <Nav>
        <h1 children='QUILT' />
        <Link to={auth ? "/" : "/"} className='left brand-logo' />
        <DashButton auth={auth} />
      </Nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavBar);
