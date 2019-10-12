import React from 'react';
import './css/header.css';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse header-wrapper">
          <div className="navbar-header">
            <a className="navbar-brand header-brand" href="#">WebSiteName</a>
          </div>
      </nav>
    )
  }
}

export default Header;