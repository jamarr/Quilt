import React, { Component } from "react";

export default class Account extends React.Component {
  render() {
    return (
      <div>
        <ul className="dropdown-menu">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
            >
              Account
              <span className="caret" />
            </a>
          </li>
          <li className="form-btns">
            <btn className="form-btn btn btn-primary">Login</btn>
          </li>
          <li>
            <btn className="form-btn btn btn-success">Sign Up</btn>
          </li>
        </ul>
        <form>
          <div className="form-group">
            <input
              type="email"
              id="form-item"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Email or Username"
            />
            <input
              type="password"
              id="form-item"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Password"
            />
          </div>
        </form>
      </div>
    );
  }
}
