import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.color || "#c8498b"};
  padding: 10px;
  border-radius: 3px;
  border: none;
  color: ${props => props.theme.colors.text};
  font-weight: 600;
  :hover {
    opacity: 0.8;
  }

  a {
    color: ${props => props.theme.colors.text};
  }
`;

export default ({ children }) => <Button>{children}</Button>;
