import React, { Component } from 'react'



export default class Footer extends Component {
  render() {
    return (
       <div>
        <footer className=" mx-auto page-footer font-small cyan darken-3">
        <div className="container">
        <div className="row">
        <div className="col-sm py-5">
        <div className="mb-5 justify-content-center">
        <a className="fb-ic">
        <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        <a className="tw-ic">
        <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        <a className="gplus-ic">
        <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        <a className="li-ic">
        <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        <a className="ins-ic">
        <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        </div>
        </div>
        </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2018 QUILT
        </div>
        </footer>  
        </div>
    )
  }
}
