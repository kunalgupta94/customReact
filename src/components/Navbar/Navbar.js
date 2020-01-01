import React, { Component } from "react";
import "./navbar.css";
import Hamburger from "../../assets/Hamburger";
class Navbar extends Component {
  render() {
    const { children } = this.props;
    return (
      <nav className="navbar_main">
        {children}
      </nav>
    );
  }
}

export default Navbar;
