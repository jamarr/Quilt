import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from "react-router-dom";
import News from './News/News';
=======
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import News from '../components/News/News';
import Dashboard from './Dashboard';
>>>>>>> 55cfbd669ff4d0af77a48d55a5226634d250d5f6
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
            <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
