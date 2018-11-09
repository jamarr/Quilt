import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyle';
import theme from '../styles/theme';
import Layout from '../layout/Layout';


const App = () => (
  <BrowserRouter>
  constructor(props) {
  this.state = {
        faunadb_token : null,
        onAuthChange(faunadb_token) {
  console.log("app.js onAuthChange", faunadb_token)
  this.setState({faunadb_token})
  this.props.model.onAuthChange(faunadb_token);
}
  }
}
    <ThemeProvider theme={theme}>
      <>
        <Layout />
        <GlobalStyle />
      </>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
