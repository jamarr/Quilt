import React, { Component } from 'react'

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light  justify-content-between">
      <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onclick="this.blur();">
        <span className="navbar-toggler-icon"></span>
      </button>
      </nav>
      <a className="navbar-brand ml-4" href="#">
        <div className="logo-holder">
        <span className="logo-text-mobile"id='logo-text'>Quilt</span>
        <div id="darkblue" className="row logo-row"></div>
        <div id="blue" className="row logo-row"></div>
        <div id="lightblue" className="row logo-row"></div>
        <div id="purple" className="row logo-row"></div>
        <div id="lightred" className="row logo-row"></div>
        <div id="red" className="row logo-row"></div>
        <div id="darkred" className="row logo-row"></div>
        </div>
      </a>
      <div className="collapse navbar-collapse  mt-3.5 my-lg-0 justify-content-end" style="background:#FEF0EB;"id="navbarSupportedContent">
        <ul className="navbar-nav"></ul>
      </div>
      <li class="nav-item">
      <a class="nav-link" href="./index-how.html">How Does It Work?</a>
      </li>
      </div>

   
 


    )
  }
}
