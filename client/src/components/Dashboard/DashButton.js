import React from "react";
import styled from "styled-components";
import Payments from "../../layout/Payments";
import Button from "../UI/Button";

const LOGIN = <a href='/auth/google'>Login</a>;
const LOGOUT = <a href='/api/logout'>Logout</a>;

const Ul = styled.ul`
  display: flex;
  li {
    align-self: center;
    margin-left: 5px;
  }

  span {
    color: ${props => props.theme.colors.secondary};
    font-weight: 600;
  }
`;

const DashButton = props => {
  const { auth } = props;

  if (!auth) return <Button children={LOGIN} />;

  return (
    <Ul>
      <li>
        <Payments />
      </li>
      <li>
        <Button children={LOGOUT} />
      </li>
      <li>
        <span>Credits: {auth.credits}</span>
      </li>
    </Ul>
  );
};

export default DashButton;
