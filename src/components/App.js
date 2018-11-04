import React, { Component } from 'react';
import './App.css';
import News from './News/News';
// import Sidenews from './News/Sidenews';



class App extends Component {
  render() {
    return (
      <div className="App">
        <News />
      </div>
    );
  }
}

export default App;
