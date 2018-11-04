import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Navbar from './Navbar';



class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
        <News />

        </div>
    
    );
  }
}

export default App;
