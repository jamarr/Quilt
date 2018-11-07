import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 35px;
  margin: 2rem 4rem;
`;

const FooterStyle = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5rem;  
`;

const IconWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 5rem;
`;

const Copyright = styled.p`
  font-size: 28px;
  margin-top: 6.5rem;
`;

const Form = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-right: 6rem;
`;

export default class Footer extends Component {
  render() {
    return (
      <div>
        <FooterStyle>
          <div className="container">
            <Title>STAY CONNECTED</Title>
            <IconWrapper>
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
              </IconWrapper>
            </div>
            <Copyright>&copy; 2018 QUILT</Copyright>

          <Form>
            <form method="POST" action="https://formspree.io/jamarredwards@gmail.com" netlify>
              <div className="form-group row">
                <label for="inputEmail">Email</label>
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
          </Form>
        </FooterStyle>
      </div>
    );
  }
}
