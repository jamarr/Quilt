import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import netlifyIdentity from 'netlify-identity-widget'

// import Sidenews from './News/Sidenews';



class App extends Component {
  constructor() {
    super()

    this.handleLogIn = this.handleLogIn.bind(this)
  }

  handleLogIn () {
    // You can import the widget into any component and interact with it.
    netlifyIdentity.open()
  }
  render() {
    return (
      <div className="App">
      
          <button onClick={this.handleLogIn} >Log in with netlify</button>

        <News />
      </div>
    );
  }
}

export default App;
