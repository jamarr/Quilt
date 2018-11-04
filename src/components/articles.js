import React, { Component } from 'react'

export default class Articles extends Component {
  render() {
    return (
      <div>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle saved-caret" data-toggle="dropdown" href="#">Saved Articles
            </a>
            <ul className="dropdown-menu">
              <li><span id="saved-article-note">Please login to view your saved articles</span></li>
            </ul>
          </li>
      </div>
    )
  }
}
