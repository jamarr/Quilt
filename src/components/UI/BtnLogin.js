import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Btn = styled.button`
  background: #c8498b;
  padding: 10px;
  border-radius: 3px;
  border: none;
  color: ${theme.colors.text};
  font-weight: 600;
  :hover {
    opacity: 0.8;
  }
`;

export default ({ children }) => <Btn>{children}</Btn>;
