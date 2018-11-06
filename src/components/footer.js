import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 35px;
  padding: 20px;
`;

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <Title>STAY CONNECTED</Title>
            <div className="row">
              <ul className="nav flex-column flex-sm-row align-self-center">
                <li className=" col nav-item">
                  <i className="fa fa-facebook-f fa-2x" />
                </li>
                <li className=" col nav-item">
                  <i className="fa fa-twitter-square fa-2x" />
                </li>
                <li className=" col nav-item">
                  <i className="fa fa-linkedin fa-2x" />
                </li>
                <li className=" col nav-item">
                  <i className="fa fa-github-square fa-2x" />
                </li>
              </ul>
            </div>
            <Title>&copy; 2018 QUILT</Title>
          </div>
          <div className="row d-flex align-content-between flex-wrap">
            <form method="POST" action="https://formspree.io/jamarredwards@gmail.com" netlify>
              <div className="form-group row">
                <label for="inputEmail3">Email</label>
              </div>
              <div className="form-group">
                <input type="text" name="name" />
              </div>
              <div className="form-group">
                <input type="email" name="_replyto" />
              </div>
              <div className="form-group">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </footer>
      </div>
    );
  }
}
