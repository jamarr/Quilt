import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import News from './News/News';
import Navbar from './Navbar';
import Footer from './footer';






class App extends Component {

  render() {
    return (
      <BrowserRouter className="App">
        <>
          <Navbar />
          <Switch>
            <Route path="/" exact component={News} />
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}


export default App;
