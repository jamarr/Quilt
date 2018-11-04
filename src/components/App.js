import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import News from './News/News';
import Dashboard from './Page2/dashboard';
// import Sidenews from './News/Sidenews';





class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <Switch>
          <Route path="/page2" exact component={Dashboard} />
          <Route path="/" exact component={News} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
