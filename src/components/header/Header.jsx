import React from 'react';
import './css/header.css';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse header-wrapper">
          <div className="navbar-header">
            <button className="navbar-brand header-brand brand-button">FullThrotttle</button>
          </div>
      </nav>
    )
  }
}

export default Header;