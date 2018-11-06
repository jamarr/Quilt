import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyle';
import theme from '../styles/theme';
import Layout from '../layout/Layout';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <>
        <Layout />
        <GlobalStyle />
      </>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
