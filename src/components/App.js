import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import News from './News/News';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Footer from './footer';






class App extends Component {
  // constructor() {
  //   super()
  // }
  // handleLogIn = () => { //Make into Single Function On Navbar 
  // Use Teriniary to determine Login = True or false 

  // }
  render() {
    return (
      <BrowserRouter className="App">
        <>
          <Navbar />
          <Switch>
            <Route path="/Dashboard" exact={true} component={Dashboard} />
            <Route path="/" exact component={News} />
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}


export default App;
