import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import News from './News/News';
import Dashboard from './Dashboard';
import Navbar from './Navbar';






class App extends Component {

  render() {
    return (
      <BrowserRouter className="App">
        <>
          <Navbar />
          <Switch>
            <Route path="/Dashboard" exact={true} component={Dashboard} />
            <Route path="/" exact component={News} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}


export default App;
