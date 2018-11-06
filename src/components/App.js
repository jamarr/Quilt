import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import News from '../components/News/News';
import Dashboard from './Dashboard';
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
