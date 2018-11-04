import React  from 'react'
import { Navbar } from 'react-bootstrap';

export default class NavBar extends React.Component {




  render() {
    return (
      <Navbar>
     <button> Login</button>
          <button>Log Out</button>
    </Navbar>
    
    )
  }
}