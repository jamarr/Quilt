import React, { Component } from 'react'

export default class Dropdown extends Component {
  render() {
    return (
      <div>
          <div className="col-md-1">
          </div>
          <div className="col-md-4 mid-foot-box p-0">
            <div className="row">
              <div className="col p-0">
                <button type="button" className="btn bg-transparent p-0 footer-head" data-toggle="collapse" data-target="#demo">News</button>
                <div id="demo" className="collapse show">
                  <ul className="footer-links">
                 <li><a href="#">Senate</a></li>
                 <li><a href="#">House</a></li>
                 <li><a href="#">Campaign</a></li>
              </ul></div>
              </div>
              <div className="col p-0">
                <button type="button" className="btn bg-transparent p-0 footer-head" data-toggle="collapse" data-target="#demo2">Policy</button>
                <div id="demo2" className="collapse">
                  <ul className="footer-links">
                    <li><a href="#">Defense</a></li>
                    <li><a href="#">Environment</a></li>
                    <li><a href="#">Finance</a></li>
                  </ul>
                </div>
              </div>
              <div className="col p-0">
                <button type="button" className="btn bg-transparent p-0 footer-head" data-toggle="collapse" data-target="#demo3">Opinion</button>
            <div id="demo3" className="collapse">
              <ul className="footer-links">
               <li><a href="#">Columnists</a></li>
               <li><a href="#">Reports</a></li>
               <li><a href="#">Editorials</a></li>
              </ul>
             </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
