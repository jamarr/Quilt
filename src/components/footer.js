import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <div>
        <div>
        <div className ="page-footer">
        <div className="row footer-content mx-0 mt-md-5 mb-md-5">
          <div className="col-md-2 ml-md-5">
            <div className="footer-logo text-center">
              <h2><span>Q</span><span>U</span><span>I</span><span>L</span><span>T</span><span>&copy</span></h2>
              <hr />
              <div className="row">
                <div className="ball ball1"></div>
                <div className="ball ball2"></div>
              </div>
              <div className="row">
                <div className="ball ball3"></div>
                <div className="ball ball4"></div>
              </div>
            </div>
          </div>
      </div>
      </div>
          <div className="col-md">
          </div>
        </div>
      <div className="row pt-4 footer-copyright-row">
        <div className="footer-copyright col px-md-4 p-sm-0"><span>© 2018
          <a className="font-weight-light">The Containers</a></span>
        </div>
        <div className="col text-right desk-contact-ads">
          <ul className="contact-ads p-md-0">
           <li><a href="#">Contact</a></li>
           <li><a href="#">Ads</a></li>
          </ul>
        </div>
      </div>
      </div>
    )
  }
}
