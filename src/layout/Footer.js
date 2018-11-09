import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 35px;
  margin: 2rem 6.5rem;
`;

const FooterStyle = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5rem; 
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 7rem; 
  }
`;

const Copyright = styled.p`
  font-size: 28px;
  margin-top: 6.5rem;
`;

const Form = styled.div`
  width: 20rem;
  margin-top: 2rem;
  margin-right: 7rem;
  input {
    width: 100%;
  }
  textarea {
    width: 100%;
  }
`;


export default class Footer extends Component {
  render() {
    return (
      <div>
        <FooterStyle>
          <div className="container">
            <Title>STAY CONNECTED</Title>
            <ul>
              <li>
                <i className="fa fa-facebook-f fa-2x" />
              </li>
              <li>
                 <i className="fa fa-twitter-square fa-2x" />
              </li>
              <li>
                <i className="fa fa-linkedin fa-2x" />
              </li>
              <li>
                <i className="fa fa-github-square fa-2x" />
              </li>
              </ul>
            </div>
            <Copyright>&copy; 2018 QUILT</Copyright>

          <Form>
            <form name="contact" method="POST" action="https://formspree.io/jamarredwards@gmail.com" netlify>
              <label>Your Name<input type="text" name="name" required/></label>
              <label>Your E-mail<input type="email" name="email" required/></label>
              <label>Message:<textarea name="message" required></textarea></label>
              <button type="Submit" value="Send">Submit</button>
            </form>
          </Form>
        </FooterStyle>
      </div>
    );
  }
}
