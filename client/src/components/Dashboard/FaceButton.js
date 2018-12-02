import React from "react";
import styled from "styled-components";
import Payments from "../../layout/Payments";
import Button from "../UI/Button";
import Facebook from "../Facebook";


const LOGIN = <a href='{Facebook}' >Login</a>;
const LOGOUT = <a href=' {responseFacebook}'>Logout</a>;

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

const FaceButton = props => {
  const { auth } = props;

  if (!auth) return <Button children={LOGIN} />;

  return (
    <FacebookLogin
            appId="1088597931155576"
            autoLoad
            callback={responseFacebook}
            render={renderProps => (
              <button onClick={renderProps.onClick}>This is my custom FB button</button>
            )}
          />
  );
};

export default FaceButton;
