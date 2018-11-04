import React from 'react'
import { Navbar } from 'react-bootstrap';
import netlifyIdentity from 'netlify-identity-widget';

export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar >
                <button onClick={() => { netlifyIdentity.open() }} >  Login </button>
                <button > Log Out </button>
            </Navbar>
        )
    }
};